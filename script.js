const fechaInicio = new Date(2023, 9, 20); // Ajusta tu fecha aquí

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

// ÁRBOL MUCHO MÁS TUPIDO
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

    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

    const heart = document.createElement("div");
    heart.classList.add("heart-tree");
    heart.innerHTML = "❤️";
    heart.style.left = centerX + x * 10 + "px";
    heart.style.top = centerY - y * 10 + "px";
    heart.style.fontSize = (Math.random() * 8 + 10) + "px";

    arbol.appendChild(heart);
    t += 0.03; // Crea muchos corazones para que se vea lleno
  }, 20);
}

// CORAZONES FLOTANTES DE FONDO
function crearCorazonesDeFondo() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("corazon-fondo");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 10 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";
    document.querySelector('.corazones').appendChild(heart);
    
    setTimeout(() => heart.remove(), 8000);
  }, 400);
}

// MÚSICA (Activa por interacción)
function reproducirCancion() {
    const container = document.getElementById("audio-container");
    const btn = document.getElementById("btn-musica");
    
    container.innerHTML = `
        <iframe src="https://www.youtube.com/embed/589ampu8OJo?autoplay=1" 
        allow="autoplay"></iframe>`;
    
    btn.innerHTML = "💖 Sonando...";
    btn.style.background = "#ff758c";
}

// LLUVIA DE AMOR Y FRASES
function lluviaDeAmor() {
  const frases = [
    "Te amo mucho♥️", "♥️mucho mucho mucho♥️", "Te amo ♥️", "Bonita♥️", 
    "Preciosa♥️", "Eres mi todo♥️", "Mi vida♥️", "Te amo infinito",
    "♥️Eres increíble", "Mi amor♥️","tqm♥️" ,"te adoro ♥️", "♥️♥️♥️♥️♥️"
  ];

  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      const f = document.createElement("div");
      f.className = "frase-amor";
      f.innerHTML = frases[Math.floor(Math.random() * frases.length)];
      f.style.left = Math.random() * 70 + 15 + "vw";
      f.style.top = Math.random() * 70 + 15 + "vh";
      document.getElementById("contenedor-frases").appendChild(f);

      // Explosión de corazones extra al salir la frase
      const h = document.createElement("div");
      h.className = "corazon-fondo";
      h.innerHTML = "💖";
      h.style.left = f.style.left;
      h.style.fontSize = "40px";
      document.querySelector('.corazones').appendChild(h);

      setTimeout(() => { f.remove(); h.remove(); }, 3000);
    }, i * 250);
  }
}

// Iniciar efectos
crearArbolAnimado();
crearCorazonesDeFondo();
