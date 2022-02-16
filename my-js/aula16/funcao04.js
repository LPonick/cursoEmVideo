function fatorial(n)
{
    let index = n
    let c = 1
    while (index > 0) 
    {
        c *= index
        index--    
    }
    return c
}
console.log(fatorial(5))