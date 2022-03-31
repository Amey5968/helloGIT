// console.log(x);
// console.log(b);
// var x = 10;
// let b = 100;


// Block Scope;
// variable declared inside a block are accessible inside that block , those variable are known to be block Scope;
// Variable declared using let and const are blocked scope;
// Variable declared using var are function scoped;

var a = 100;
{
    var a = 10; // similar to var a = 100 as variable declared using var are not block scoped;
    let b = 20; // block scoped;
    const c = 30; // --||--;

    console.log(a); // 10;
    console.log(b); // 20;
    console.log(c); // 30;
}

console.log(a); // 10;
// console.log(b); // Refrence error;


let b = 10;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(b);