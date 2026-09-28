let user = {
    name: "sakada",
    age: 19,
    gender: "male"
}
let role = {
    positon: "Backend Developer",
    salary: 800
}

// ... we call it rest operator, use it for catch all data in object, arr and anything

let userRole = {...user, ...role};  

const {name, age, gender, position, salary} = userRole;

console.log(`
    Name: ${name}
    Age: ${age}
    Gender: ${gender}
    Position: ${position}
    Salary: ${salary}
    `)

let displayAge = (...age) => age;
console.log(`Display Age: ${displayAge(1,2,3,4,5,6,7,8,9,10)}`);

