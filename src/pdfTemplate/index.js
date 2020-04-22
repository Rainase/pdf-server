let moment = require('moment');
module.exports = ({ clientName, clientAddress, yTunnus, itemName,itemCount, itemPrice }) => {
    const today = new Date();
    function addDays(today) {
       let newDate = moment(today).add(14, 'days')
      return newDate.format('D/M/YYYY');
    }
return `
<!doctype html>
<html>
   <head>
    <link rel="stylesheet" href="https://use.typekit.net/iei5mek.css">
      <meta charset="utf-8">
      <title>Lasku-${`${today.getDate()}_${today.getMonth()}`}</title>
      <style>
        body {
          font-family: itc-american-typewriter, serif;
          font-weight: 300;
        }
        .invoice-container {
          max-width: 800px;
          margin: 20px;
          display: flex;
          flex-direction: column;
        }
        .invoice-header p {
          float: right;
        }
        .invoice-sub-header {
         position: relative;
         line-height: 0.2em;
       }
        .sub-header-right {
         float: right;
         position: absolute;
         right: 0;
         top: 0;
        }
        .invoice-header img {
          width: 150px;
        }
        .invoice-body {
          margin: 60px 0;
        }
        div.minimalistBlack {
width: 100%;
text-align: left;
border-collapse: collapse;
}
.divTable.minimalistBlack .divTableCell, .divTable.minimalistBlack .divTableHead {

padding: 5px 4px;
}
.divTable.minimalistBlack .divTableBody .divTableCell {
font-size: 13px;
}
.divTable.minimalistBlack .divTableHeading {
border-bottom: 1px dashed #000000;
border-top: 1px dashed #000000;
}
.divTable.minimalistBlack .divTableHeading .divTableHead {
font-size: 1em;
font-weight: 400;
color: #000000;
text-align: left;
}
.minimalistBlack .tableFootStyle {
font-size: 14px;

}
.minimalistBlack .tableFootStyle {
font-size: 14px;
}
/* DivTable.com */
.divTable{ display: table; }
.divTableRow { display: table-row; }
.divTableHeading { display: table-header-group;}
.divTableCell, .divTableHead { display: table-cell;}
.divTableHeading { display: table-header-group;}
.divTableFoot { display: table-footer-group; border-top: dashed #000000  1px;}
.divTableBody { display: table-row-group;}
/* .other-items {text-align: right;} */
heed {
font-weight: 400;
}
      </style>
   </head>
   <body>
     <div class="invoice-container">
       <div class="invoice-header">
         <img src="https://elustik.s3.eu-central-1.amazonaws.com/4b930cdc4cba43068f3d02c7ded659f5.png" >
        <p style="font-size: 2em;">Lasku</p>
       </div>
       <div class="invoice-sub-header">
         <div class="sub-header-left">
           <p style="font-size: 2em;">Ostaja</p>
           <p>${clientName}</p>
           <p>${clientAddress}</p>
           <p>y-tunnus: ${yTunnus}</p>
         </div>
         <div class="sub-header-right">
           <p><heed>Laskun pvm:</heed> ${moment().format('D/M/YYYY')}</p>
           <p><heed>Laskun tunniste:</heed>1067</p>
           <p><heed>Maksuehto:</heed>14 pv</p>
           <p><heed>Eräpvm:</heed>${addDays()}</p>
         </div>
       </div>
       <div class="invoice-body">
        <div class="divTable minimalistBlack">
          <div class="divTableHeading">
          <div class="divTableRow">
          <div class="divTableHead other-items">Nimike</div>
          <div class="divTableHead other-items">Määrä</div>
          <div class="divTableHead other-items">hinta</div>
          <div class="divTableHead other-items">Veroton</div>
          <div class="divTableHead other-items">ALV%</div>
          <div class="divTableHead other-items">ALV EUR</div>
          <div class="divTableHead other-items">Yhteensä EUR</div>
          </div>
          </div>
          <div class="divTableBody">
          <div class="divTableRow">
            <div class="divTableCell">${itemName}</div>
            <div class="divTableCell other-items">${itemCount}</div>
            <div class="divTableCell other-items">${itemPrice}</div>
            <div class="divTableCell other-items">${itemCount * itemPrice}</div>
            <div class="divTableCell other-items">0</div>
            <div class="divTableCell other-items">0</div>
            <div class="divTableCell other-items">${itemCount * itemPrice}</div>
          </div>
          <div class="divTableRow">
            <div class="divTableCell"></div>
            <div class="divTableCell other-items">&NoBreak;</div>
            <div class="divTableCell other-items"></div>
            <div class="divTableCell other-items"></div>
            <div class="divTableCell other-items"></div>
            <div class="divTableCell other-items"></div>
            <div class="divTableCell other-items"></div>
          </div>
          </div>
          <div class="divTableFoot tableFootStyle">
          <div class="divTableRow">
          <div class="divTableCell" style="font-size: .5em;">Arvonlisäverolaki 8c § käännetty alv.</div>
          </div>
          </div>
          </div>
        </div>
       </div>
       <div class="invoice-footer">
        footer
       </div>
     </div>
</html>
   `;
};