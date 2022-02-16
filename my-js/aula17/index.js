//objetos
const amigo = {
    nome:"Car",
    peso:80,
    engordar(p = 0){
        this.peso+=p
    }
}
amigo.engordar(10)
console.log(amigo.peso);