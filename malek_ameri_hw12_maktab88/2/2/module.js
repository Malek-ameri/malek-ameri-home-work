const { readFile, writeFile } = require("fs");

function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) reject(err);
      else {
        resolve(JSON.parse(data));
      }
    });
  });
}

function writeFilePromise(path, user) {
  return new Promise((_resolve, reject) => {
    writeFile(path, user, "utf-8", (err) => {
      if (err) reject(err);
    });
  });
}

// __________________creat__________

const creat = async (path,newUser) =>{
    const data = await readFilePromise(path);
    data.push(newUser);
    const users = JSON.stringify(data);
    await writeFilePromise(path,users)
}

// creat(path,newUser)

// __________________ delet___________________
const delet = async (path, id) => {
  const data = await readFilePromise(path);
  const newArray = data.filter((item) => item.uid !== id);
  const users = JSON.stringify(newArray);
  await writeFilePromise(path, users);
};
// delet(path,7785)

// ___________________updata__________
const update = async (path, user) => {
  const data = await readFilePromise(path);
  const newArray = data.filter((item) => item.uid !== user.uid);
  newArray.push(user);
  const users = JSON.stringify(newArray);
  await writeFilePromise(path, users);
};
module.exports = {creat,delet,update};
// readFilePromise(path).then((data) => {
// چرا وقتی که دیتا به یک متغییر پاس میدم مساوی با عدد 11 میشه
//   data.push(newUser);
//   const user = JSON.stringify(data);
//   writeFilePromise(path, user).catch((err) => {
//     console.log(err);
//   });
// });


