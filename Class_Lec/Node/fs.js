// fs --> file system module; (inbuilt); helps us to make file/folders , appeand data in them, delette data, read data;

const fs = require("fs"); // to call fs module , require(path of file);

const abc = require("../Javascript/temp"); // changing directory;
// require method , goes to file that is needed to be required. executes the file;
console.log(abc);
console.log(fs); 
// apeandfilesync appeands data into a file , if file is not present, it creates the file and then appeand the data;
                // file path // data to be appeanded;
fs.appendFileSync("f1.txt" , "hello I'm f2 file");
fs.appendFileSync("f1.txt", "YOu guys are smart");

// utf : uncoded(buffer) -> decoded;
// data recieved is an object type , data is in buffer format;
// to be redable , we convert it from buffer to strqing;
// console.log(data + ""); // automatic type conversion buffer string meh convert ho gyi;
let data = fs.readFileSync("f1.txt" , "utf-8");
console.log(data + "");