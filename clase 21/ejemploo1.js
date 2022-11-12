const edad = parseInt(prompt('ingrese su edad ', ''));

if(Number.isNaN(edad)){
    document.write('debes ingresar un numero');
} else if(edad >=18){
document.write('puedes conducir');
}else{
    document.write('no podes conducir');
}