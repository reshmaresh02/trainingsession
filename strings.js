
//15th
// const characters = ['A', 'B', 'C'];
// const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
// const vowels = ['a', 'e', 'i', 'o', 'u']
// const multi_combine = (characters, numbers) => {
    
//     const maxLength = Math.max(characters.length, numbers.length, vowels.length);
//     //let result = [];
//     for (let i = 0; i < maxLength; i++) {
//         let char = characters[i] || '';
//         let num = numbers[i] || '';
//         let vow = vowels[i] || '';
//        //let out= result.push(char + num + vow);
//        let result = (char.concat(num,vow));
//         console.log(result);
//        }
//       // return result.tostring();

    
//}
//console.log(multi_combine(characters, numbers, vowels));

//17th
// Task description: Write a method that returns an object composed of key-value pairs. 
//   * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 
//   * Task Complexity: 2 of 5 
//   * @param {Array} array - a deep array of pairs 
//   * @returns {Array} 
//17th
// const fromPairs = (array) => {
//   let  output = {};
//   for(let i = 0; i<array.length; i++){
//      // let arr = array[i];
//       output[array[i][0]] = array[i][1];
// //console.log(array);
// //let output = Object.fromEntries(array);
//   //console.log(output);
//   //console.log('array:', array);
//   //console.log('object:',output);
//   }
// return output;
// }
// const data = [['a', 1], ['b', 2]];
// console.log(fromPairs(data)); // { a: 1, b: 2 }

//18th
// Task description: Write a method that returns an array composed of nested array
//   * Expected Result: {a : 1, b :2, c:3} => [['a', 1], ['b', 2], ['c', 3]]
//   * Task Complexity: 2 of 5
//   * @param {Object} obj - The object to query.
//   * @returns {Array}

// const toPairs = (obj) => {
//   //throw new Error('Put your solution here');
//   let pair = [];
//   for (let key  in obj){
//     let out = [key, obj[key]];
//      pair.push(out)
  
//   }
//   return pair;
// }

// const data = {
//   a : 1,
//   b : 2,
//   c : 3,
// }
// console.log(toPairs(data)) // [['a', 1], ['b', 2], ['c', 3]]

//16th
const intersection = (firstObject, secondObject) => {
  let output = {};
  for (let key in firstObject) {
      if (firstObject[key] === secondObject[key]) {

          output[key] = firstObject[key];
        //if(secondObject.includes(key)){
           output[key] = firstObject[key];
      }
  }
  return output;
}
const data = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
console.log(intersection(data, data2)); // { b: 2 }


//STRING EXERCISES
// Task description: Write a method that to chop a string into chunks of a given length
//   * Expected Result: (javascript) =>  ["ja", "va", "sc", "ri", "pt"]
//   * Task Complexity: 1 of 5

// const chop = (str, chunk) => {
//    let choppedstr = [];
//    for (let i = 0; i < str.length; i += chunk) {
//       //console.log(str[i]);
//       let chops = (str.substr(i, chunk))
//       //choppedstr.substring(0, chunk).push(str[i]
//       choppedstr.push(chops);
//       // console.log(chops);
//    }
//    return choppedstr;
// }
// const str = 'javascript'
// const chunk = 2
// console.log(chop(str, chunk)) // ["ja", "va", "sc", "ri", "pt"]

//19th
// Task description: Write a method to convert a string into camel case.
//   * Expected Result: (JavaScript exercises) => "JavaScriptExercises"
//   * Task Complexity: 1 of 5

// const camelize = (str) => {
//    let camel = "";
//    const string = str.split(" ");
//    //console.log(string);
//    for(let words of string){
//    //console.log(words);
//    //console.log(words.toUpperCase());
//    const capital = words[0].toUpperCase() + words.substring(1);
//   // console.log(capital)
//    camel = camel.concat(capital);
//   //console.log(`"${camel}"`);
//    }
//   // camel.push(str.toString(''));
//   // console.log(str.join(''));

//       return `"${camel}"`;
//    }

// const str = 'JavaScript exercises'
// console.log(camelize(str)) // "JavaScriptExercises"

//21st
// Task description: Write a method to check whether a string is blank or not
//   * Expected Result: ('') => true
//   * Task Complexity: 1 of 5

// const checkIsBlank = (str) => {
//    let isString;
//    if (str === '') {
//       isString = true;
//    }
//    return isString;

// }
// const str = '';
// console.log(checkIsBlank(str)) // true

//20th
// Task description: Write a method that creates to capitalize the first letter of each word in a string.
//   * Expected Result: (js string exercises) => "Js String Exercises"
//   * Task Complexity: 1 of 5

// const capitalize = (str) => {
// }
// const str = 'js string exercises'
// console.log(capitalize(str)) // "Js String Exercises"

//23rd
// Task description: Write a method to convert a string into snakeCase case.
//   * Expected Result: (Robin Singh from USA) => "robin-singh-from-usa"
//   * Task Complexity: 1 of 5

// const snakeCase = (str) => {
//    let string = "";
//    const cases = str.split(' ').join('-');
//    //console.log(cases);
//    const word = cases.toLowerCase();
//    string = string.concat(word);
//    //console.log(string);
//    // for(let word of cases){
//    // console.log(word);
//    // const sent = word[0].toLowerCase();
//    //console.log(sent);
      //console.log(sent);
//    return `"${string}"`;
// }
// const str = 'Robin Singh from USA.'
// console.log(snakeCase(str)) // "robin-singh-from-usa"

const snakeCase = (str) => {
   let string = "";
   const cases = str.split(' ').join('-');
   const word = cases.toLowerCase();
   string = string.concat(word);
   return `"${string}"`;
}
const str = 'Robin Singh from USA.'
console.log(snakeCase(str))

const checkIsBlank = (str) => {
  // let isBlank;
  // if(str !== undefined  && !str.length){
  //   isBlank = true;
  if(!str){
      return true;
  }
  return false;
}
const str = '';
console.log(checkIsBlank(str)) // true
//2nd method
const checkIsBlank = (str) => {
// if(str !== undefined){
//  return true
// }
let isBlank;
if(!str.length){
  isBlank = true;
}
return isBlank;
}
const str = '';
console.log(checkIsBlank(str)) // true
white_check_mark
