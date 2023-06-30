function tirarDado() {
  return Math.round(Math.random() * 6);
}

function game() {
  let puntosUsuario = 0,
    puntosIA = 0,
    ronda,
    dadoUsuario,
    dadoIA,
    teclaIngreso;

  ronda = parseInt(prompt("Ingresa cuantas rondas queres jugar"));

  while (isNaN(ronda)) {
    ronda = parseInt(prompt("Numero invalido. Ingrese un numero entero."));
  }

  do {
    teclaIngreso = prompt("Ingrese 't' para tirar dado");
    while (teclaIngreso != "t") {
      teclaIngreso = prompt("Ingreso incorrecto.Ingrese 't' para tirar dado");
    }

    dadoUsuario = tirarDado();
    alert("Tu dado fue un " + dadoUsuario);
    dadoIA = tirarDado();
    alert("El dado de la IA fue " + dadoIA);
    if (dadoUsuario > dadoIA) {
      puntosUsuario += 2;
      alert("Ganaste 2 puntos!");
    } else if (dadoIA > dadoUsuario) {
      puntosIA += 2;
      alert("La IA Gano 2 puntos!");
    } else {
      puntosUsuario += 1;
      puntosIA += 1;
      alert("Empate! 1 punto para cada uno!");
    }
    ronda--;
  } while (ronda > 0);

  if (puntosUsuario > puntosIA) {
    alert("Ganaste " + puntosUsuario + " a " + puntosIA);
  } else if (puntosIA > puntosUsuario) {
    alert("Perdiste " + puntosIA + " a " + puntosUsuario);
  } else {
    alert("Empataste " + puntosUsuario + " a " + puntosIA);
  }
}

game();
