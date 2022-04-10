const fs = require("fs");

const path = require("path");

function treeFn(dirPath) {
  if (dirPath == undefined) {
    console.log("Please Enter a Valid Path");
    return;
  }
  let doesExist = fs.existsSync(dirPath);
  if (doesExist == true) {
    treeHelper(dirPath, " ");
  }
}

function treeHelper(targetPath, indent) {
    let isFile = fs.lstatSync(targetPath).isFile();

    if (isFile == true) {
        let fileName = path.basename(targetPath);
        console.log(indent + "|--- " + fileName);
        return;
    }
    let dirName = path.basename(targetPath);
    console.log(indent + "└──" + dirName);

    let children = fs.readdirSync(targetPath);

    for (let i = 0; i < children.length; i++) {
      let childpath = path.join(targetPath, children[i]);
      treeHelper(childpath, indent + "\t");
    }
}

module.exports = {
  tree: treeFn,
};

// let srcPath="/Users/abhishekgoel/Desktop/Desktop/AbhishekGoel/FJP5/Node/"
// treeFn(srcPath);









// ├──

















// const fs = require("fs");

// const path = require("path");


// function treeFn(dirPath){
    
//     if(dirPath == undefined){ // if given is invalid;
//         console.log("please enter a valid Path");
//         return;
//     }

//     let doesExist = fs.existsSync(dirPath); // if given proper path;
    
//     if(doesExist == true){ // if path exists;
//         treeHelper(dirPath , " ");// then send it to helper function to print folders and files;
//     }

// }


// function treeHelper(targetPath, indent){

//     // 1) check if given path is of folder or file;
//     let isFile = fs.lstatSync(targetPath).isFile(); // we check if from given path that it is a file or folder;

//     // 2) if it is file continue
//     if(isFile == true){ // if it is file we continue or if it is folder we go to part 3);

//         let fileName = path.basename(targetPath); // basename gives last content of path;
//         console.log(indent + "|---" + fileName);
//         return;

//     }

//     // 3) print folder name;
//     let dirName = path.basename(targetPath);
//     console.log(indent + "|___" + dirName); // printing folder name;

//     // 4) files name inside folder;
//     let children = fs.readdirSync(targetPath); // reading content inside folder (files name);

//     // 5) traversing over files in folder;
//     for(let i = 0; i < children.length; i++){ // traversing over files in folder (folder path which we got from targetPath);
//         let childPath = path.join(targetPath, children[i]); // making path of folder to path of file which is inside that folder;
//         treeHelper(childPath, indent + "\t");
//     }
    

// }

// module.exports = {
//     tree : treeFn,
// };

// // let srcPath = "C:\DEV_CLASS\Class_Lec\Node\fileOrganizer";
// // treeFn(srcPath);