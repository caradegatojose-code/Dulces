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
