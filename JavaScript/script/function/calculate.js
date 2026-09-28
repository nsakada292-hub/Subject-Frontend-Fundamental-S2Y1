function calculatingNumber(option, n1, n2){
    switch(option){
        case "+": return n1 + n2 ;
        break;
        case "-": return n1 - n2 ;
        break;
        case "*": return n1 * n2 ;
        break;
        case "/": return n1 / n2 ;
        break;
        default: console.log("Invalid option!");
        
    }
}

const form=document.querySelector('form').addEventListener("click", (e)=>{
    e.preventDefault();
    let result=0;
    let number1=document.getElementById('num1').value;
    let number2=document.getElementById('num2').value;
    let opt=document.getElementById('opt').value;

    result = calculatingNumber(opt, Number(number1), Number(number2));
    document.getElementById('result').innerHTML= result.toString();
}
)



