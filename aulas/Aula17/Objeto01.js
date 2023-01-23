let amigo = {Nome: 'Gabriel', Idade: 18, Peso: 75, engordar(p = 0){
    this.Peso += p
}}
amigo.engordar(5)
console.log(`${amigo.Nome} pesa ${amigo.Peso} kg.`)