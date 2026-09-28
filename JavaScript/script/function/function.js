function swapNumber(a, b){
    console.log(`Before swap A: ${a}, B: ${b}`);

    let temp="";
        temp = a;
        a = b;
        b = temp;

    console.log(`After swap A: ${a}, B: ${b}`);
    
}
console.log(swapNumber(1, 2));
