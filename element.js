// Task description: Removes all given values from array using values array for equality comparisons.
//  * Expected Result: ['a', 'b', 'c', 'a', 'b', 'c'] => ['b', 'b']
//  * Task Complexity: 1 of 5
//  * @param {Array} array - The array to query.
//  * @param {Array} values - The values to remove.
//  * @returns {Array}

// const pull = (array, x) => {
//     let output = [];
//     for (let i = 0; i < array.length; i++) {
//         if (!x.includes(array[i])){
//             output.push(array[i]);

//         }
//     }
//     return output;

// }
// const data = ['a', 'b', 'c', 'a', 'b', 'c'];
// const values = ['a', 'c'];
// console.log(pull(data, values)); // ['b', 'b']


// Task description: Creates an array of data values not included in the other given arrays
//  * Expected Result: [2, 1], [2, 3] => [1]
//  * Task Complexity: 2 of 5
//  * @param {Array} array - The array to inspect.
//  * @param {Array} valuesToExclude - The values to exclude.
//  * @returns {Array}

// const difference = (array, valuesToExclude) => {
//     //throw new Error('Put your solution here');
//     let output = [];
//     for (let i = 0; i < array.length; i++) {
//         if (!valuesToExclude.includes(array[i])) {
//             output.push(array[i]);
//         }
//     }
//     return output;
// }
// const data = [2, 3, 4];
// const valuesToExclude = [1, 2, 3, 5];
// console.log(difference(data, valuesToExclude)); // [1]
//  console.log(difference([1,2],[2,3])) // [1]
// console.log(difference([3,2],[2,1])) // [3]
// console.log(difference([2,2],[2,2])) // []
// console.log(difference([1,2,3,5],[2,3,4])) // [1,5]
// console.log(difference([2,3,4],[1,2,3,5])) // [4]


// Task description: Write a method that to combine elements from 3 arrays to 
//   * generate a string
//   * Expected Result: (['A', 'B', 'C'],['1', '2', '3', '4', '5', '6', '7', '8'],['a', 'e', 'i', 'o', 'u']) => 'A1aB2eC3i4o5u678'
//   * Task Complexity: 2 of 5

const characters = ['A', 'B', 'C'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
const vowels = ['a', 'e', 'i', 'o', 'u']
const multi_combine = (characters, numbers) => {
    // let r = characters.join(numbers);
    //  return r.join('');

    const maxLength = Math.max(characters.length, numbers.length, vowels.length);
    for (let i = 0; i < maxLength; i++) {
        let char = characters[i] || '';
        let num = numbers[i] || '';
        let vow = vowels[i] || '';
          let r = (char.concat(num,vow)); 
         //r.join('');
       // let out = r.join('');
        //let out = console.log(r.join(''));
    //console.log(r.join());
    console.log(r.join)

    }
}
console.log(multi_combine(characters, numbers, vowels));

//         // let ch;
// let num;
// let vow;
// if (characters[i]) {
//     ch = characters[i]
// } else {
//     ch = 0;
// }
// if (numbers[i]) {
//     num = numbers[i]
// } else {
//     num = 0;
// }
// if (vowels[i]) {
//     vow = vowels[i]
// } else {
//     vow = 0;
// }
// const s = ch.join(vow);
//const s = charactersjoin(vowels);
//const v = s.join(vowels);



//     }
//    return r;
// }
// console.log(multi_combine(characters, numbers, vowels))

// Task description: Write a method that finds shallow intersections of objects 
// * Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 } 
// * Task Complexity: 3 of 5 
// * @param {Object<string | number>} firstObj - Object with values of primitive data types 
// * @param {Object<string | number>} secondObj - Object with values of primitive data types 
// * @returns {Object} 

// const intersection = (firstObject, secondObject) => {
//     //     //throw new Error(`put your solution here ${firstObject}, ${secondObject}`);
//     let output = {};
//     for (let key in firstObject) {
//         if (firstObject[key] === secondObject[key]) {

//             output[key] = firstObject[key];
            
            
//             //        if(secondObject.includes(key)){
//             //            output[key] = firstObject[key];
//         }
//     }
//     return output;
// }
// const data = { a: 1, b: 2 };
// const data2 = { c: 1, b: 2 };
// console.log(intersection(data, data2)); // { b: 2 }
