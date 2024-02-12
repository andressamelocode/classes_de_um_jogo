class superHero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    escrever(){
        console.log(`O heroi ${this.nome} tem ${this.idade} anos e é um ${this.tipo}.`)
    }
}

let heroiUm = new superHero("Ainz", 600, "mago")
let heroiDois = new superHero("Eren Yeager", 25, "guerreiro")
let heroiTres = new superHero("Miroku", 30, "monge")
let heroiQuatro = new superHero("Naruto", 14, "ninja")

heroiUm.escrever()
heroiDois.escrever()
heroiTres.escrever()
heroiQuatro.escrever()

let choose = {
      heroi: {
        0: ["Ainz", "magia"],
        1: ["Eren Yeager", "espada"],
        2: ["Miroku", "artes maciais"],
        3: ["Naruto", "shuriken"]
      }
}


for(let index in choose.heroi){
    let [heroiNome, heroiAtaque] = choose.heroi[index]
    console.log(`O ${heroiNome} atacou usando ${heroiAtaque}`)
}

