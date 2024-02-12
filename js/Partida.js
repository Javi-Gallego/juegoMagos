/*Instanciar magos*/
let mago1 = new Mago( 15, "Harry", "hombre", "Gryffindor", 80, 70, "ofensivo")
let mago2 = new Mago( 15, "Hermione", "mujer", "Gryffindor", 70, 20, "defensivo")
let mago3 = new Mago( 15, "Malfoy", "hombre", "Slytherin", 50, 70, "ofensivo")
let mago4 = new Mago( 36, "Severus", "hombre", "Slytherin", 80, 80, "defensivo")
let mago5 = new Mago( 68, "Dumbledore", "hombre", "Gryffindor", 100, 100, "defensivo")
let mago6 = new Mago( 50, "Voldemort", "hombre", "Slytherin", 100, 100, "ofensivo")

/*Listado sonidos*/
let sounds = []

sounds[0] = ""
sounds[1] = "./media/expelliarmus.mp3"
sounds[2] = "./media/avadakadavra.mp3"

/*Listado imagenes*/

let images = []

images[0] = "./img/occultSel.png"
images[1] = "./img/mago1.png"
images[2] = "./img/mago2.png"
images[3] = "./img/mago3.png"
images[4] = "./img/mago4.png"
images[5] = "./img/mago5.png"
images[6] = "./img/mago6.png"
images[7] = "./img/mago7.png"
images[8] = "./img/mago8.png"
images[0] = ""

//Diccionario js

let magos = {
    "player1" : "",
    "player2" : "",
    "winner" : "",
    "m1" : mago1,
    "m2" : mago2,
    "m3" : mago3,
    "m4" : mago4,
    "m5" : mago5,
    "m6" : mago6
}