
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 30;

var dx = 2;
var dy = -2;

var ballRadius = 10;

//paleta
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth)/ 2 ;

//variables para  detectar cuando se toquen las tecas direccionales izquierda y derecha
var rightPressed = false;
var  leftPressed = false;

//Agregar eventos de presionado y soltado de teclas
document.addEventListener("keydown", keydownHandler, false);
document.addEventListener("keyup", keyupHandler, false);

//definimos la funcion cuando presiona la tecla
function keyupHandler() {

}

//esta funcion es para cuando suelta la tecla
function keydownHandler (){

}

//Esta funcion dibuja una paleta
function drawPaddle() {
  context.beginPath();
  context.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  context.fillStyle = "#079992";
  context.fill();
  context.closePath();
}



//esta funcion dibuja una bolita en x,y
function drawBall() {
  context.beginPath();
  context.arc(x, y, ballRadius, 0, Math.PI*2, false);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();
}
 //esta funcion es la que me llama todas las funciones entonces aca adentro ponemos todo lo que queremos llamar
function draw() {
  context.clearRect (0, 0, canvas.width, canvas.height);
//se llama la funcion de dibujar en circulo
drawBall();
//se manda allamar ahora a la funcion rectangulo
drawPaddle();

//verificar si llego al limites de las y..le preguntamos si esta en el limites//arriba abajo
if (y + dy < 0 || y + dy > canvas.height) {
  dy = -dy;//aqui le cambiamos el dy negativo a positivo porque -dy-dy=+
}

//verificra si x llego al limite izquierdo//derecho
if (x + dx < 0 || x + dx > canvas.width) {
  dx = -dx;
}



  x += dx;
  y += dy;
}

setInterval(draw, 10);