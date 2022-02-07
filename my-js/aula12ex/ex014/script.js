function load()
{
    var text = document.getElementById('txt')
    var images = document.getElementById('imgs')
    var body = document.getElementsByTagName('body')[0]

    //timer vars
    var nowhrs = new Date();
    var nowminuts = Number(nowhrs.getMinutes())
    nowhrs = Number(nowhrs.getHours())
    /*
    var chose =window.confirm('Would you like to set the time manually?(Você gostaria de colocar as horas manualmente?)')
    if(chose)
    {
        var txt = window.prompt("Escreva a HORA desejada EX:1,12,20;")
        var hrs = Number(txt)
        txt = typeof hrs
        window.alert(txt)
        if(txt === Number)
        {
            alert('sa')
        }
    }
    */
    if(nowhrs > 0 && nowhrs < 12)
    {
        text.innerHTML = `Good Morning, is's now ${nowhrs}:${nowminuts}`
        images.src='imgs/amanhecendo.png'
        body.style.background= "#879bb4"
    }
    else if(nowhrs < 19)
    {
        text.innerHTML =`Good afternoon, it's now ${nowhrs}:${nowminuts}`
        images.src = 'imgs/tarde.png'
        body.style.background ="#c3cdd4"
    }
    else{
        text.innerHTML = `Good Night, it's now ${nowhrs}:${nowminuts}`
        images.src = 'imgs/noite.png'
        body.style.backgroundColor="#11222a"
    }
}
