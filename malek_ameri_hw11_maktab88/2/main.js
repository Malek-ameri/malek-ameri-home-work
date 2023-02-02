var fs = require('fs');

fs.writeFile('second-text.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});