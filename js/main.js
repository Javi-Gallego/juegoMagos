let player1;
let player2;
let partidasTotales= 0

const playerSelection = () => {
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
}

const fightButtons = () => {

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
}

const restartGame = () => {
    
    const restart = document.getElementById("restart")

    restart.addEventListener("click", () =>{
    
    /*Llamada al método de la clase para reestablecer la vida y los especiales de cada personaje*/
    magos[magos["player1"]].reestablecer()
    magos[magos["player2"]].reestablecer()
    
    /*Cambio de pantallas entre la 3 y la 1 */
    const screen3 = document.getElementById("pantalla3")
    screen3.classList.remove("visible")
    screen3.classList.add("oculto")

    const screen1 = document.getElementById("pantalla1")
    screen1.classList.remove("oculto")
    screen1.classList.add("visible")

    /*En la pantalla inicial quita los estados alterados de cada mago para reiniciar partida*/
    const borraestilo1 = document.getElementById(`p${magos["player1"].slice(-1)}`)
    borraestilo1.classList.remove("styleplayer1")
    borraestilo1.style.pointerEvents = "initial";

    const borragris1 = document.getElementById(`m${magos["player1"].slice(-1)}`)
    borragris1.classList.remove("elegido")

    const borraestilo2 = document.getElementById(`p${magos["player2"].slice(-1)}`)
    borraestilo2.classList.remove("styleplayer2")
    borraestilo2.style.pointerEvents = "initial";

    const borragris2 = document.getElementById(`m${magos["player2"].slice(-1)}`)
    borragris2.classList.remove("elegido")

    /*Eliminar texto de player 1 y player 2 en la pantalla principal*/
    const selplayer1 = document.getElementById(`sel1${magos["player1"].slice(-1)}`)
    selplayer1.classList.remove("oculto")
    selplayer1.classList.add("visible")
    
    const selplayer11 = document.getElementById(`sel2${magos["player1"].slice(-1)}`)
    selplayer11.classList.remove("visible")
    selplayer11.classList.add("oculto")

    const selplayer2 = document.getElementById(`sel1${magos["player2"].slice(-1)}`)
    selplayer2.classList.remove("oculto")
    selplayer2.classList.add("visible")

    const selplayer22 = document.getElementById(`sel3${magos["player2"].slice(-1)}`)
    selplayer22.classList.remove("visible")
    selplayer22.classList.add("oculto")

    /*Reiniciar pantalla2 para que no haya ninguna imagen en pantalla*/
    const borrabatalla1 = document.getElementById(`left${magos["player1"].slice(-1)}`)
    borrabatalla1.classList.remove("visible")
    borrabatalla1.classList.add("oculto")

    const borrabatalla2 = document.getElementById(`right${magos["player2"].slice(-1)}`)
    borrabatalla2.classList.remove("visible")
    borrabatalla2.classList.add("oculto")

    /*Reiniciar barra de vida de cada jugador*/
    const player1life = document.getElementById("life1")
    player1life.innerHTML = '<div id="restlife1" class="w100"></div>'
    const player2life = document.getElementById("life2")
    player2life.innerHTML = '<div id="restlife2" class="w100"></div>'

    /*Borrar imagen ganador anterior*/
    const winner = document.getElementById(`winner${magos["winner"]}`)
    winner.classList.remove("visible")
    winner.classList.add("oculto")

    /*Se quita el valor de player1 y player2 para volver a seleccionar otra vez*/
    player1 = null
    player2 = null

    partidasTotales++

    if(partidasTotales >= 1) {
        const desbloqueo1 = document.getElementById("p5")
        desbloqueo1.classList.remove("bloqued")
        desbloqueo1.classList.add("magician")
        const dumbledore = document.getElementById("m5")
        dumbledore.src = images[5]
    }

    if(partidasTotales >= 2) {
        const desbloqueo2 = document.getElementById("p6")
        desbloqueo2.classList.remove("bloqued")
        desbloqueo2.classList.add("magician")
        const Voldemort = document.getElementById("m6")
        Voldemort.src = images[6]
    }

    playerSelection()

    })
}


playerSelection()
fightButtons()
restartGame()