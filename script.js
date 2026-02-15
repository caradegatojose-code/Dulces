/ 📅 Fecha inicio (20 octubre 2023)
const fechaInicio = new Date(2023, 9, 20, 0, 0, 0);

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const segundos = Math.floor(diferencia / 1000) % 60;
  const minutos = Math.floor(diferencia / (1000 * 60)) % 60;
  const horas = Math.floor(diferencia / (1000 * 60 * 60)) % 24;
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

  document.getElementById("contador").innerHTML =
    `${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos ❤️`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// ❤️ Crear corazones cayendo
function crearCorazon() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(crearCorazon, 300);

// 🎵 Reproducir canción
function reproducirMusica() {
  const player = document.getElementById("player");

  // 🔥 Pega aquí el ID del video de "Lento"
  player.src = "https://music.youtube.com/watch?v=589ampu8OJo&si=LR4iV_QUZ5Z9gjw8";
}
function crearArbol() {
  const arbol = document.getElementById("arbol");
  const centerX = 200;
  const centerY = 180;

  for (let t = 0; t < Math.PI * 2; t += 0.1) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y =
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t);

    const heart = document.createElement("div");
    heart.classList.add("heart-tree");
    heart.innerHTML = "❤️";

    heart.style.left = centerX + x * 10 + "px";
    heart.style.top = centerY - y * 10 + "px";

    arbol.appendChild(heart);
  }
}

crearArbol();
