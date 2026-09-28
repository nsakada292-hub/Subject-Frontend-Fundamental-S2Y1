// syntax type alias: 
// type typeName = TypeName 

// export use with interfce

enum gender {
    male = "Male" ,
    female = "Female"
}

export type Person = {
    firstName: string;
    lastName: string;
    age: number;
    gender: gender;
    dob: string;
}

// normal
let person: Person= {
    firstName: "Elon",
    lastName: "Mask",
    age: 40,
    gender: gender.male,
    dob: "ot dg"
}
console.table([person]);








// array
let people: Person[] =[{
    firstName: "Neourm",
    lastName: "Sakada",
    age: 19,
    gender: gender.male,
    dob: "07 May 2007",
},
{
    firstName: "Heng",
    lastName: "Lynin",
    age: 18,
    gender: gender.female,
    dob: "19 April 2008",
}
]

people.map((p) => console.table([p]));






// literal 
// type gender1 = "Male" | "Female" ;






// Intersection type: use it to combine 2 type or multi type (&)
type Employee ={
    empId: string | number,
    salary: number
}

type employeePerson = Person & Employee;

let worker: employeePerson = {
    firstName: 'Mon',
    lastName: 'Srey Roth',
    age: 19,
    gender: gender.female,
    dob: 'ot dg',
    empId: 'emp-001',
    salary: 1000,
}

console.table([worker]);






 

