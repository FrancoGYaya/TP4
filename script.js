console.log("MESES Y DIAS")

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "spooky month", "Noviembre", "Diciembre"];

let dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


console.log("Los meses con 30 dias son: ")
for (let index = 0; index < dias.length; index++)
{
    if (dias[index]==30)
    {
        console.log(meses[index])
    }
}
console.log("-- SOY UNA BARRA SEPARADORA --")
console.log("Los meses que tienen 31 dias son: ")
for (let index = 0; index < dias.length; index++)
{
    if (dias[index]==31)
    {
        console.log(meses[index])
    }
}