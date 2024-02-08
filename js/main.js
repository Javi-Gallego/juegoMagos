
let player1;

let player2;

const avatares = document.getElementsByClassName("magician")

const arrayAvatares = Array.from(avatares)

arrayAvatares.map(
    elemento => {
        elemento.addEventListener("click", (e) => {
            if(!player1){
                player1 = magos[e.target.id]
            } else {
                player2 = magos[e.target.id]

                //En este punto ya tenemos a los dos players....
                console.log(player1, player2)
            }
        })
    }
)