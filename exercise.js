//  const company = {
//          name : 'provility',
//          noOfEmployess: 20,
//          owner:'ashraf',
//          services: ['mobile app' ,'web app'],
//          companyInfo:'name',
//          companyAttributes: ['noOfEmployess','owner']
//      }
//      console.log(company.name);//provility
//      console.log(company.noOfEmployess);//20
//      console.log(company['name']);//provility
//      company.name = "mathdisk"
//      console.log(company['name']);//mathdisk
//      console.log(company[company.companyInfo]);//mathdisk
//      company[company.companyInfo] = "mathdisk"
//      console.log(company['name']);//mathdisk
//      console.log(company[company.companyAttributes[1]]);//owner ashraf
//      console.log(company[company.companyAttributes[0]]);//20
    
    // const bird = {
    //      size: 'small',
    //  };
      
    //  const mouse = {
    //      name: 'Mickey',
    //      small: true,
    //  };
    //  console.log(mouse[bird.size]);//small
    //  console.log(mouse[bird['size']]);//small
//     //4.
    //  const obj = { a: 'one', b: 'two', a: 'three' };
    //  console.log(obj); // { b: "two", a: "three" }


//day 3 operators
// let num = 3;
// console.log(num);
// num = num + 4
// console.log(num);
// num +=3;
// console.log(num);
// const nums = [7, 3];
// //const first = nums[0];
// //const second = nums[1];
// //console.log(first);
// const[first,second] = nums;
// console.log(second);

// const person = {
//     name : "reshma",
//     age :27
// }
// //const name = person.name;
// //const age = person.age;
// //console.log(person);
// const{name} = "rosh";                }doubt
// const{age} = 33;
// const{name,age} = person;
// console.log(age);

//comparison
// const num1 = 3;
// const num2 = 4;
// const string1 = '3';
// console.log(num1 == 3);
// console.log(num1 == num2);
// console.log(num1 !== num2);
// console.log(num1 === string1);
// console.log(num1 !== string1);
// console.log(num1 == num2);
// console.log(num1 < num2);
// console.log(num1 > num2);
// console.log(num2 < num1);

// arithmaetic
// let num = 3;
// num ++;
// console.log(num);
// num--;
// console.log(num);
// ++ num;
// console.log(num);
// //condition operators
// const isMale = true;
// const isFemale = false;
// const gender = 'male';
// console.log(isMale && gender === 'male');
// console.log(isFemale || gender === 'male');
// console.log(isMale);
// console.log(isMale && gender === 'female');
//string template literal
// const firstname = "muhamed";
// const lastname = "faiyaz";
// const noOfParticipants = 50;
// const programGenre = "music";
// const fullname = firstname + " " + lastname;
// console.log(fullname);
// const message = "around" + " " + noOfParticipants +  " " + "people participated in" + " " +programGenre + "event";
// console.log(message);
// const messagestring = `around ${noOfParticipants} people participated in ${programGenre} event`;
// console.log(messagestring);
// //trenary
// const isMale = true;
// const gender = isMale?'male' : 'female';
// console.log(gender);

// in operator
// const nums = [1, 2];
// const person = {
//     name: "resh",
//     age : 30,
//     }
//     console.log(0 in nums);
//     console.log(3 in nums);
//     console.log('name' in person);
//     console.log('company' in person);
    const printEvenNumbers = (size) => {
        
        for (let i = 0; i <= size - 1; i++) {
         
        
        return i * 2;
        }
      }
      const size = 15;
      console.log(printEvenNumbers(size));
      