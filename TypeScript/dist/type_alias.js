"use strict";
// syntax type alias: 
// type typeName = TypeName 
Object.defineProperty(exports, "__esModule", { value: true });
// export use with interfce
var gender;
(function (gender) {
    gender["male"] = "Male";
    gender["female"] = "Female";
})(gender || (gender = {}));
// normal
let person = {
    firstName: "Elon",
    lastName: "Mask",
    age: 40,
    gender: gender.male,
    dob: "ot dg"
};
console.table([person]);
// array
let people = [{
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
];
people.map((p) => console.table([p]));
let worker = {
    firstName: 'Mon',
    lastName: 'Srey Roth',
    age: 19,
    gender: gender.female,
    dob: 'ot dg',
    empId: 'emp-001',
    salary: 1000,
};
console.table([worker]);
