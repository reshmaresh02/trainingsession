const nums = [1,6,8,2,4,10,14,12]//write a function to check for a given array has number 
//NO
//let i = 0;
for (let i = nums.length - 1; i >= 0; i--){
console.log(nums[i]);
}
// if (nums[3] === 2){
//   console.log("array");
// }
// /
// NO 3
// isTwo(nums[0]);
// isTwo(nums[1]);
// isTwo(nums[2]);
// isTwo(nums[3]);
// isTwo(nums[4]);
// isTwo(nums[5]);
// isTwo(nums[6]);
// isTwo(nums[7]);
// //NO 4
// let i = 0;
// while(i<8){
//   isTwo(nums[i]);
//   i++;
// }
// //NO 5
// let i = 0;
// for(let i =0; i<nums.length; i++){
//   isTwo(nums[i]);
// }
  
//NO 3,4,5 SECOND STEP 
  // function isTwo(num){
  //   if (num === 4){
  //     console.log("array");
  //   }
  // }
// NO 6
// const person = {
//   name: "reshma",
//   age: 23,
//   isFemale : true,
//   hobbies : ['singing']
// }

// for (let key in person){
//   console.log(person[key]);
// }


// const nums = [1, 12, 3, 6, 2, 8, 4, 5, 9, 11, 7, 10];
//  let j = 0;
// for (let i = 0; i < nums.length; i++) {
//   j += nums[i];
// }
//    console.log(nums[j]);


 //EXERCISE
//6.
// let i = 0;
// while (i < nums.length) {
//   i++;
//   console.log(nums[i]);// 12, 6,8,5,11,10
//   i++;
// }
//7.
// let i = 0;
// while (i < nums.length) {
//   i++;
//   console.log(nums[i]);//12,3,6,2,8,4,5,9,11,7,10, undefined
// }
//8
// let i = nums.length;
// while (i >= 0) {
//   console.log(nums[i]);//undefined,10,7,11,9,5,4,8,2,6,3,12,1..
//   i--;
// }
// 9
//for (let i = 0, j = i + 1; i < nums.length && j < nums.length; i++, j++) {
 //console.log(nums[i] + nums[j]);//13,15,9,8,10,12,9,14,20,18,17...
//}
let x = 3;
// // const square = (x) => {
// //     return x * x;
// // }
// // console.log(square(x));
// //console.log(square);