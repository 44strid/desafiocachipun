var cantidadjuego = 0



function iniciarjuego(){
   cantidadjuego = parseInt(document.getElementById("cantidadjuego").value);
    document.getElementById("jugar").disabled = true;
    document.getElementById("cantidadjuego").disabled = true;
 }


function obtenerEleccionOrdenador() {
    const elecciones = ['piedra', 'papel', 'tijera'];
    const indice = Math.floor(Math.random() * elecciones.length);
    return elecciones[indice];
}

function determinarGanador(jugador, ordenador) {
    if (jugador === ordenador) {
        return "¡Es un empate!";
    }

    if (jugador === 'piedra' && ordenador === 'tijera' ||
        jugador === 'papel' && ordenador === 'piedra' ||
        jugador === 'tijera' && ordenador === 'papel') {
        return "¡Ganaste!";
    } else {
        return "Perdiste. Intenta de nuevo.";
    }
}

function jugar(eleccionJugador) {
    if (cantidadjuego>1){
        const eleccionOrdenador = obtenerEleccionOrdenador();
        const resultado = determinarGanador(eleccionJugador, eleccionOrdenador);
        document.getElementById('resultado').innerText = `Tu elección: ${eleccionJugador}. Elección del ordenador: ${eleccionOrdenador}. ${resultado}`;
   cantidadjuego = cantidadjuego-1

    }
else { 
    console.log("juego terminado")
document.getElementById("jugar").disabled = false;
document.getElementById("cantidadjuego").disabled = false;
}
}