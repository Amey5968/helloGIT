// playing with files;
// Files --> create , read , update , delete;

let fs = require("fs");
// let buffer = fs.readFileSync("f1.txt" );
// console.log("" +  buffer); // To convert output from binary format to string we add a string to output;
// or we can add utf-8 in readFileSync("filename" , "utf-8");

let ans = fs.readFileSync("abc.js");
console.log( "" + ans);

// create : 
fs.openSync("one.txt" , "w"); // Here in openSync if we write a file  it cretes a new one and w indicates writing mode;

//write  :  if we have no file with given name it will create a new one and if exits content written will be replaced;
fs.writeFileSync("one.txt" , "Hum aaj node modules sikh rahge hai");

// Update : 
fs.appendFileSync("one.txt" , "How are u");





// making directory;

// making folder(directory);

// create         read            delete
// mkdirSync      readdirSync     rmdirSync

// fs.mkdirSync("meri Directory"); // once made and if we run it again throws error;

// making file;
// fs.writeFileSync("meri directory/merifile.txt" , "mera content");

// let content = fs.readdirSync("meri Directory"); // reads all files names inside given folder;
// console.log(content); // printing files name;

// to remove files we made;
// for (let i = 0; i < content.length; i++){
//     console.log("file " , content[i] , "is removed");
//     fs.unlinkSync("meri Directory/" + content[i]);  // removes files;
// }

// To remove folder;
// fs.rmdirSync("meri Directory"); // removes folders;


// fs.existSync() --> if a file exists at a path --> true/false;
// fs.lstatSync() --> tells given path is of folder or it's of file;

