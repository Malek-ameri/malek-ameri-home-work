
const {readFile} = require("fs/promises");

const main = async () =>{
    const name =await readFile("./names.txt" ,"utf-8");
    const number =await readFile("./numbers.txt" ,"utf-8");
    const nameArray = name.split("\r\n")
    const nameObject = nameArray.map(item =>{
      let sperd=item.split("-")
      return {id:sperd[0],name:sperd[1],number:[]}
    })
    const numberArray= number.split("\r\n")
    for (const element of numberArray) {
        let numberSpred = element.split("-")
        nameObject.forEach(item => {
            if(item.id == numberSpred[0]){
              item.number.push(numberSpred[1])
            }
        });
    }
    console.log(nameObject)

    // console.log(numberArray)
    // console.log(nameObject)
}

main()
