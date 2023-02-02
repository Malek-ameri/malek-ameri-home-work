const fs = require('fs');

fs.unlink('third-text.txt', function (err) {
  if (err) console.log(err);
});