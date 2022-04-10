let fs = require("fs"); //fs module
let path = require("path"); //path module
let types = {
    media: ["mp4", "mkv", "mp3","mov"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex',"csv",'json'],
    app: ['exe', 'dmg', 'pkg', "deb","apk"],
    images: ['png','jpg','jpeg']
}


function organizer(srcPath) {



  //1. to check if srcPath is present
  if (srcPath == undefined) {
    //The process.cwd() method returns the current working directory of the Node.js process.
    //console.log(srcPath); //undefined
    srcPath = process.cwd();
    // console.log("source path is ",srcPath);
  }




  //2. to create a directory-> organized_files
  // let organizedFiles = srcPath + "/" + "organized_files";
  let organizedFiles = path.join(srcPath, "organized_files");
  console.log("organized files folder path is ", organizedFiles);
  
  if (fs.existsSync(organizedFiles) == false) {
    //organizedfiles naam ka folder exist nhi krta to ek folder bana do warna rhne do
    fs.mkdirSync(organizedFiles);
  } 
  else console.log("folder already exists");





  //3. scan the entire srcPath(doenloads folder in this case);
  //Reads the contents of the directory.-> basically reads the names of files present in directory
    let allFiles = fs.readdirSync(srcPath);
    // console.log(allFiles);





  //4.trvaerse over all the files and classify them on the basis of their extension (.pdf , .mp3)
    for (let i = 0; i < allFiles.length; i++){
      // let ext = allFiles[i].;
      //extname returns the extension of the file
      let fullPathOfFile = path.join(srcPath, allFiles[i]);
      console.log(fullPathOfFile);
      //1. check if it is a file or folder
      //lstatsync gives the information regarding the link provided ,
      let isThisAFile = fs.lstatSync(fullPathOfFile).isFile(); //true-> file hai to  or false-> agar folder h 
      console.log(allFiles[i] + " is " + isThisAFile);
      if (isThisAFile) {
        //1.1 get ext name
        let ext = path.extname(allFiles[i]).split(".")[1];
        // console.log(ext);
        //1.2 get folder name from extension
        let folderName = getFolderName(ext); //archives
        // console.log(folderName);
        //1.3 copy from src folder (srcPath) and paste in dest folder (folder_name e.g. document, media etc)
                        //copy      kya copy kro    paste
        copyFileToDest(srcPath, fullPathOfFile, folderName);
      }
    }
  }


function getFolderName(ext) {
  //magic
  for (let key in types) {
    // console.log(key);
    for (let i = 0; i < types[key].length; i++) {
      
      if (types[key][i] == ext) {
        return key;
      }

    }

  }
  return "miscellaneous"
}

function copyFileToDest(srcPath, fullPathOfFile, folderName) {
  
  //1. folderName ka path banana h
  let destFolderPath = path.join(srcPath, "organized_files", folderName); //....../downloads/organized_files/archives
  // console.log(des);
  
  //2 check folder if exists, if it does not, then make folder
  if (!fs.existsSync(destFolderPath)) {
    fs.mkdirSync(destFolderPath);
  }

  //3. copy file from src folder to dest folder
  // Returns the last portion of a path
  let fileName = path.basename(fullPathOfFile); //abc.zip
  let destFileName = path.join(destFolderPath, fileName);    
                      // src        dest
  fs.copyFileSync(fullPathOfFile, destFileName);
  
}


// let srcPath="/Users/abhishekgoel/Desktop/Desktop/AbhishekGoel/FJP5/Node/fileOrganizer/downloads"
// organize(srcPath);

module.exports = {
  organize:organizer
}






































// const fs = require("fs"); //fs module
// const path = require("path"); //path module
// const { Z_ASCII } = require("zlib");

// let types = {
//     media: ["mp4", "mkv", "mp3","mov"],
//     archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
//     documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex',"csv",'json'],
//     app: ['exe', 'dmg', 'pkg', "deb","apk"],
//     images: ['png','jpg','jpeg']
// }


// function organize(srcPath){



//     // Step 1) to check if srcpath is present;
//     if(srcPath == undefined){
//                                  // process.cwd() method returns the current working directory of the node.js process;
//         srcPath = process.cwd(); // gives current working directory;
//     }



//     // Step 2) : to create a directory --> organized _files;
//     let organizedFiles = path.join(srcPath, "organized_files"); // joined organized files string with srcpath, and at that path we will make a folder of name "oraganized file"
//     if(fs.existsSync(organizedFiles) == false){ // if file does not exits;
//         fs.mkdirSync(organizedFiles);
//     }
//     else {
//         console.log("folder already exists"); // if file already exists;
//     }



//     // Step 3) Scan the entire srcPath(download folder in this case);
//     // reads the content of directory --> reads the names of files present in directory;
//     let allFiles = fs.readdirSync(srcPath);
//     console.log(allFiles);




//     // Step 4) traverse over all files and classify then on basis pf their extension;
//     for(let i = 0; i < allFiles.length; i++){
//         // let ext = path.extname(allFiles[i]); // extname returns extension  of files;
//         // console.log(ext);
        

//         let fullPathOfFile = path.join(srcPath , allFiles[i]); // path recieved will be ...node/fileorganizer/downloads/abc.zip;
//         // lsStatSync gives info regarding the link provided; // 
       

//         // 1) Check if it is file or folder; as we can only organize files not folder which are at srcpath(downloads);
//         let isFile = fs.lstatSync(fullPathOfFile).isFile();// returns true or false  // provides info regarding from given path if it is file or folder; and .isfile() provides value in true if path is of file;
//         if(isFile){

//             // a)In case of file : get ext name of that file;
//             let ext = path.extname(allFiles[i]).split(".")[1];// after we find that it is file we find its extension eg .zip to remove . we split it on basis of .;
//             console.log(ext);
//             // b)Get folder name from extension i.e in case of we get pdf file so we need to put it in document folder so we need to find foldertype (document) from extension(pdf);
//             let folderName = getFolderName(ext); // function  -> get folder name like image, document from given extension;
//             // c)copy from src folder (srcPath (download folder)) and paste in destination folder (e.g document folder, Image folder, media folder, etc);
//             //             copy(src) yeh copy kro   paste(dest)
//             copyFileToDest(srcPath, fullPathOfFile, folderName);
//         }
    
//     }

// }

// function getFolderName(ext){
//     for(let key in types){ // key is iterator types is arrray; 
//         for(let i = 0; i < types[key].length; i++){
//             if(types[key][i] == ext){
//                 return key;
//             }
//         }
//     }
//     return "miscellaneous"; // edge case : if any file type which is of diffrent type will be put in miscellaneous folder;
// }

// function copyFileToDest(srcPath, fullPathOfFile, folderName){
//     // 1) folderName ka path banana h;
//     let destFolderPath = path.join(srcPath, "organised_files", folderName); // ...../downloads/organized_files/archives;

//     // 2) check if folder exists, if not , then make folder;
//     if(!fs.existsSync(destFolderPath)){
//         fs.mkdirSync(destFolderPath);
//     }

//     //3. copy file from src folder to dest folder
    
//     // Returns the last portion of a path
//     let fileName = path.basename(fullPathOfFile); //abc.zip ;
//     let destFileName = path.join(destFolderPath, fileName);                    
//                         // src        dest
//     fs.copyFileSync(fullPathOfFile, destFileName); // it copies content of file, not whole file so we need to give full path till file of destination [e.g : .../downloads/organized_files/archives/abc.zip]

// }



// // let srcPath = "C:\DEV_CLASS\Class_Lec\Node\fileOrganizer\downloads";
// // organize(srcPath);


// module.exports = {
//     organize : organize
// }
// // C:\DEV_CLASS\Class_Lec\Node\fileOrganizer\commands\organize.js






