class Mago {
    //constructor
    constructor( edad, nombre,sexo,casa, damage, defensa){
        this.edad = edad,
        this.nombre = nombre,
        this.sexo = sexo,
        this.casa= casa,
        this.damage = damage,
        this.defensa = defensa,
        this.vida = 100
    }
    //metodos
    atacar(oponente){
        let vida = oponente.vida
        oponente.vida -= this.damage / oponente.defensa * Math.floor(Math.random() * 10)
        console.log(vida - oponente.vida)
    }
    defenderse(){
    }
}

//Instanciaciones
let mago1 = new Mago(12, "Harry", "hombre", "gryffindor", 80, 70)
let mago2 = new Mago( 12, "Hermione", "mujer", "gryffindor", 70, 10)
let mago3 = new Mago( 26, "Malfoy", "hombre", "Slytherin",50, 90)
let mago4 = new Mago( 32, "Severus", "hombre","Slytherin", 80, 80)

//Diccionario js

let magos = {
    "m1" : mago1,
    "m2" : mago2,
    "m3" : mago3,
    "m4" : mago4
}
