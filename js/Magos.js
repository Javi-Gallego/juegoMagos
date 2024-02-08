class Mago {
    //constructor origin no, pelea
    constructor( edad, nombre,sexo,casa, damage, defense, type){
        this.edad = edad,
        this.nombre = nombre,
        this.sexo = sexo,
        this.casa= casa,
        this.damage = damage,
        this.defense = defense,
        this.type = type,
        this.vida = 100
    }
    //metodos
    atacar(oponente, ownplayer, enemyplayer){
        let vida = oponente.vida
        let barravida1 = Math.floor(oponente.vida/10)*10
        oponente.vida -= this.damage / oponente.defense * Math.floor(Math.random() * 10)
        console.log(vida - oponente.vida)

        let barravida2 = Math.floor(oponente.vida/10)*10
        const restlife = document.getElementById(`restlife${enemyplayer}`)
        restlife.classList.remove(`w${barravida1}`)
        restlife.classList.add(`w${barravida2}`)

        if(oponente.vida <= 0) {
            const muerto = document.getElementById(`play${enemyplayer}`)
            muerto.classList.add("muerto")
        }
    }
    especial(oponente, ownplayer, enemyplayer){
        if (type === "defensivo") {
            let barravida1 = Math.floor(this.vida/10)*10
            this.vida = 100
            let barravida2 = Math.floor(this.vida/10)*10

            const restlife = document.getElementById(`restlife${ownplayer}`)
            restlife.classList.remove(`w${barravida1}`)
            restlife.classList.add(`w${barravida2}`)

        }
        if (type === "ofensivo") {
            let vida = oponente.vida
            let barravida1 = Math.floor(oponente.vida/10)*10
            oponente.vida -= this.damage / (oponente.defense/4) * Math.floor(Math.random() * 10)

            let barravida2 = Math.floor(oponente.vida/10)*10
            const restlife = document.getElementById(`restlife${enemyplayer}`)
            restlife.classList.remove(`w${barravida1}`)
            restlife.classList.add(`w${barravida2}`)
        }
    }
}

//Instanciaciones
let mago1 = new Mago(12, "Harry", "hombre", "Gryffindor", 80, 70, "ofensivo")
let mago2 = new Mago( 12, "Hermione", "mujer", "Gryffindor", 70, 10, "defensivo")
let mago3 = new Mago( 26, "Malfoy", "hombre", "Slytherin", 50, 70, "defensivo")
let mago4 = new Mago( 32, "Severus", "hombre", "Slytherin", 80, 80, "ofensivo")

//Diccionario js

let magos = {
    "m1" : mago1,
    "m2" : mago2,
    "m3" : mago3,
    "m4" : mago4
}
