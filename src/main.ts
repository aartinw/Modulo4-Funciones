let turno = 1;

function actualizarDisplay(): void {
  const turnoElement: HTMLElement | null = document.getElementById("turno");
  if (turnoElement) {
    turnoElement.textContent = turno.toString().padStart(2, "0");
  }
}

function siguienteTurno(): void {
  turno = turno + 1;
  actualizarDisplay();
}

function anteriorTurno(): void {
  if (turno > 0) {
    turno = turno - 1;
    actualizarDisplay();
  }
}

function resetTurno(): void {
  turno = 0;
  actualizarDisplay();
}

function cambiarTurno(): void {
  const turnoOperario: HTMLInputElement | null = document.getElementById(
    "texto"
  ) as HTMLInputElement;
  const nuevoTurno = parseInt(turnoOperario?.value);
  if (typeof nuevoTurno === "number" && nuevoTurno > 0) {
    turno = nuevoTurno;
    actualizarDisplay();
  }
}

document.getElementById("siguiente")?.addEventListener("click", siguienteTurno);
document.getElementById("anterior")?.addEventListener("click", anteriorTurno);
document.getElementById("reset")?.addEventListener("click", resetTurno);
document.getElementById("cambiar")?.addEventListener("click", cambiarTurno);
