const alumnos =[
    {
        nombre: 'Sebastian', edad: 19
    },
    {
        nombre: 'Ian', edad: 3
    },
    {
        nombre: 'Juan', edad: 10
    },
    {
        nombre: 'Pablo', edad: 2
    },
    {
        nombre: 'Axel', edad: 9
    },
]
const chicos= alumnos.filter(
    alumnos => alumnos.edad<=4
)
console.log(chicos)

for(let i=0; i<chicos.length; i++){
    document.write(`<p>Niño: ${chicos[i].nombre}, cuya edad es ${chicos[i].edad}. </p>`)
}