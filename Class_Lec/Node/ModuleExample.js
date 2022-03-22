const fs = require("fs");
let text = fs.readFileSync("f1.txt" , "utf-8"); // reads file;

// replace text in file;
text = text.replace("ALL" , "World");

console.log(text);

// write files;
// if we give a file namme which does not exists it will create a new file with that name, and as we have saved our text in text variable we will give that;
fs.writeFileSync("f3.txt" , text); 





