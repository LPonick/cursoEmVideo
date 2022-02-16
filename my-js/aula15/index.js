let nubers = [3,2,5,6,8,1093,2,5,6,8,1093,2,5,6,8,109]

/*for(let index = 0;index < nubers.length; index++)
{
    console.log(`o valor de nubers na posição ${index + 1} é de ${nubers[index]}`)
}*/
for(let index in nubers)
{
    console.log(nubers[index])
}
console.log(nubers.length)