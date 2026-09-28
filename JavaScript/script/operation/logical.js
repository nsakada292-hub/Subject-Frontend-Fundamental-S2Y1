let age= 6;

let output="";

if(age>=0 && age < 14){
    output="Children"
}else if(age >= 14 && age < 24){
    output="Youth"
}else if(age >= 25 && age <= 64){
    output="Adult"
}else{
    output="Please enter age from 0-64"
}

console.log(output);
