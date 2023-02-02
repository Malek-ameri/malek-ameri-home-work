const fs = require("fs");

fs.readFile("user-data.json", function (err, data) {
  if (err) console.log(err);
  else {
    const userData = JSON.parse(data);
    const adults = userData.filter((user) => user.age >= 18);
    console.log(adults);
  }
});
