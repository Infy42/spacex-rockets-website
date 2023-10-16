const express = require('express');
const router = express.Router();

const { getRockets } = require('../controllers/rockets-info');

router.get('/rockets', getRockets);

module.exports = router;