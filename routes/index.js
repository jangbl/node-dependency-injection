const express = require('express');
const devRouter = require('./dev');

const router = express.Router();
router.use('/dev', devRouter);

module.exports = router;
