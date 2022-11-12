const numeros =[100,32,5,45,7];
var mayor=0;
for(var i=0; i<numeros.length; i++){
    if(numeros[i] > mayor){
        mayor = numeros[i]
    }
}
console.log(`el numero de ${numeros} es ${mayor}`)