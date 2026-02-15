const fechaInicio = new Date(2023, 9, 20); // 20 de Octubre 2023

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("conta").innerHTML =
    `${dias}d ${horas}h ${minutos}m ${segundos}s 💞`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// ÁRBOL MEJORADO
function crearArbolAnimado() {
  const arbol = document.getElementById("arbol");
  const centerX = 200;
  const centerY = 180;
  let t = 0;

  const intervalo = setInterval(() => {
    if (t >= Math.PI * 2) {
      clearInterval(intervalo);
      return;
    }

    // Ecuación del corazón
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

    const heart = document.createElement("div");
    heart.classList.add("heart-tree");
    heart.innerHTML = "❤️";
    heart.style.left = centerX + x * 10 + "px";
    heart.style.top = centerY - y * 10 + "px";
    
    // Variación de tamaño aleatoria para que se vea más natural
    heart.style.fontSize = (Math.random() * 10 + 10) + "px";

    arbol.appendChild(heart);
    t += 0.05; // Más pequeño el incremento = más corazones y más tupido
  }, 30);
}

crearArbolAnimado();

// SOLUCIÓN AL AUDIO
function reproducirCancion() {
    const container = document.getElementById("audio-container");
    const btn = document.getElementById("btn-musica");
    
    // Usamos el ID del video y forzamos el autoplay tras el clic
    container.innerHTML = `
        <iframe src="https://www.youtube.com/embed/589ampu8OJo?autoplay=1" 
        allow="autoplay"></iframe>`;
    
    btn.innerHTML = "💖 Sonando para ti...";
    btn.style.background = "#ff758c";
}
