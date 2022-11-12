const metros = 500;
let transportes = '';
if(metros >0 && metros<=1000){
    transportes = 'pie'
} else if(metros > 1000 && metros <=10000){
    transportes = 'bicicleta'
} else if(metros >10000 && metros <= 30000){
    transportes = 'colectivo'
} else if(metros > 30000 && metros <= 100000){
    transportes = 'auto'
} else{
    transportes = 'avion';
}

console.log(`para ${metros} metros recomendamos ir en ${transportes}`)