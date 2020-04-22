const express = require('express');

const createPdf = require('./pdf.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/pdf', createPdf);

module.exports = router;