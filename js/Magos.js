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
        this.vida = 100,
        this.nesp = 3
    }
    //metodos
    atacar(oponente, ownplayer, enemyplayer){
        let vida = oponente.vida
        let barravida1 = Math.floor(oponente.vida/10)*10
        oponente.vida -= this.damage / oponente.defense * Math.floor(Math.random() * 10)
        console.log(vida - oponente.vida)

        let barravida2 = Math.floor(oponente.vida/10)*10
        if (barravida2 < 0) {
            barravida2 = 0
        }
        const restlife = document.getElementById(`restlife${enemyplayer}`)
        restlife.classList.remove(`w${barravida1}`)
        restlife.classList.add(`w${barravida2}`)

        const mensaje2 = document.getElementById("message")
        mensaje2.innerHTML = `<div>Expelliarmus!!</div>`          
        const sonido = document.getElementById("sound")
        sonido.src = sounds[1]
        
        setTimeout( () => {
            const mensaje2 = document.getElementById("message")
            mensaje2.innerHTML = `<div></div>`
        }, 5000)

        if(oponente.vida <= 0) {
            const muerto = document.getElementById(`play${enemyplayer}`)
            muerto.classList.add("muerto")
            const mensaje = document.getElementById("message")
            mensaje.innerHTML = `<div>Player ${ownplayer} wins!!</div>`

            setTimeout( () => {
                let winnerId = `player${ownplayer}`
                let winPlayer = `${magos[winnerId]}`
                let winName = magos[`${winPlayer}`]
                const winner = document.getElementById(`winner${winPlayer.slice(-1)}`)               
                winner.classList.remove("oculto")
                winner.classList.add("visible")
                const screen2 = document.getElementById("pantalla2")
                screen2.classList.remove("visible")
                screen2.classList.add("oculto")
                const screen3 = document.getElementById("pantalla3")
                screen3.classList.remove("oculto")
                screen3.classList.add("visible")
                muerto.classList.remove("muerto")
            }, 4000)
        }
    }
    especial(oponente, ownplayer, enemyplayer){
        if (this.type === "defensivo" && this.nesp > 0) {
            let barravida1 = Math.floor(this.vida/10)*10
            this.vida = 100
            let barravida2 = Math.floor(this.vida/10)*10

            const restlife = document.getElementById(`restlife${ownplayer}`)
            restlife.classList.remove(`w${barravida1}`)
            restlife.classList.add(`w${barravida2}`)

            const mensaje = document.getElementById("message")
            mensaje.innerHTML = `<div>Max Healing!!</div>`

            setTimeout( () => {
                const mensaje2 = document.getElementById("message")
                mensaje2.innerHTML = `<div></div>`
            }, 5000)

        }
        if (this.type === "ofensivo" && this.nesp > 0) {
            let vida = oponente.vida
            let barravida1 = Math.floor(oponente.vida/10)*10
            oponente.vida -= this.damage / (oponente.defense/4) * (Math.floor(Math.random() * 10) + 5)

            let barravida2 = Math.floor(oponente.vida/10)*10
            if (barravida2 < 0) {
                barravida2 = 0
            }
            const restlife = document.getElementById(`restlife${enemyplayer}`)
            restlife.classList.remove(`w${barravida1}`)
            restlife.classList.add(`w${barravida2}`)

            const mensaje = document.getElementById("message")
            mensaje.innerHTML = `<div>Avada Kedavra!!</div>`
            const sonido = document.getElementById("sound")
            sonido.src = sounds[2]

            setTimeout( () => {
                const mensaje2 = document.getElementById("message")
                mensaje2.innerHTML = `<div></div>`
            }, 5000)

            if(oponente.vida <= 0) {
                const muerto = document.getElementById(`play${enemyplayer}`)
                muerto.classList.add("muerto")
                const mensaje2 = document.getElementById("message")
                mensaje2.innerHTML = `<div>Player ${ownplayer} wins!!</div>`

                setTimeout( () => {

                    let winnerId = `player${ownplayer}`
                    let winPlayer = `${magos[winnerId]}`
                    let winName = magos[`${winPlayer}`]
                    const winner = document.getElementById(`winner${winPlayer.slice(-1)}`)
                    winner.classList.remove("oculto")
                    winner.classList.add("visible")
                    magos.winner = `${winPlayer.slice(-1)}`
                    const screen2 = document.getElementById("pantalla2")
                    screen2.classList.remove("visible")
                    screen2.classList.add("oculto")
                    const screen3 = document.getElementById("pantalla3")
                    screen3.classList.remove("oculto")
                    screen3.classList.add("visible")
                    muerto.classList.remove("muerto")
                }, 4000)
            }
        }
        this.nesp--
    }
    reestablecer() {
        this.vida = 100
        this.nesp = 3
    }
}