//Array methods - push,pop,shift,unshift,slice,splice,concat,join,includes,indexOf
//  let name = ['ram', 'sam', 'varun', 'hari']

//  console.log(name.push('resh'));// to add value in last
//  console.log(name);

// console.log(name.pop(''));// to remove last element
// console.log(name);

// console.log(name.shift(''))// to remove first one from variable
//  console.log(name);

// console.log(name.unshift('vijay'));// to add in first
// console.log(name);

// let colors = ['red', 'blue', 'yellow', 'orange', 'purple', 'black']

//  let color =colors.slice(2);//to take only the particular elements
// console.log(color.slice(2))
//  console.log(color);

//

// console.log (colors.splice(2, 0, 'violet'));//checked in colors variable
//  console.log(colors);

// console.log(colors.splice(2, 1, 'indigo'));
// console.log(colors);

//  let colorPresent = colors.includes('purple');// checks whether element is there or not
//  console.log(colors.includes('purple'));
// console.log(colorPresent);

//  let index = [colors.indexOf('blue') , colors.indexOf('purple')]; //index of the element
// console.log([colors.indexOf('blue') , colors.indexOf('purple')]);
//     console.log(index);

//  let array = ['1', '3', '5']
//  let number = ['2', '4', '6']
//  let concat = array.concat(number); //merge two arrays
// console.log(array.concat(number));
//  console.log(concat);

// let con = array.join(number);
// console.log(array.join(number));
//  console.log(con);

// const numbers = [ 7, 9, 6];// join arrays to number
// const joined = numbers.join('');
// console.log(joined);
 
// let concat = colors.concat(name);
// console.log(concat);

// let join = name.join('');
// console.log(join);


//String methods - split,substring,charAt,includes,repeat,toLowerCase,toUpperCase,trim

// let subject = ("maths")
// console.log(subject.toUpperCase());
// console.log(subject.toLowerCase());
// const sports = ("CRICKET")
// console.log(sports.toLowerCase());
// console.log(sports.toUpperCase());

const message = ("   i am a genious  ")
console.log(message.trim().toUpperCase());
console.log(message.includes("am"));
console.log(message.includes("world"));
console.log(message.trim().repeat(2));
console.log(message.substring(4, 7));
console.log(message.substring(5));

const chat = ("windowschrome");
const comp = chat.split("");
console.log(comp);

console.log(chat.substring(3,6));
console.log(chat.substring(5).toUpperCase());

const msg = "i have a book and a pen"
console.log(msg.split('', 4).join(''));

const mg = msg.split();
console.log(mg);
// console.log(msg.charAt(7));
// console.log(msg.charAt(8));
// console.log(msg.charAt(4))


//object method key assign

// const books = {
//     name : "gullivers travels",
//     edition: 1998,
//     author: "jonathan swift",
//     lang: "english"
// }

// console.log(Object.keys(books));
// console.log(Object.values(books));

// const target = {a: 1, b: 3, c: 8};
// const source = {f: 4, c: 6, a: 7};
// const value = Object.assign(target, source);
// console.log(target);
// console.log(value);

// const nums = [1, 12, 3, 6, 2, 8, 4, 5, 9, 11, 7, 10];
// let temp;
// let start = 0;
// let end = nums.length - 1;
// while (start < end) {
//   temp = nums[start];
//   nums[start] = nums[end];
//   nums[end] = temp;
//   start++;
//   end--;
// }
// console.log(nums);
// const nums = [2, 11, 5, 10, 7, 8];
//  let temp;
//  let start = 0 ;
// let end = nums.length-1;
// //numbers = [];                                                       const nums = [2,11,5,10,7,8];
// reverseArray(nums, 0, nums.length-1)
// function reverseArray(intnums, intstart, intend){
//   while (start<end){
//     temp = nums[start];
//     nums[start] = nums[end];
//     nums[end] = temp;
//     start++;
//     end--;
//     return nums
//   }
// }   console.log(reverseArray(nums));
// //console.log(reverseArray());

const nums = [2,11,5,10,7,8];
function reversedArray(temp){
temp;
let start = 0;
let end = nums.length - 1;
while (start < end) {
  temp = nums[start];
  nums[start] = nums[end];
  nums[end] = temp;
  start++;
  end--;
}
  return nums;

}
console.log(reversedArray(nums));







