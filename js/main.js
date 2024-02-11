let player1;
let player2;
let partidasTotales= 0

const avatares = document.getElementsByClassName("magician")

const arrayAvatares = Array.from(avatares)

arrayAvatares.map(
    elemento => {
        elemento.addEventListener("click", (e) => {
            if(!player1){
                player1 = magos[e.target.id]
                magos["player1"] = e.target.id
                e.target.classList.add("elegido");
                e.currentTarget.style.pointerEvents = "none";
                const numplayer1 = e.target.id.slice(-1)

                const atacante1 = document.getElementById(`left${numplayer1}`)
                atacante1.classList.remove("oculto")
                atacante1.classList.add("visible")

                const shadowplayer2 = document.getElementById(`p${numplayer1}`)
                shadowplayer2.classList.add("styleplayer1")

                const selplayer1 = document.getElementById(`sel1${numplayer1}`)
                selplayer1.classList.remove("visible")
                selplayer1.classList.add("oculto")

                const selplayer11 = document.getElementById(`sel2${numplayer1}`)
                selplayer11.classList.remove("oculto")
                selplayer11.classList.add("visible")

                const tit1 = document.getElementById("selectplayer1")
                tit1.classList.remove("visible")
                tit1.classList.add("oculto")

                const tit2 = document.getElementById("selectplayer2")
                tit2.classList.remove("oculto")
                tit2.classList.add("visible")

            } else {
                if (player1 !== magos[e.target.id] && !player2) {
                    player2 = magos[e.target.id]
                    magos["player2"] = e.target.id
                    e.target.classList.add("elegido");
                    e.currentTarget.style.pointerEvents = "none";
                    const numplayer2 = e.target.id.slice(-1)

                    const atacante2 = document.getElementById(`right${numplayer2}`)
                    atacante2.classList.remove("oculto")
                    atacante2.classList.add("visible")

                    const shadowplayer2 = document.getElementById(`p${numplayer2}`)
                    shadowplayer2.classList.add("styleplayer2")

                    const selplayer2 = document.getElementById(`sel1${numplayer2}`)
                    selplayer2.classList.remove("visible")
                    selplayer2.classList.add("oculto")
    
                    const selplayer22 = document.getElementById(`sel3${numplayer2}`)
                    selplayer22.classList.remove("oculto")
                    selplayer22.classList.add("visible")

                    const tit2 = document.getElementById("selectplayer2")
                    tit2.classList.remove("visible")
                    tit2.classList.add("oculto")
                    
                    const tit3 = document.getElementById("selectplayer3")
                    tit3.classList.remove("oculto")
                    tit3.classList.add("visible")

                    const fight1 = document.getElementById("fight1")
                    fight1.classList.remove("visible")
                    fight1.classList.add("oculto")
                    const fight2 = document.getElementById("fight2")
                    fight2.classList.remove("oculto")
                    fight2.classList.add("visible")

                    fight2.addEventListener("click", (e) => {
                        const screen1 = document.getElementById("pantalla1")
                        screen1.classList.remove("visible")
                        screen1.classList.add("oculto")
                        const screen2 = document.getElementById("pantalla2")
                        screen2.classList.remove("oculto")
                        screen2.classList.add("visible")
                    })                   
                }             
            }
        })
    }
)

const buttons = document.getElementsByClassName("button")

const arrayButtons = Array.from(buttons)

arrayButtons.map(
    elemento => {
        elemento.addEventListener("click", (e) => {
            if (e.target.id === "att1") {
                magos[magos["player1"]].atacar(magos[magos["player2"]], 1, 2)
            }
            if (e.target.id === "sp1") {
                magos[magos["player1"]].especial(magos[magos["player2"]], 1, 2)
            }
            if (e.target.id === "att2") {
                magos[magos["player2"]].atacar(magos[magos["player1"]], 2, 1)
            }
            if (e.target.id === "sp2") {
                magos[magos["player2"]].especial(magos[magos["player1"]], 2, 1)
            }
            
        })
    }
)

const restart = document.getElementById("restart")

restart.addEventListener("click", () =>{
    magos[magos["player1"]].reestablecer()
    magos[magos["player2"]].reestablecer()
    const screen3 = document.getElementById("pantalla3")
    screen3.classList.remove("visible")
    screen3.classList.add("oculto")
    const screen1 = document.getElementById("pantalla1")
    screen1.classList.remove("oculto")
    screen1.classList.add("visible")

    partidasTotales++

})

/*Listado sonidos*/
let sounds = []

sounds[0] = ""
sounds[1] = "./media/expelliarmus.mp3"
sounds[2] = "./media/avadakadavra.mp3"