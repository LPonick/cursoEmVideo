var agora = new Date()
var diaSemana = agora.getDay()

switch(diaSemana)
{
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Sexta")
        break
    case 5:
        console.log("sabado")
        break
    default:
        console.log("[ERROR] dia semana  nao instaciado corretamente")
}