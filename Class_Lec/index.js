// var let const;

// Variable Declaration;
 var a; // We dont need to tell datatype;

//  variable initialization
a = 10;
 // Typeof operator
console.log(typeof a); // It tells type of data stored in variable;
console.log(a); // print


a = "Hello"; // Re-initialize of variable a;
console.log(a);
console.log(typeof a);

a = true;
console.log(a);
console.log(typeof a);


var num = 10.2;
console.log(num);
console.log(typeof num);

var t = true;
console.log(t);

var str = 'a'
console.log(str)

var str = "hello!\nhI there"; // use of backslash n;
console.log(str);

var num = 4500;
console.log(`half of ${num} is ${num/2}`);
// backtick(`) use ${variable name};


// var has some problem;
// It allow redeclaration;
var r = 10;
var r = 11;
console.log(r);

// To overcome this 
// so  we use let keyword 
// It dosent allow redeclaration;
// we can re-initilize a variable but cant redeclare it;
let l = 1000;
l = 5000;
console.log(l);


// Loops in js;
var num = 10;
for(var i = 1; i < num; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

// const keyword;
// Using const we cant re-initialize and re-declare variable;
const c = 2;
console.log(c);



