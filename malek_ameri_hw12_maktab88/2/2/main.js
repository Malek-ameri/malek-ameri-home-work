const { readFile, writeFile, appendFile } = require("fs");
const { creat,delet,update } = require("./module")
const path = "./user-data -1.json";
const newUser = {
  uid: 7785,
  firstname: "malek",
  lastname: "ameri",
  city: "Bushehr",
  postalCode: "3345673232",
  phoneNumber: "04111334452",
  position: "analyzer",
};
