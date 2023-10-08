class Heroi{

    constructor(nome, idade, tipo){
    this.nome = nome,
    this.idade = idade,
    this.tipo = tipo

    }

    atacar(){
    
        console.log(`O ${this.tipo} atacou usando ${this.ataque()}. `)
    }

    ataque() {

        switch(this.tipo) {
            case "Mago": 
            return "Magia"
            break;

            case "Guerreiro": 
            return "Espada"
            break;

            case "Monge": 
            return "Artes Marciais"
            break;

            case "Ninja": 
            return "Shuriken"
            break;

        }


    }

   
}

let heroi = new Heroi("Julia", 18, "Guerreiro")

heroi.atacar()
