console.log("script cargado ")
const fechaInicio = new Date(2023, 9, 20);

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("conta").innerHTML =
    `${dias} días ${horas}h ${minutos}m ${segundos}s 💞`;
}

setInterval(actualizarContador, 1000);
actualizarContador();


// 🌳 ÁRBOL QUE SE DIBUJA POCO A POCO
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

    t += 0.1;

  }, 50);
}

crearArbolAnimado();

function reproducirCancion() {
    const audioContainer = document.getElementById("audio-container");

    audioContainer.innerHTML = `
        <iframe width="0" height="0"
        src="https://www.youtube.com/embed/589ampu8OJo?autoplay=1&controls=0&rel=0"
        frameborder="0"
        allow="autoplay"
        allowfullscreen>
        </iframe>
    `;
}
});
