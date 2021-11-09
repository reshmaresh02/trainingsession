
//9thtask
//Task description: Creates an object composed of the inverted keys and values of object.
// Expected Result: { 'a': 1, 'b': 2, 'c': 3 } => { '1': 'a', '2': 'b', '3': 'c' }
// Task Complexity: 1 of 5
// @param {Object} data - The object to invert.
// @returns {Object} - Returns the new inverted object.
//  const invert = (data) => {
// let inverse = {};
//     for(let key in data){
//        inverse[data[key]] = key;
//         }
// return inverse;
// }
// const data = {
//     a : 1,
//     b : 2,

//     c : 3
// }
// console.log(invert(data));

// 1st task
// //Task description: Write a method that creates a new array with given values 
// // Expected Result: (3, 'a') => ['a', 'a', 'a'] 
// // Task Complexity: 1 of 5 
// const fill = (arraySize, value) => {
//   const array = [];
//   for (let i = 0; i < arraySize; i++) {
//     array.push(value);
//   }
//   return array;
// }
// const data = 3;
// const valueToFill = 'a';
// console.log(fill(data, valueToFill)) // ['a', 'a', 'a']

// 8th task
// //Task description: Write a method that to get the sum of array actually the sum of all their elements.
// / Expected Result: ([3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]) => 276
// //Task Complexity: 1 of 5

// const sums = (number) => {
//  let reducer = (previousValue, currentValue)  => previousValue + currentValue; 
//     return (number.reduce(reducer));  
//  }
// const number = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]
// console.log(sums(number)) // 276

//13th
//Task description: Omit the properties from the source object
//* Expected Result: {a :1 ,b:2 : c:3} => {b : 2}
//* Task Complexity: 1 of 5
//  @param {object} data - The source object
//   @param {Array} paths - The property paths to omit.
// @returns {Object}

// const omit = (data, paths) => {
//   const output = {
//     data: data['b']
//   };
//   for (let keys in data) {
//     output[data] = data.b;
//   }
//   //  return data;
//   //[data[key]] = key;
//   //Object.keys(data);  
//   return output;
// }
// const data = {
//   a: 1,
//   b: 2,
//   c: 3,
// }
// const paths = ['a', 'c']
// console.log(omit(data, paths));

//8th 2nd method
// const sum = (numbers) => {
//     let add = 0;
//     for (let i = 0; i< numbers.length; i++) {
//     add += numbers[i];
//     }
//     return add;
// }
// const numbers = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]
// console.log(sum(numbers)) // 276


//4th
//Task description: Write a method that reverts input array 
//* Expected Result: [1, 2, 3] => [3, 2, 1] 
//* Task Complexity: 1 of 5 
//* @param {Array} array - Array of any elements 
//* @returns {Array} 

// const reverse = (array) => {
//   //     //throw new Error('Put your solution here');;
//   let output = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     output.push(data[i]);
//   }
//   return output;
// }
// const data = [1, 2, 3];
// console.log(reverse(data)); // [3, 2, 1]

//4th
//2nd method
// const reverse = (array) => {
//   array.reverse('');
//   return array;
// }
// const data = [1, 2, 3];
// console.log(reverse(data)); // [3, 2, 1]


//6th
// Task description: Write a method that to print a even Numbers only without conditional statement using loop.
//    Expected Result: (15) => 0,2,4,6,8,10,12,14,16,18,20,22,24,26,28
//    Task Complexity: 1 of 5
// /
//  const printEvenNumbers = (size) => {
//    for (let i = 0; i <= size - 1; i++) {
//      //if (i % 2 === 0);
//      console.log(i * 2);
//    }
//  }
//  const size = 15
//  console.log(printEvenNumbers(size));

//12th
// Task description: Get all the values from the source object
//   Expected Result: {a :1 ,b:2 : c:3} => [1,2,3]
//   Task Complexity: 1 of 5
//   @param {object} data - The source object
//   @returns {Array}
// const values = (data) => {
//   let output = [];
//   for (let key in data) {
//     let value = data[key];
//     //let out = data[];
//     output.push(value);
//   }
//     return output;

// }
// const data = {
//   a: 1,
//   b: 2,
//   c: 3,
// }
// console.log(values(data)); // [1,2,3]

//10th
//  /Task description: Creates an array of the own enumerable property names of object.
//  * Expected Result: { 'a': 1, 'b': 2, 'c': 3 } => ['a', 'b', 'c']
//  * Task Complexity: 1 of 5
//  * @param {Object} data - The object to query.
//  * @returns {Array} - Returns the array of property names.
// const keys = (data) => {
//   const result = [];
//   for (let key in data) {
//     let num = (key);
//     result.push(num)
//   }
//   return result
// }
// // const data = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// console.log(keys(data)); // ['a', 'b', 'c']
// 13th
const omit = (data, paths) => {
  let output = {}
  for (let key in data) {
    // if (key === paths) {
    //   output[key];
    // }
    if (!paths.includes(key)) {
      output[key] = data[key];
    }
  }
  return output;
}
const data = {
  a: 1,
  b: 2,
  c: 3,
}
const paths = ['a', 'c']
console.log(omit(data, paths));
//11
// const pick = (data, paths) => {
//   //     //throw new Error('Put your solution here');
//   let output = {}
//   for (let key in data) {
//     if (paths.includes(key)) {
//       output[key] = data[key];
//     }
//   }
//   return output;
// }

// const data = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// const paths = ['a', 'c']
// console.log(pick(data, paths));
//7th task
//Task description: Write a method that to add up each element in the same position and
//  create a new array containing the sum of each pair. Assume both arrays are of the same length.
//* Expected Result: ([4, 6, 7],[8, 1, 9]) => [12, 7, 16]
//* Task Complexity: 1 of 5

//const sumOfPairs = (x, y) => {
//   let array = [x[0] + y[0], x[1] + y[1], x[2] + y[2]];
//   return array;
// }
//  let num1 = [4, 6, 7];
//  let num2 = [8, 1, 9];
// console.log(sumOfPairs(num1, num2)) // [12, 7, 16]

//2nd method 7th task
// const sumOfPairs = (x, y) => {
//   let array = [];
//   for (let i = 0; i < x.length; i++) {
//     const val = x[i] + y[i];
//     array.push(val);
//   }
//   return array;
// }
// let num1 = [4, 6, 7];
// let num2 = [8, 1, 9];
// console.log(sumOfPairs(num1, num2)) // [12, 7, 16]

//5th task
//Task description: Gets all but the first element of array.
 //* Expected Result: [1, 2, 3] => [2, 3]
 //* Task Complexity: 1 of 5
 //* @param {Array} array - The array to query.
 //* @returns {Array}

//  const tail = (array) => {
//     //throw new Error('Put your solution here');
//     let arr = [];
//     for (let i = 1; i<array.length; i++){
//       arr.push(array[i]);
//     }
//     return arr;
// }
// const data = [1, 2, 3];
// console.log(tail(data)); // [2, 3]

//2nd
// Task description: Write a method to creates a slice of array with n elements dropped from the beginning.
//  * Expected Result: [1, 2, 3, 4] => [3, 4]
//  * Task Complexity: 1 of 5
//  * @param {Array} array - Array of any elements
//  * @param {Number} elementToDrop - number of elements to drop.
//  * @returns {Array}

//  const drop = (array,elementToDrop) => {
//     //throw new Error('Put your solution here');
//     let elmtdrop = [];
//     for(let i=2; i < array.length; i++){
//       //elmtdrop.push(array[i]);
//       if(array === elementToDrop){
//         elmtdrop(array)
//       }
//       if(elementToDrop.includes("array") ){
//         elmtdrop(array) = data(array)
//       }
//     }
//     return elmtdrop;
// }
// const data = [1, 2, 3, 4];
// const elementToDrop = 2;
// console.log(drop(data,elementToDrop)); // [3, 4]

// Task description: Creates an object composed of the picked object properties.
//  * Expected Result: { 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'] => { 'a': 1, 'c': 3 }
//  * Task Complexity: 1 of 5
//  * @param {Object} data - The source object
//  * @param {Array} paths - TThe property paths to pick.
//  * @returns {Object}

//  const pick = (data,paths) => {
// //     //throw new Error('Put your solution here');
// let output = {}                                                                    
// for (let key in data){
// // // if(key === paths) {
// // //   output[key];
 
//  if(paths.includes(key)){
//    output[key] = data[key];
// }
// }
// return output;
//  }

// const data = {
//     a : 1,
//     b : 2,
//     c : 3
// }
// const paths =  ['a', 'c']
// console.log(pick(data,paths));



// Task description: Write a method to creates a slice of array with n elements dropped from the beginning.
//  * Expected Result: [1, 2, 3, 4] => [3, 4]
//  * Task Complexity: 1 of 5
//  * @param {Array} array - Array of any elements
//  * @param {Number} elementToDrop - number of elements to drop.
//  * @returns {Array}

// const drop = (array,elementToDrop) => {
//   //throw new Error('Put your solution here');
// //let output = array.slice(elementToDrop);
// let output = [];
// for(let i = 0; i< array.length; i++){
//  //output.slice(elementToDrop);
// //output.splice(1, 2);
// if (array[i].includes(elementToDrop)){

// }

// }
// return output;
// }
// const data = [1, 2, 3, 4];
// const elementToDrop = 2;
// console.log(drop(data,elementToDrop));
 //const intersection = (firstObject, secondObject) => {
    //     //throw new Error(`put your solution here ${firstObject}, ${secondObject}`);
    let output = {};
    for (let key in firstObject) {
        if (firstObject[key] === secondObject[key]) {

            output[key] = firstObject[key];
            
            
            //        if(secondObject.includes(key)){
            //            output[key] = firstObject[key];
        }
    }
    return output;
}
const data = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
console.log(intersection(data, data2)); // { b: 2 }
const intersection = (firstObject, secondObject) => {
  let output = {};
  for (let key in firstObject) {
      if (firstObject[key] === secondObject[key]) {

          output[key] = firstObject[key];
      }
  }
  return output;
}
const data = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
console.log(intersection(data, data2)); // { b: 2 }