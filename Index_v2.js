class heroi {
    constructor (nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo   
    }
    atacar () {
let ataque = ""
        switch (this.tipo) {
            case "mago":
                ataque = "magia"
                break
            case "guerreiro":
                ataque = "espada"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shuriken"
                break
        }
// Saída com todos os dados referentes aos heróis (nome, tipo, idade e ataque)
        console.log(`O herói ${this.nome} é um ${this.tipo} que possui ${this.idade} anos de idade e atacou usando ${ataque}.`)
    }
}

let heroi1 = new heroi ("Valente Sombrio", 22, "guerreiro")
let heroi2 = new heroi ("Merlin", 89, "mago")
let heroi3 = new heroi ("Jin Caminhate da Paz", 100, "monge")
let heroi4 = new heroi ("Mori Uchiha", 34, "ninja")

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()
