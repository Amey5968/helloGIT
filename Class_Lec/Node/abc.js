let abc = 100;
console.log(abc);


let fs = require("fs");
fs.appendFileSync("two.txt" , "this is two.txt file");

let data = fs.readFileSync("two.txt");
console.log(data + "");



