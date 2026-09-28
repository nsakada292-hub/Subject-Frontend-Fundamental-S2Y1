const person = ["skd","lynin", "roth", "ber", "rtn"];

const [stu1, stu2, stu3, stu4, stu5] = person;
console.log(stu1);
console.log(stu2);
console.log(stu3);
console.log(stu4);
console.log(stu5);

const object = {
    name: "skd",
    age: 19,
    gender: "male"
}

const {name, age, gender} = object;
console.log(`
    Name: ${name}
    Age: ${age}
    Gender: ${gender}
    `);
