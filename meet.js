const employees = [
    {
        name : 'ram',
        age : 20,
        salary : 10
    },
    {
        name : 'sam',
        age : 25,
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
// function findIndex(data,key,value){
//     for (let i = 0; i < data.length; i++){
//         if(data[i][key] === value){
//             return i;
//         }
//     }
//     return -1;
// }
function findIndex(data,fn){
    for (let i = 0; i < data.length; i++){
        let condition = fn(data[i]);
        if(condition){
        //if(data[i][key] === value){
            //if(fn(data[i])){
            return i;
        }
    }
    return -1;
}

// console.log(findIndex(employees, "name", "resh"));
// console.log(findIndex(employees, "age", 25));
// console.log(findIndex(cars, "type", "sedan"));
// console.log(findIndex(cars, "model","ford"));
console.log(
    findIndex(employees,function(employee){
        return employee.name == "r" || employee.salary == 10
    })
)
console.log(
    findIndex(cars, function(car){
     return car.type === "sedan"
    })

)
function sedanCheck(c){
return c.type == "sedan"
}
console.log(
    findIndex(cars,sedanCheck)
)

 const index =   findIndex(employees,function(e){
        return e.name == "sam"
    })
console.log(index);