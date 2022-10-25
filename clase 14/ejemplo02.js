mes = parseInt(prompt('ingrese mes en numero', ''));
if(mes==1 || mes==2 || mes==3 || mes==4){
    document.write('pertenece al primer cuatrimestre')
} else if(mes==5 || mes==6 || mes==7 || mes==8){
    document.write('pertenece al 2do cuatrimestre')
} else{
    document.write('pertenece al 3er cuatrimestre')
}