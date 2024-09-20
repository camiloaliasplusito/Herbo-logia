var Ia, Fondo; 
var IaImagen, FondoImagen; 
var puntuación = 0; 
var PreguntaActual = 0; 

var preguntas = [ 
    { pregunta: "¿Qué hierba se utiliza para mejorar la memoria?", respuestas: ["Ginkgo Biloba", "Albahaca", "Romero", "Perejil"], correcto: "Ginkgo Biloba" }, 
    { pregunta: "¿Cuál es la planta conocida por sus propiedades antiinflamatorias?", respuestas: ["Cúrcuma", "Menta", "Tomillo", "Salvia"], correcto: "Cúrcuma" }, 
    { pregunta: "¿Qué hierba es efectiva para tratar problemas respiratorios?", respuestas: ["Eucalipto", "Cilantro", "Orégano", "Perejil"], correcto: "Eucalipto" }, 
    { pregunta: "¿Cuál es un remedio natural para la indigestión?", respuestas: ["Jengibre", "Azafrán", "Albahaca", "Café"], correcto: "Jengibre" }, 
    { pregunta: "¿Qué planta se usa combinada para hacer infusiones relajantes?", respuestas: ["Tila", "Menta", "Romero", "Cilantro"], correcto: "Tila" } 
]; 

var input; 

function preload() { 
    FondoImage = loadImage("TecnoFondo.png"); 
    IaImage = loadImage("IA-removebg-preview.png"); 
} 

function setup() { 
    createCanvas(400, 400); 
    Ia = createSprite(200, 180, 20, 50); 
    Ia.addImage(IaImage); 
    Ia.scale = 0.4; 
    input = createInput(); 
    input.position(width / 2 - 50, height - 120); 
    input.size(100); 
    input.attribute('placeholder', 'Respuesta :)'); 
} 

function draw() { 
    if (FondoImage) { 
        background(FondoImage); 
    } 
    
    fill("blanco"); 
    textSize(16); 
    textAlign(CENTER); 
    text("Hola, soy tu IA herbología y te voy a desafiar", width / 2, height - 360); // Texto agregado
    text(preguntas[PreguntaActual].pregunta, width / 2, height - 320); 

    for (var i = 0; i < preguntas[PreguntaActual].respuestas.length; i++) { 
        text(preguntas[PreguntaActual].respuestas[i], width / 2, height - 70 + i * 20); 
    } 
    
    fill("blanco"); 
    text("Puntuación: " + puntuación, width / 5.40, height - 240); 

    if (PreguntaActual >= preguntas.length) { 
        displayResult(); 
    } 
    drawSprites(); 
} 

function keyPressed() { 
    if (key === 'Enter') { 
        checkAnswer(input.value()); 
        input.value(''); 
    } 
} 

function checkAnswer(respuesta) { 
    if (respuesta.toLowerCase() === preguntas[PreguntaActual].correcto.toLowerCase()) { 
        puntuación++; 
    } 
    PreguntaActual++; 
} 

function displayResult() { 

    fill("blanco"); 
    textSize(32); 
    textAlign(CENTER); 
    if (puntuación >= 6) { 
        text("¡Ganaste! Puntuación: " + puntuación, width / 2, height / 2); 
    } else { 
        text("Perdiste. Puntuación: " + puntuación, width / 2, height / 2); 
    } 
}
