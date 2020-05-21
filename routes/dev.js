const express = require('express');
const { container } = require('../di-setup');

const devController = container.resolve('devController');

const router = express.Router();
router.post('/', devController.createDev);
router.get('/:id', devController.getDev);

module.exports = router;
