let turno = 1;

function actualizarDisplay(): void {
  const turnoElement = document.getElementById("turno");
  if (turnoElement && turnoElement instanceof HTMLHeadingElement) {
    turnoElement.textContent = turno.toString().padStart(2, "0");
  }
}

function siguienteTurno(): void {
  turno++;
  actualizarDisplay();
}

function anteriorTurno(): void {
  if (turno > 0) {
    turno--;
    actualizarDisplay();
  }
}

function resetTurno(): void {
  turno = 0;
  actualizarDisplay();
}

function cambiarTurno(): void {
  const turnoOperario = document.getElementById("texto");
  if (turnoOperario && turnoOperario instanceof HTMLInputElement) {
    const nuevoTurno = parseInt(turnoOperario.value);
    if (typeof nuevoTurno === "number" && nuevoTurno > 0) {
      turno = nuevoTurno;
      actualizarDisplay();
    }
  }
}

const botonSiguiente = document.getElementById("siguiente");
if (botonSiguiente && botonSiguiente instanceof HTMLButtonElement) {
  botonSiguiente.addEventListener("click", siguienteTurno);
}

const botonAnterior = document.getElementById("anterior");
if (botonAnterior && botonAnterior instanceof HTMLButtonElement) {
  botonAnterior.addEventListener("click", anteriorTurno);
}

const botonReset = document.getElementById("reset");
if (botonReset && botonReset instanceof HTMLButtonElement) {
  botonReset.addEventListener("click", resetTurno);
}

const botonCambiar = document.getElementById("cambiar");
if (botonCambiar && botonCambiar instanceof HTMLButtonElement) {
  botonCambiar.addEventListener("click", cambiarTurno);
}
