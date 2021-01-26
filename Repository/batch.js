const mongoose = require('mongoose');
const model = require('../Core/batch');

//A function for creating a batch in the database...
const addBatch = async ({ number, size, color, quantity }) => {
  //create a new object of the batch model with the specific values...
  const batch = new model({ number, size, color, quantity });

  //Save the object in the database and return it...
  return await batch.save();
};

//A function for listing all the batches in the database...
const listBatches = async ({ page, size }) => {
  //Find the batches and return it with pagination...
  return await model
    .find()
    .skip(size * (page - 1))
    .limit(size);
};

module.exports = { addBatch, listBatches };
