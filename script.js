let fontSize = 18; // Tamaño de fuente inicial
let siText = "Sí"; // Texto inicial del botón "Sí"
let noText = "No"; // Texto inicial del botón "No"

var textosNo = ["Por qué no??", "Segura que no??", "Nuuu", "No divitido", "😢😖", "Sip"];
var textosSi = ["Aquíii", "Mejor sii", "Tiii", "Si divitido", "💖😁💖", "Nop"];
var indiceNo = 0;
var indiceSi = 0;

function cambiarTexto() {
    var botonNo = document.getElementById("botonNo");
    var botonSi = document.getElementById("botonSi");
    
    botonNo.textContent = textosNo[indiceNo];
    botonSi.textContent = textosSi[indiceSi];

    // Incrementar el índice para el siguiente texto
    indiceNo = (indiceNo + 1) % textosNo.length;
    indiceSi = (indiceSi + 1) % textosSi.length;

    // Redimensionar el botón "Sí"
    redimensionar();
}

function redimensionar() {
    var botonSi = document.getElementById("botonSi");
    botonSi.style.fontSize = fontSize + 'px';
    fontSize += 4; // Incremento del tamaño de fuente
}

document.getElementById('botonSi').addEventListener('click', function() {
  window.location.href = "yupiii.html";
});
