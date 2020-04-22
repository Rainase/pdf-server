const express = require('express');
const pdf = require('html-pdf');
const pdfTemplate = require('../../pdfTemplate');

const router = express.Router()

router.post('/create', async (req, res) => {
  const body = await req.body;
  console.log(body)
  pdf.create(pdfTemplate(body)).toFile(`${__dirname}/leelo.pdf`, (err) => {
    try {
        res.send(Promise.resolve());
    
    } catch (error) {
      res.send(Promise.reject(error));
    }
  });
})

router.get('/get', async (req, res) => {
  res.sendFile(`${__dirname}/leelo.pdf`)
})
module.exports = router;