//const nums = [1, 3, 6, 7, 8, 4, 9];


// function square(numbers){
//     const output = [];
//     for (let n of numbers){
//          output.push(n * n);
//     }
//     return output;
// }
// console.log(
//     square(nums)
//)

//function type map
// const squared = nums.map((n) => {//n * n)
//     return n + 1;
// })
// console.log(squared);


//filter
// function even(numbers) {
//     const output = [];
//     for (let n of numbers) {
//         if (n % 2 === 0) {
//             output.push(n * n);
//         }
//     }
//     return output;
// }
// console.log(
//     even(nums)
// )
// const filtered = nums.filter((n) => {
//     return n % 2 === 0
// })
// console.log(filtered)


// mapping in object
// const data = [['a', 1], ['b', 2]];
// let output = {};
// data.forEach((d) => {
//    // console.log(d)
//    //const key = d[0];
//    //const value = d[1];
//    //output[key] = value
//     const[key,value] = d;
//     output[key] = value;
// })
// console.log(output);

//every
// const allEven = nums.every((n) => {
//     return n % 2 == 0
// })
// console.log(allEven);

const data = {
    a : 1,
    b : 2,
    c : 3,
};
let output = [];
data.forEach((d) => {
    console.log(d);
})