//day 1
// const salimInfo = ['salim', '26', 'true'];
// const rafiInfo = ['rafi', '19', 'true'];
// const fazilaInfo = ['fazila', '25', 'false']
// console.log(salimInfo, rafiInfo, fazilaInfo);

// const employee1Name = "rahul";
// const employee1Age = 26;
// const employee1IsMale = true;
// console.log(employee1Name, employee1Age, employee1IsMale);

// const employee2Name = "priya";
// const employee2Age = 29;
// const employee2IsMale = false;
// console.log(employee2Name, employee2Age, employee2IsMale);

// const employee3Name = "salim";
// const employee3Age = 23;
// const employee3IsMale = true;
// console.log(employee3Name, employee3Age, employee3IsMale);

// const names = ["ram", "raj", "sana", "bala"];
// const ages = [26, 29, 23, 19];
// const isMale = [true, false, true, true];
// console.log(names[1], names[2], names[0]);
// console.log(names[3], ages[3], isMale[3]);
// console.log(names[2], names[1], ages[2], ages[1]);
// console.log(names[0], ages[0], isMale[0]);
// console.log(names[2], ages[2], isMale[2]);

//day2
// Organize friend details into proper json.
//     There should be details of at least 3 friends
//     each friend should have the following details
//     name, age, is he or she a college friend, hobbies
//     you dont need to use real values for age etc but data types should be apt
    const friend1 = {
        name : "Ramya",
        age : 21,
        isCollegeFriend : true,
        hobbies : ['singing', 'dancing']
    }
    const friend2 = {
        name : "Samar",
        age : 26,
        isCollegeFriend : false,
        hobbies : "sports"
    }
    const friend3 = {
        name : "Ayesha",
        age : 19,
        isCollegeFriend : true,
        hobbies : ['readingbooks','cricket']
    }
    const friends = [friend1, friend2, friend3];

    console.log(friend1, friend2, friend3);

    console.log("Friends :", friend1.name, friend2.name, friend3.name);

    console.log("BestFriend :", friend3.name, friend3.age,friend3.isCollegeFriend, friend3.hobbies);

    console.log("hobbies :", friend1.hobbies, friend2.hobbies, friend3.hobbies);

    console.log(friends);

// const friends = {
//     name : ["sabira", "roshan", "irfana"],
//     age: [25, 23, 26],
//     isCollegeFriend: [true, true, false],
//     hobbies : ['readingbooks', 'dancing', 'swimming']
//     }
//     console.log(friends);
//     console.log(friends.name[2], friends.name[0], friends.name[1]);
//     console.log(friends.age[0], friends.age[1], friends.age[2]);
//     console.log(friends.name[0, 1, 2]); 
//     console.log(friends.name[1], friends.age[1], friends.isCollegeFriend[1], friends.hobbies[1]);
//     console.log(friends.hobbies[0], friends.hobbies[1], friends.hobbies[2]);     
     

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    