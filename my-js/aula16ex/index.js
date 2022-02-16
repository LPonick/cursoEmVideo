var numbers = []

function Cadastrar()
{
    RemoverDivFinal()
    let txtnum = document.getElementById('txtnumber')
    let sel = document.getElementById('seletor')
    //Testes
    let n1 = numbers.indexOf(Number(txtnum.value))
    if(txtnum.value <= 0 || txtnum.value > 100)
    {
        alert(`digite um valor entre 1 e 100`)
        return
    }else if(n1 != -1)
    {
        alert('Seu valor ja foi cadastrado!')
        return
    }
    
    //Adição
    numbers.push(Number(txtnum.value))
    
    let valor = document.createElement('option')
    valor.text = `O valor de ${txtnum.value} foi cadastrado`
    sel.value = `V${numbers.length}`
    sel.appendChild(valor)
    txtnum.value=""
    txtnum.focus()
}
function Finalizar()
{
    if(numbers.length == 0)
    {
        alert('Por favor cadastre um numero primeiro!')
        return
    }
    RemoverDivFinal(1)
    //contrução de uma div nova
    var divNova = document.createElement('div')
    divNova.setAttribute("id","divFinalizacao")
    //adição da div ao HTML
    let main = document.getElementsByTagName('main')[0]
    main.appendChild(divNova)
    //conteudo da div
    let h3 = [0,1,2,3,4]
    let conteudo =[0,1,2,3,4]
    for(let index in h3)
    {
        h3[index] = document.createElement("h3")
        //h3[index].setAttribute("id",`h3_${index.value}`)
    }
    //quantidade de numeros cadastrados
    conteudo[0] = `Ao todo temos, ${numbers.length} numeros registrados
    `
    //calculos
    let Nauto = 0
    let Pauto = 0
    let Nbaixo = 100
    let Pbaixo = 0
    let todaSoma = 0 
    let mediaGeral = 0

    for(let index in numbers)
    {
        if(numbers[index] > Nauto) 
        {
            Nauto = numbers[index]
            Pauto = index
        }
        if(numbers[index] < Nbaixo)
        {
            Nbaixo = numbers[index]
            Pbaixo = index  
        }
        todaSoma += Number(numbers[index])
    }
    mediaGeral = todaSoma / numbers.length
    //adicionando e criando os conteudo dos "h3"
    conteudo[1]=`O maior número cadastrado é o ${Nauto} na posição ${Pauto}`
    conteudo[2]=`O menor número cadastrado é o ${Nbaixo} na posição ${Pbaixo}`
    conteudo[3]=`A soma de todos os valores cadastrado é um total de ${todaSoma}`
    conteudo[4]=`A media de todos os valores é de ${mediaGeral}`
    for(let index in h3)
    {
        h3[index].innerHTML= conteudo[index]
    }
    //colocando os h3 na divFinalizacao
    var divFinalizacaoP = document.getElementById('divFinalizacao')
    for(let index in h3)
    {
        divFinalizacaoP.appendChild(h3[index])    
    }
}
function RemoverDivFinal(f = -1)
{
    // vera se a div com a tag divFinalizacao existe
    let existe = document.getElementById("divFinalizacao")
    if(existe == null)
    {
        return
    }
    else
    {
        if(f = -1)
        {
            existe.remove()
        }
        return
    }
}