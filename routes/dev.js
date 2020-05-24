const express = require('express');
const { container } = require('../di-setup');
const validate = require('../middleware/validate');
const developerDto = require('../dto/developer');

const devController = container.resolve('devController');

const router = express.Router();
router.post('/', validate(developerDto), devController.createDev);
router.get('/:id', devController.getDev);

module.exports = router;
