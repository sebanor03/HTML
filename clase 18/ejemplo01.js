const datosUsuarios=[
{
    nombre:'flavia', password:'abc234'
},
{
    nombre:'cris', password:'123ser'

},
{
    nombre:'Seba', password:'tees33'
}
]
const soloPassword = datosUsuarios.map(function(p){
    return p.password
})
console.log(soloPassword)