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


// let keyword is block scope
// var keyword is function scope in case of using function else its global scope;
for(var i = 0; i < 5; i++){
    console.log(i);
}
// out of scope we can print i which is initialized using var 
console.log( "out of scope" + " " + i);



// FUNCTIONS IN JS;
// function function_name(para1 , para2){

// }
// funtion_name(arg1 , arg2); (function calling)

function add(a , b){
    return a + b;
}

let ans = add(10 , 20);
console.log(ans);

// Function are treated as first class citizens in javascript;

function calculator(str , a , b){
    if(str == 'add'){
       return a + b;
    }
    else{
        return a - b;
    }
}

let fun = calculator(add , 20 , 40);
console.log(fun);

// 2) Function Expression;

let sayHi = function (){ // we are inserting whole function inside a variable;
    console.log("this is Function expression");
}
sayHi(); // prints function output;
console.log("" + sayHi); // it print whole function;


// 3) IIFE --> Imediately invoke function expression 
let multiply = (function multi(a , b){
    return a * b;
})(10 , 20);
console.log(multiply);


console.log("5" - 1);
console.log("ten" * 3);





