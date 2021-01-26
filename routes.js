const express = require('express');

const batchRouter = require('./Routes/batch');

const router = express.Router();

// Batches Routes
router.use('/batches', batchRouter);

module.exports = router;
