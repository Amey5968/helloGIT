//              OS Module
let os = require("os");

// let mysystemArch = os.arch(); // return underlying architecture;
// console.log(mysystemArch);

// // returns information of os.cpus;
// let myCpuInfo = os.cpus();
// console.log(myCpuInfo);

// let hostName = os.hostname();
// console.log(hostName);

// // returns an object containing network interferences 
// let networkInfo = os.networkInterfaces();
// console.log(networkInfo);

// let m1 = os.release();
// console.log(m1);// returns os  as string;

// let m2 = os.platform();
// console.log(m2); // return total amount of memory in bytes as an integer;

// let m3 = os.uptime();
// console.log(m3);// returns hte system uptime in no of seconds;

// let m4 = os.type();
// console.log(m4); // returns info about the currently active user;

// let m5 = os.totalmem();
// console.log(m5);

// let m6 = os.userInfo();
// console.log(m6);


console.log(os.arch());
console.log(os.platform());
console.log(os.version());
console.log(os.cpus());
