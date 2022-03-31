// In Js we cant take input but with help of node Js we can take input;
// To take input we use process.argv;
//                       -------------


// WCAT;

// It is used to display or make a copy content of one or more files in the terminal;

// Commands :

// 1  wcat filepath --> displays content of file in the termial;

// 2  wcat filepath1 filepath2 filepath3 --> displays content of all files 
// in terminal in given order;

// 3 wcat -s filepath --> convert big line breaks into a singular 
// line break;

// 4 wcat -n filepath --> give numbering to all lines ;

// 5 wcat -b filepath --> give numbering to non empty lines;

// 6 wcat filepath > filename2path --> put all content of filename into filename2 by overrindingand also creates
// filename2 if it doesnt exists;

// 7 wcat filename2path >> filename2path --> append all the 
// content of filename into filename2

// 8 node wcat -s filename > filename2 --> get the file content of filename remove
// large spaces and save the output in filename2. We can mix and match the options.


let fs = require("fs");



// input;
let inputArr = process.argv.slice(2);
// console.log(inputArr);




// options; (like -s , -n , -b (tokens) will start from - we will put them in optionArr);
let filesArr = [];
let optionArr = [];
// identify options --> If given input is token then put it inside option array, else other content put them inside filesArray;
for(let i = 0; i < inputArr.length; i++){ 
    let firstChar = inputArr[i].charAt(0); // This will pick first char of every word in inputArr and we will check if it has - or not;
    if(firstChar == "-"){
        optionArr.push(inputArr[i]);
    }
    else{
        filesArr.push(inputArr[i]);
    }
}





// read files;
let content = "";
for(let i = 0; i < filesArr.length; i++){
    let bufferContent = fs.readFileSync(filesArr[i]); // buffer;
    content += bufferContent + "\n"; // concatenate in string --> to convert buffer to string;
}
// console.log(content);



let contentArr = content.split("\r\n");
// console.log(contentArr);





// -s;
let isSpresent = optionArr.includes("-s"); // .includes(...) it give true or false on basis of if the given value is present or not;
if(isSpresent == true){
    
    for(let i = 1; i < contentArr.length; i++){
        if(contentArr[i] == "" && contentArr[i-1] == ""){
            contentArr[i] = null;
        }
        else if(contentArr[i] == "" && contentArr[i-1] == null){
            contentArr[i] == null;
        }
    }

    let tempArr = []; // We will only that element which is not null;
    for(let i = 0; i < contentArr.length; i++){
        if(contentArr[i] != null){
            tempArr.push(contentArr[i]);
        }
    }
    contentArr = tempArr;

}
console.log("................");
// console.log(contentArr.join("\n")); // -s ;






// -n;
let isNPresent = optionArr.includes("-n");
    if(isNPresent == true){
        for(let i = 0; i < contentArr.length; i++){
            contentArr[i] = `${i + 1}  ${contentArr[i]} `;
        }
    }
    // console.log(contentArr.join("\n"));








// -b;
let isBPresent = optionArr.includes("-b");
    if(isBPresent == true){
        
        let counter = 1;
        for(let i = 0; i < contentArr.length; i++){
            if(contentArr[i] != ""){
                contentArr[i] = `${counter} ${contentArr[i]}`;
                counter++;
            }
        }
        
    }
    console.log(contentArr.join("\n"));


