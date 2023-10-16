const express = require('express');
const router = express.Router();

const { searchQuery } = require('../controllers/search');

router.get('/search', searchQuery);

module.exports = router;
