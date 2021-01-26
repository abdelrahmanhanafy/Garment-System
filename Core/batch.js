const mongoose = require('mongoose');

//Define the schema for the batches...
const schema = new mongoose.Schema({
  //Number is an unique number, required and greater than zero...
  number: {
    type: Number,
    unique: true,
    required: true,
    min: [1, 'Number must be greater than zero'],
  },

  //Size is required within specific values...
  size: {
    type: String,
    required: true,
    enum: ['S', 'M', 'L', 'XL'],
  },

  //Color also is required within specific values...
  color: {
    type: String,
    required: true,
    enum: ['red', 'blue', 'black', 'green'],
  },

  //Quantity is required and and greater than zero...
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Quantity must be greater than zero'],
  },
});

//Using schema set method to delete the id and __v when querying the data...
schema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.__v;
  },
});

//Create the model of the batch...
const model = mongoose.model('Batches', schema);

module.exports = model;
