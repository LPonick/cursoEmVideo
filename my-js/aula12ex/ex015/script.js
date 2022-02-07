function Verify()
{
    
    var searsh = document.getElementById('textSearch')
    //resive date now
    var nowDate = new Date();
    var nowDate = nowDate.getFullYear()
    //calc about age
    var year = document.getElementById('yeartxt')
    if(year.value== 0 || Number(year.value) > nowDate || year < 0)
    {
        alert("[ERROR]Please re-write all information![ERROR]")
    }
    else
    {//else01
        //gender select
        var age = nowDate - Number(year.value)
        var gender = '';
        //adding the gender
        var radgender = document.getElementsByName("radgender")
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')
        if(radgender[0].checked)
        {
            gender = 'Male'
            if(age > 0 && age < 16)
            {
                img.setAttribute('src','imgs/CriançaHomem.png')
            }
            else if(age < 40)
            {
                img.setAttribute('src','imgs/JovemHomem.png')
            }
            else
            {
                img.setAttribute('src','imgs/Idoso.png')
            }

        }
        else
        {
            gender = 'Female'
            if(age > 0 && age < 16)
            {
                img.setAttribute('src','imgs/CriançaMulher.png')
            }
            else if(age < 50)
            {
                img.setAttribute('src','imgs/JovemMulher.png')
            }
            else
            {
                img.setAttribute('src','imgs/Idosa.png')
            }
        }
        searsh.style.textAlign = 'center'
        searsh.innerHTML = `We detect a ${gender} whit ${age} ages`
        img.style.textAlign='center'
        img.style.width = '70vw'
        searsh.appendChild(img)
    }//else01
}//funtion