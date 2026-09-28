// Arrow func
// syntax: 
// let variable_name = (arg1, arg2, .....) => { 
// staement 
// }


let oddOrEvenNumber = (num) => {
    let result = num % 2 == 0 ? `Even Number` : `Odd Number`;
    return result;
};

console.log(oddOrEvenNumber(27));



let isEmailVerified = false;
let verified = isEmailVerified ? 
(name)=>`${name}, Your email have been verify` : 
(name) => `${name}, Please verify your email`

console.log(verified("SKD"));
