const num1 = parseInt(prompt('ingrese primer numero'));
const num2 = parseInt(prompt('ingrese 2do numero'));
const num3 = parseInt(prompt('ingrese 3er numero'));
 if(num1>num2 && num1>num3){
    document.write(`el mayor es ${num1}`)
 } else if(num2>num3){
    document.write(`el mayor es ${num2}`);
 } else{
    document.write(`el mayor es ${num3}`)
 }