
let player1;

let player2;

const avatares = document.getElementsByClassName("magician")

const arrayAvatares = Array.from(avatares)

arrayAvatares.map(
    elemento => {
        elemento.addEventListener("click", (e) => {
            if(!player1){
                player1 = magos[e.target.id]
                e.target.classList.add("elegido");
                e.currentTarget.style.pointerEvents = "none";
                const numplayer1 = e.target.id.slice(-1)

                const atacante1 = document.getElementById(`left${numplayer1}`)
                atacante1.classList.remove("oculto")
                atacante1.classList.add("visible")

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
                    e.target.classList.add("elegido");
                    e.currentTarget.style.pointerEvents = "none";
                    const numplayer2 = e.target.id.slice(-1)

                    const atacante2 = document.getElementById(`right${numplayer2}`)
                    atacante2.classList.remove("oculto")
                    atacante2.classList.add("visible")

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
                mago1.atacar(mago3, 1, 2)
            }
            if (e.target.id === "sp1") {
                mago1.atacar(mago3, 1, 2)
            }
            if (e.target.id === "att2") {
                mago3.atacar(mago1, 2, 1)
            }
            if (e.target.id === "sp2") {
                mago3.atacar(mago1, 2, 1)
            }
            
        })
    }
)