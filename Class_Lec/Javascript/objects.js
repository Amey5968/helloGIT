// Javascript objects are always in key value pair;
// defining objects
let obj = {}; // Empty object;
console.log(obj);

let person = {
    name : "Abhishek",  // here name is key and abhishek is value;
    age : 28,
    phone : "1234567890",
    gender : "male",
    height : "170cms",
}
console.log(person);
// To print particular property of an object we URLSearchParams;
// Types to access property 1) Dot notation 2) Square bracket notation
console.log(person.name);
console.log(person["gender"]);


let cap = {
    firstname : "Steve", 
    Lastname : "Rogers",
    friends : ["Bucky" , "Tony Stark" , "bruce Banner"],
    age : 102,
    isAvenger : true,
    address : { // nesting; // Adress is also a key as well object as it has key value pair;
        state : "manhattan",
        city : "New YOrk",
        Country : "USA"
    },
    sayHi : function () {
        console.log(`Hello this is ${this.firstname}`); // this keyword represents obj(cap);
    }
}

console.log(cap.friends[0]);
console.log(cap.friends[1]);
console.log(cap);
console.log(cap.friends);
cap.sayHi(); // To acess method;


// For Loop;
// 'in' keyword in JS is used to get keys from that object 
for(let keyy in cap) {
    console.log(keyy); // Printing key;
    console.log(cap[keyy]); // printing key value;  [Bracket notation usage];
    // In this to access key value {age : 102 ,here 102 is key value} we don't use DOt notation as (cap.keyy) , instead we use (cap[keyy]) notation ;
}

for(let keys in cap){
    console.log(` ${keys} :  ${cap[keys]}`);
}

let car = {
    name : "Ferrari",
    model : 2022,
    startengine : function() {
        console.log(this.name);
    },
}

console.log(car);
car.startengine(); // Accessing function startengine in object car;

// DEleting key of an object;
delete car.model;
console.log(car.model); // will give output as undefined as we have delete this model key;




//  methods --> obj ke andar function;
// Inside object we create we use key value pair to insert info inside object;
// if we use function inside an object its called method to access it we dont need to put it inside,
// console.log type object name.function name;
// Inside object there are properties e.g : In cap object properties are like name , age , friends;