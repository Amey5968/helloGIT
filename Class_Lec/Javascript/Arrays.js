let cars = ['BMW', 'AUDI', 'MG' ,'1','2','3', true];
console.log(cars);

// Accessing An element of array;
console.log(cars[0]);
console.log(cars[2]);
console.log(cars[4]);

// Changing Value of Array;
cars[2] = "RangeRover";
console.log(cars[2]);
console.log(cars);

// Adding Elements in Array
cars[6] = '4';
console.log(cars[6]);

// Methods of an Array;
// 1) POP Method --> this method removes the last element of array;
cars.pop();
console.log("after popping element" + cars);

// Push Method --> It pushes new element at end of array;
cars.push("Mercedes");

// Unshift method --> this adds at starting of array;
cars.unshift("Tesla");
cars.unshift("Mustang");
console.log(cars);

// Shift Method --> It Removes element from 0th index of array;
cars.shift();
console.log(cars);

// Finding Length of array;
console.log(cars.length);

// 2D-Array
let Arr2d = [ 
              [1, 2, 3],
              [4, 5, 6],
              [7, 8, 9] 
            ];

    console.log(Arr2d);
    console.table(Arr2d);


// Accessing element;
console.log(Arr2d[1][2]);