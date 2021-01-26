const express = require('express');
const { addBatch, listBatches } = require('../../Repository/batch');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    //Get the values required for creating the batch from the request body...
    const { number, size, color, quantity } = req.body;

    //Pass the batch values to to addBatch function to create the batch in the database and return the created batch...
    const batch = await addBatch({ number, size, color, quantity });

    //Send the created batch with the response...
    res.send(batch);
  } catch (error) {
    //Catch any error and send it the user with status code 400...
    res.status(400).send(`Something went wrong`);
  }
});

router.get('/', async (req, res) => {
  try {
    //Get the pagination parameters from the request body...
    const { page, size } = req.query;

    //Send the pagination parameters to the listBatches function to get all the batches that the user has produced so far...
    const batches = await listBatches({ page: parseInt(page) || 1, size: parseInt(size) || 10 });

    //Send the batches with response to the user...
    res.send(batches);
  } catch (error) {
    //Catch any error and send it the user with status code 400...
    res.status(400).send(`something went wrong`);
  }
});

module.exports = router;
