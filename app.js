//Import node modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//import the routes....
const router = require('./Routes');

//Load config
dotenv.config();

//Set up a new app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Database Connect
(async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`Database connected...`);

    //Listen on the port
    let port = process.env.PORT || 8500;
    app.listen(port, () => console.log(`Listening on port ${port}!`));
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();

//Routes
app.use('/api', router);
