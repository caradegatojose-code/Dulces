// --- CONFIGURACIÓN ---
const fechaInicio = new Date(2023, 9, 20); 

// --- CONTADOR ---
function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("conta").innerHTML = 
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}
setInterval(actualizarContador, 1000);
actualizarContador();

// --- ÁRBOL DE CORAZONES (Sin Tronco) ---
function crearArbol() {
    const arbol = document.getElementById("arbol");
    const centroX = 225; 
    const centroY = 200;
    let t = 0;

    const interval = setInterval(() => {
        if (t >= Math.PI * 2) {
            clearInterval(interval);
            return;
        }

        // Ecuación matemática del corazón
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

        const heart = document.createElement("div");
        heart.className = "heart-tree";
        heart.innerHTML = "❤️";
        heart.style.left = centroX + x * 12 + "px";
        heart.style.top = centroY - y * 12 + "px";
        heart.style.fontSize = (Math.random() * 10 + 15) + "px";
        
        arbol.appendChild(heart);
        t += 0.05;
    }, 30);
}
crearArbol();

// --- MÚSICA ---
function reproducirCancion() {
    const container = document.getElementById("audio-container");
    // Usamos un iframe de YouTube oculto pero funcional
    container.innerHTML = `
        <iframe width="0" height="0" 
        src="https://www.youtube.com/embed/589ampu8OJo?autoplay=1" 
        frameborder="0" allow="autoplay"></iframe>`;
    
    alert("🎵 ¡Nuestra canción está sonando!");
}

// --- BOTÓN ¿CUÁNTO TE AMO? (Lluvia de frases) ---
function lluviaDeAmor() {
    const frases = [
        "Te amo mucho", "Preciosa", "Eres mi vida", 
        "Mucho mucho mucho", "Te amo infinito", "Bonita", 
        "Mi todo", "Eres perfecta", "Mi corazón", "Te amo"
    ];

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const frase = document.createElement("div");
            frase.className = "frase-flotante";
            frase.innerHTML = frases[Math.floor(Math.random() * frases.length)];
            
            // Posición aleatoria
            frase.style.left = Math.random() * 80 + 10 + "vw";
            frase.style.top = Math.random() * 80 + 10 + "vh";
            
            document.body.appendChild(frase);

            // Eliminar después de la animación
            setTimeout(() => frase.remove(), 3000);
            
            // Crear también un corazón extra por cada frase
            crearCorazonExplosion(frase.style.left, frase.style.top);
        }, i * 200);
    }
}

function crearCorazonExplosion(x, y) {
    const c = document.createElement("div");
    c.innerHTML = "💖";
    c.style.position = "fixed";
    c.style.left = x;
    c.style.top = y;
    c.style.fontSize = "2rem";
    c.style.pointerEvents = "none";
    c.style.animation = "animarFrase 2s forwards";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 2000);
}
