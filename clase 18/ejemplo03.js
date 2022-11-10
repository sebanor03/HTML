const empleados=[
    {
        nombre:'seba', trabajo:'desarrollador'
    },
    {
        nombre:'juancito', trabajo:'arquitecto'
    },
    {
        nombre:'flavia', trabajo:'jardinero'
    },
    {
        nombre:'Juan', trabajo:'desarrollador'
    }
]
const desarrollador= empleados.filter(
    empleado => empleado.trabajo == 'desarrollador'
)
console.log(desarrollador)