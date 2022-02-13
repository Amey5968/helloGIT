// String is a Sequence of Characters;
var str = "1234567890";
console.log(str);

console.log(str[4]);
console.log(str.length);


// String Methods; // Real info is not hampered;

// Slice Method (Cuts string according to value);
var SlicedStr = str.slice(5 , 9); // Starting value is Inclusive and End Value is Exclusive;
var slicedStr = str.slice(3 , -4); // here -4 means leave last 4 elements;
console.log(SlicedStr); 
console.log(slicedStr); 
console.log(str);

// SubString Method;  Start value se shuru krenge aur aage ki di hui value tak capture krenge;
var substring = str.substr(2,6); 
console.log(substring);
console.log(str);

// Replacing
str = "YOLO";
console.log(str);
console.log(str.toLowerCase());
str = "fomo";
console.log(str.toUpperCase());

// Concatenation method
let fststr = "Hello";
let sndstr = " Guys";
let concatstr = fststr + sndstr;
console.log(concatstr);


let str1 = " Believe in yourselve";
let combinestr = concatstr.concat(str1 , " and in me");
console.log(combinestr);

// trim Method; --> Remove all starting and Ending  whitespaces and not in between;
let trimStr = "                          hello How are you    ";
console.log(trimStr);
console.log(trimStr.trim());
console.log(trimStr.length);




