// let nums = [2, 3, 5, 6, 7, 1]
// const adds = nums.map((n) => {
//     return n += 2
// })
// console.log(adds)
// //
// const minus = nums.map((n) => {
//     return n -= 1
// })
// console.log(minus)
// //
// let names = ["resh", "sam", "ram", "teju"]
// const addNames = names.map((n) => {
//     return n + "bala"
// })
// console.log(addNames);

// //
// const add = names.map((a) => {
//     return `hi ${a}`
// })
// console.log(add);

// // in object
// const marks = [
//     {
//         subject: "maths",
//         score: 90
//     },
//     {
//         subject: "english",
//         score: 80
//     },
//     {
//         subject: "tamil",
//         score: 85
//     }
// ]
// const output = marks.map((m) => {
//     return m.subject;
// })
// console.log(output);
// //
// const capital = marks.map((m) => {
//     return m.subject.toUpperCase();
// })
// console.log(capital)
// //
// const addName = marks.map((m) => {
//     return {
//         ...m,
//         subject: `The marks of raj in ${m.subject}`
//     }
// })
// console.log(addName);

//filter
// const numbers = [9, 4, 6, 2, 8, 1, 3, 4, 12,25, 23, 57, 13];
// const oddNumber = numbers.filter((n) => {
//     return n % 2 === 1;
// })
// console.log(oddNumber);
// //
// const bigNumber = numbers.filter((n) => {
//     return n > 5;
// })
// console.log(bigNumber);
// //
// const touristPlaces = [
//     {
//         place : 'tajmahal',
//         city : 'agra',
//         state : 'delhi' 
//     },
//     {
//         place : 'meenakshiTemple',
//         city : 'madurai',
//         state : 'tamilnadu'
//     },
//     {
//         place : 'gatewayofindia',
//         city : 'mumbai',
//         state : 'maharashtra'
//     },
//     {
//         place : 'marinabeach',
//         city : 'chennai',
//         state : 'tamilnadu'
//     },
//     {
//         place : 'mahabalipuram',
//         city : 'chennai',
//         state: 'tamilnadu'
//     }
// ]
//
// const places = touristPlaces.filter((p) => {
//     return p.state === 'tamilnadu';
// })
// console.log(places);
// //
// const south = touristPlaces.filter((st) => {
//     return st.city ==='chennai';
// })
// console.log(south);
// //
// const newPlaces = touristPlaces.filter((pl) => {
//     return pl.city === 'chennai' || pl.state === 'tamilnadu'
// })
// console.log(newPlaces);

//forEach
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// array.forEach((el) => {
//     if (el % 2 === 0) {

//         console.log(el);

//     }
//     //return el;
// })
// array.forEach(el => {
//     if (el > 2) {
//         console.log(`number is ${el}`);
//     }
// })
// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

// movies.forEach((movie) => {
//     console.log(movie);
//     console.log(movie.title);
// })
// movies.forEach(movie => {
//     console.log(`${movie.title} / ${movie.score}`)
// })

//every & some
const marks = [23, 25, 56, 78, 65, 45, 87, 34, 86, 48, 98 ] 
const output = marks.every(m => {
    return m > 25;
})
console.log(output);
let input = marks.some(m => {
    return m > 25;
} )
   console.log(input); 

let words = ["dog", "ba", "big", "pt", "bat"];
let out =words.every((word) =>  word.length === 3
)
console.log(out);
let inputs = words.some((word) => word.length === 2)
console.log(inputs);

//find findindex
const courses = [
    {id : 1, name : 'java'},
    {id : 2, name : 'html'},
    {id : 3, name : 'html'},
];
const findcourse = courses.find((c) => {
    return c.name === 'html';
})
console.log(findcourse);
const array = [1, 5, 6, 8, 9];
let found = array.find((el) => {
    return el > 2;
})
console.log(found);
let find = array.findIndex((f) => {
    return f === 6;
})
console.log(find);