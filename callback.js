const employees = [
    {
        name : 'ram',
        age : 20,
        salary : 10
    },
    {
        name : 'sam',
        age : 20,
        salary : 20
    },
    {
        name : 'jan',
        age : 30,
        salary : 35
    },
]

const cars = [
    {
        make : '2000',
        model : 'ford',
        type : 'hatchback'
    },
    {
        make : '2010',
        model : 'maruthi',
        type : 'hatchback'
    },
    {
        make : '1999',
        model : 'ford',
        type : 'sedan'
    },
]
/*

function findIndex1(data){
    for (let i = 0; i < data.length; i++){
        if(data[i].name === "ram"){
            return i;
        }
        //console.log(data[i])

    }
}

function findIndex2(data){
    for (let i = 0; i < data.length; i++){
        if(data[i].age === 25){
            return i;
        }
        //console.log(data[i])
    }
}

function findIndex3(data){
    for (let i = 0; i < data.length; i++){
        if(data[i].type === "hatchback"){
            return i;
        }
        //console.log(data[i])
    }
}

function findIndex4(data){
    for (let i = 0; i < data.length; i++){
        if(data[i].model === "ford"){
            return i;
        }
        //console.log(data[i])
    }
}
console.log(findIndex1(employees));
console.log(findIndex2(employees));
console.log(findIndex3(cars));
console.log(findIndex4(cars));
//console.log(employees);
//console.log(cars);
*/

// const employeesgreet = employees.map((e) => {
//     return Object.assign({}, e,{
//         name : `hi ${e.name}`
//     })
    
// })
 //console.log(employeesgreet);

// short end spread operator
const employeesgreet = employees.map((e) => {
    return {
        ...e,
        name : `hi ${e.name}`
    }
})
console.log(employeesgreet);

// filter in object
const employeeAge = employees.filter((e) => {
    return e.age == 20
})

console.log(employeeAge)