class heroi {

    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        
        switch (this.tipo) {
            case 'guerreiro':
                this.ataque = "espada"
                break
            case 'mago':
                this.ataque = "magia"
                break
            case 'monge':
                this.ataque = "artes marciais"
                break
            case 'ninja':
                this.ataque = "shuriken"
                break
            default :
                console.log("Heroi de classe desconhecida")
                this.ataque = "golpe misterioso"
                break
            }
        console.log (`O ${this.tipo} atacou usando ${this.ataque}`)

    }
}

heroi = new heroi("Renan", 34, "ninja")

heroi.atacar()


    
