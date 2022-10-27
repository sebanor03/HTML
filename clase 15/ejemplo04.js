function todosLosParrafos(){
    const allparrafos = document.querySelectorAll("p");
    console.log(allparrafos)

    const num = allparrafos.length;
    
    alert(`hay ${num} elementos <p> dentro de este documento`)
}

function parrafoscaja1(){
const caja1 = document.getElementById('caja1');
const caja1parrafos = caja1.getElementsByTagName('p');

const num= caja1parrafos.length
alert(`hay ${num} elementos <p> dentro de este documento`)
}

function parrafoscaja2(){
    const caja2parrafo = document.querySelectorAll('#caja2 p');
    const num = caja2parrafo.length;

    alert(`hay ${num} elementos <p> dentro de este documento`);
}
