
let helpFunc = require("./commands/help");

let orgFunc = require("./commands/organize");

let treeFunc = require("./commands/tree");




let inputArr = process.argv.slice(2);

let command = inputArr[0];

let path = inputArr[1];




switch (command) { //organizee

    case "tree":
        //call tree function
        treeFunc.tree(path);
        // console.log("tree function called and executed succesfully on path " + path);
        break;
    case "organize":
        //call organize function
        orgFunc.organize(path);
        // console.log("organize function called and executed succesfully on path "+ path);
        break;
    case "help":
        //call help function
        helpFunc.help();
        // console.log("help function called and executed succesfully");
        break;
    default:
        console.log("command not recognized :/")
        break;

}





































// // Project :  File Organizer


// let helpFunc = require("./commands/help"); // importing exported files;
// // we used ./ instead ../ as we want to access command folder which was at same level of main.js folder;
// // we exported help in key value pair so we will import file in that file format only;

// let orgFunc = require("./commands/organize");// importing organize function;
// let treeFunc = require("./commands/tree");


// // taking input;
// let inputArr = process.argv.slice(2); // we input commmand node main.js help/organize folderpath ans we sliced start 2 input;
//                                       //            index :0--- 1------ 2------------ 3---------
// let command = inputArr[0]; //         help folderpath ;
//                            // index:  0--- 1---------

// let path = inputArr[1]; // copied path from input;



// // switch case; --> better performance;
// switch(command){

//     // command 1 : 
//     case  "tree" :
//         // call tree function;
//         treeFunc.tree(path);
//         console.log("tree function called and executed successfully" + path);
//         break;
    
//     // command 2 : 
//     case  "organize" : 
//         // call  organize function;
//         orgFunc.organize(path);
//         // console.log("organize function called and executed successfully" + path);
//         break;
    
//     // command 3 : 
//     case  "help" : 
//         // call help function;
//         helpFunc.help();
//         console.log("help function called and executed successfully" + path);
//         break;

//     default : 
//         console.log("command not recognized :/");
//         break;

// }











