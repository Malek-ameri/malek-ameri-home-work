const fs = require('fs');

fs.access('test.txt', fs.constants.F_OK, (err) => {
  if(err) console.log("your file does not exist");
  else console.log("Your file is there")
});