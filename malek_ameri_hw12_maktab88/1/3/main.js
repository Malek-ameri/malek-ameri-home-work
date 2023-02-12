// // Require library
// var xl = require('excel4node');

// // Create a new instance of a Workbook class
// var wb = new xl.Workbook();

// // Add Worksheets to the workbook
// var ws = wb.addWorksheet('Sheet 1');
// var ws2 = wb.addWorksheet('Sheet 2');

// // Create a reusable style
// var style = wb.createStyle({
//   font: {
//     color: '#FF0800',
//     size: 12,
//   },
//   numberFormat: '$#,##0.00; ($#,##0.00); -',
// });

// // Set value of cell A1 to 100 as a number type styled with paramaters of style
// ws.cell(1, 1)
//   .number(100)
//   .style(style);

// // Set value of cell B1 to 200 as a number type styled with paramaters of style
// ws.cell(1, 2)
//   .number(200)
//   .style(style);

// // Set value of cell C1 to a formula styled with paramaters of style
// ws.cell(1, 3)
//   .formula('A1 + B1')
//   .style(style);

// // Set value of cell A2 to 'string' styled with paramaters of style
// ws.cell(2, 1)
//   .string('string')
//   .style(style);

// // Set value of cell A3 to true as a boolean type styled with paramaters of style but with an adjustment to the font size.
// ws.cell(3, 1)
//   .bool(true)
//   .style(style)
//   .style({font: {size: 14}});

// wb.write('Excel.xlsx');
// const xl = require('excel4node');
// const wb = new xl.Workbook();
// const ws = wb.addWorksheet('Worksheet Name');

async function getUser() {
    const res = await fetch('https://reqres.in/api/users?page=1')
    users = await res.json();
    users = users.data
    console.log(users)
    
    const headingColumnNames = Object.keys(users[0])

    //Write Column Title in Excel file
    let headingColumnIndex = 1;
    headingColumnNames.forEach(heading => {
        ws.cell(1, headingColumnIndex++)
            .string(heading)
    });

    rowIndex =2
    users.forEach( record => {
        let columnIndex = 1;
        Object.keys(record).forEach(columnName => {
          if (typeof(record[columnName]) == 'string') {
            ws.cell(rowIndex,columnIndex++)
          .string((record [columnName]))
          } else {
            ws.cell(rowIndex,columnIndex++)
          .number((record [columnName]))
          }
        });
        rowIndex++;
    }); 
    wb.write('data.xlsx');
  }

getUser()