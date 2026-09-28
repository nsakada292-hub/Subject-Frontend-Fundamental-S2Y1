const person1 = {
    "firstName": "sakada",
    "lastName": "neourm",
    "age": 19,
    "position": "student"
}
const person2 = {
    "firstName": "lynin",
    "lastName": "heng",
    "age": 18,
    "position": "student"
}

const personArrObject = [person1, person2];
personArrObject.map((person) => {
    console.log(
        `
        First Name: ${person.firstName}
        Last Name: ${person.lastName}
        Age: ${person.age}
        Position: ${person.position}
        `
    );
    
});
console.table([person1]);
console.table([person2]);