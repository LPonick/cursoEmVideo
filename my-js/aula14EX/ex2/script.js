function StartCalcTable()
{
    //Variaveis
    let numbertxt = document.getElementById("txtNumber")
    let table = document.getElementById("table")
    //Os testes
    if(Number(numbertxt.value) == 0 || numbertxt.value.length == 0)
    {
        alert(`[ERROR] Your number can't be zero!`)
    }else
    {
        if(Number(numbertxt.value)<0)
        {
            alert(`[ERROR] Your number can't be negative, it will be recalculated to positive`)
            numbertxt.value = Number(numbertxt.value) * -1
        }
        table.innerHTML=''
        for(index = 0;index <= 10;index++)
        {
            let valor = document.createElement('option')
            valor.text = `${numbertxt.value} * ${index} = ${Number(numbertxt.value) * index}`
            table.value = `tab${index}`
            table.appendChild(valor)
        }
    }
}