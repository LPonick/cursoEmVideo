function starcounting()
{
    var txtStart = document.getElementById('txtStart')
    var txtEnd = document.getElementById('txtEnd')
    var txtStep = document.getElementById('txtStep')
    var txtState = document.getElementById('txtState')
    var numAtualy = Number(txtStart.value)

    //Testes 
    /*
        Notes:
        S == Ponto inicial
        E == ponto final
        P == Steap
    */
    let E = Number(txtEnd.value)  
    let S = Number(txtStart.value)
    let P = Number(txtStep.value)
    let Res = 0;
    
    var i=0,i2=0 

    i = E
    i2 = S
    E = E**2
    E = Math.sqrt(E)
    S = S**2
    S = Math.sqrt(S)
    Res = E - S
    E = i
    S = i2

    if(P == 0)
    {
        alert("[WARNING]Your steap is like{0}")
    }else if(Res == 0 && P == 0)
    {
        alert('[WARNING]The values of start and end be equals!')
    }else if(E > S && P < 0)//2 1 
    {
        alert(`[WARNING]Your step cannot be negative in this range End:${E} Start:${S}`)
    }else if(E < S && P > 0)
    {
        alert(`[WARNING]Your step cannot be positive in this range End:${E} Start:${S}`)
    }
    else
    {
        txtState.innerHTML=` ${numAtualy}\u{1F449} `//mostra valor numeroatual sem alteração

        if(txtStep.value * -1 <= 0)
        {
            do
            {//do
                numAtualy += Number(txtStep.value)
                if(numAtualy <= Number(txtEnd.value))
                {
                    txtState.innerHTML += ` ${numAtualy}\u{1F449} `
                }
            }while(numAtualy < Number(txtEnd.value))
            txtState.innerHTML += ` \u{270C} `
        }//if
        else//id"else04"
        {
            do
            {
                numAtualy += Number(txtStep.value)
                if(numAtualy >= Number(txtEnd.value))
                {
                    txtState.innerHTML += ` ${numAtualy}\u{1F449} `
                }
            }while(numAtualy > Number(txtEnd.value))
            txtState.innerHTML += ` \u{270C} `
        }//id"else04"
    }//else
}//function