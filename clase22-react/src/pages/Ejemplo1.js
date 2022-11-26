import { Ejemplo1Props, Ejemplo2Props, Ejemplo3Props, Ejemplo4Props, Ejemplo5Props } from "../componentes/props/Props";

const nombre2='Pablo'
const lista =['manzana', 'pera', 'banana', 'kiwi'];
const mostrarValor = valor=>{
    console.log(valor)
}

const Ejemplo1 = props=>{
    return(
        <div>
            <h1>Ejemplos de propiedades</h1>

            <Ejemplo1Props nombre ='seba'/>
            <Ejemplo1Props nombre={nombre2}/>
            <hr/>
            <Ejemplo2Props elementos={lista}/>
            <hr/>
            <Ejemplo3Props titulo="La noticia" subtitulo="soy subtitulo" cuerpo="soy el cuerpo de la noticia"/>
            <hr/>
            <Ejemplo4Props cambiarValor={mostrarValor}/>
        </div>
    )
}
export default Ejemplo1

