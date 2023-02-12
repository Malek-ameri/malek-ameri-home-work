// var docxConverter = require('docx-pdf');

// docxConverter('./input.docx','./output.pdf',function(err,result){
//   if(err){
//     console.log(err);
//   }
//   console.log('result'+result);
// });

// const path = require("path");
// const unoconv = require("awesome-unoconv");

// const sourceFilePath = path.resolve("./w1.docx");
// const outputFilePath = path.resolve("./w1.pdf");

// unoconv
//   .convert(sourceFilePath, outputFilePath)
//   .then((result) => {
//     console.log(result); // return outputFilePath
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const docxConverter = require('docx-pdf');

docxConverter('./test.docx','./output.pdf', (err, result) => {
  if (err) console.log(err);
  else console.log(result); 
});
