const express = require('express');
const pdf = require('html-pdf');
const pdfTemplate = require('../../pdfTemplate');
let moment = require('moment');
var fs = require('fs');
const path = require('path');
const {Storage} = require('@google-cloud/storage');
const storage = new Storage({
  keyFilename: path.join(__dirname, "./ig-picker-6429540f231c.json"),
  projectId: 'ig-picker'
});
const router = express.Router()

function today() {
  let newDate = moment(new Date())
 return newDate.format('D-M-YYYY');
}
router.post('/create', async (req, res) => {
  try {
    const body = await req.body;
    const invoiceNr = await req.body.invoiceNr;
    console.log(invoiceNr);
    pdf.create(pdfTemplate(body)).toStream(async function(err, stream){
      stream.pipe(fs.createWriteStream(`${__dirname}/lasku_${invoiceNr}_${today()}.pdf`));
      await storage.bucket('ig-picker.appspot.com').upload(`${__dirname}/lasku_${invoiceNr}_${today()}.pdf`, {
        gzip: true,
      });
      fs.unlink(`${__dirname}/lasku_${invoiceNr}_${today()}.pdf`, async function (err) {
        if (err) throw err;
        // if no error, file has been deleted successfully
        console.log('File deleted!');
      });
    });
    res.json({
      message: `${body.clientName} invoice created`
    });
  } catch (error) {
    console.log(error)
  }
})

router.get('/get', async (req, res) => {
  const files = await storage.bucket('ig-picker.appspot.com').getFiles()
  res.send(files)
})
module.exports = router;