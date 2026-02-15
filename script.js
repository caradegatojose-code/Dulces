// AJUSTA AQUÍ TU FECHA DE INICIO
const fechaInicio = new Date(2023, 9, 20); 

function updateCounter() {
    const ahora = new Date();
    const diff = ahora - fechaInicio;
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff / (1000*60*60)) % 24);
    const m = Math.floor((diff / (1000*60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    document.getElementById("conta").innerHTML = `${d} días, ${h}h ${m}m ${s}s 💞`;
}
setInterval(updateCounter, 1000);
updateCounter();

function drawHeart() {
    const container = document.getElementById("arbol");
    const cx = 225, cy = 200;
    let t = 0;
    const timer = setInterval(() => {
        if (t >= Math.PI * 2) { clearInterval(timer); return; }
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
        const h = document.createElement("div");
        h.className = "heart-tree";
        h.innerHTML = "❤️";
        h.style.left = cx + x * 12 + "px";
        h.style.top = cy - y * 12 + "px";
        container.appendChild(h);
        t += 0.05;
    }, 25);
}
drawHeart();

function reproducirCancion() {
    const audio = document.getElementById("audio-container");
    // ID de la canción de YouTube
    audio.innerHTML = `<iframe width="0" height="0" src="https://www.youtube.com/embed/589ampu8OJo?autoplay=1" allow="autoplay"></iframe>`;
}

function lluviaDeAmor() {
    const frases = [
        "Eres mi sol", "Te amo infinitamente", "Preciosa mía", 
        "Mi vida entera", "Eres perfecta", "Gracias por estar", 
        "Me haces muy feliz", "Por mil años más", "Te adoro"
    ];
    for(let i=0; i<12; i++) {
        setTimeout(() => {
            const div = document.createElement("div");
            div.className = "frase-f";
            div.innerHTML = frases[Math.floor(Math.random()*frases.length)];
            div.style.left = (Math.random() * 70 + 15) + "vw";
            div.style.top = (Math.random() * 70 + 15) + "vh";
            document.getElementById("contenedor-frases").appendChild(div);
            setTimeout(() => div.remove(), 3500);
        }, i * 300);
    }
}
