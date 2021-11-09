// let dividend = 18;
// let numbers = [2, 3, 4, 5, 6, 7, 8, 9];
// let idx;
// for (idx = 0; idx < numbers.length; idx++) {
//   let factor;
//   let divisor = numbers[idx];
//   if (dividend % divisor === 0) {
//     factor = true;
//   }
//   if (factor) {
//     console.log(divisor + ' is a factor of ' + dividend + '!');
//   }
// }
// const words = ['head','heal','tail','teal','tell'];
// let ladder = '';
// for(w of words){
//     if(w !== ''){
//    //if (words.length === 4){
//         w+='-';
//     }
//     ladder+=w
// }

// console.log(ladder); // expected : head-heal-tail-teal-tell
// const words = ['head','heal','tail','teal','tell'];
// let ladder = '';
// for(w of word){
//     if(w !== ''){
//         w+='-';
//     }
//     ladder+=w
// }
// console.log(ladder); // expected : head-heal-tail-teal-tell
// const words = ['head','heal','tail','teal','tell'];
// let ladder = '';
// for(let word of words){
//     if(word !== ''){
//         word +='-';
//     }
//     ladder += word;
// //     var popped = ladder.slice(0,24);
//     var lad = ladder.slice(0, -1);
// }
//  console.log(lad); // expected : head-

// let numbers = [1,2,3,4,5,6,7,8];
// function displayEvenNumbers() {
//     let evenNumbers = [];  
    
//      for(let i = 0; i < numbers.length-1; i++) {
//         if(i % 2 === 0){
//             evenNumbers.push(numbers[i]+1);
//         }
//         }
//         return evenNumbers;
//     } 
//     console.log(displayEvenNumbers()); // should return [2,4,6,8]

   // Random recipe generator
// * adding a new task
// * completing a given number of existing task
// * displaying the task list
  
let todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];
function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}
function completeTasks(n = 1) {
  let tasksComplete = 0;
  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    delete todos[0];
    tasksComplete++;
  }
  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}
function displayTaskList() {
  console.log(`ToDo list (${todos.length} tasks):`);
  console.log('---------------------');
  for (let idx = 0; idx < todos.length; idx++) {
    console.log(`-- ${todos[idx]}`);
  }
}
// Utilizing our task manager
addTask('oil change');
addTask('dentist');
addTask('homework');
completeTasks(3);
displayTaskList();

























