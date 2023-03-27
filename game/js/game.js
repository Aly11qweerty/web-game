var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

bird.src = "img/bird.png";
bg.src = "img/beton_texture.png";
fg.src = "img/wall.png";
pipeUp.src = "img/wall.png";
pipeBottom.src = "img/wall.png";

var gap = 90;

//При нажатии на какую либо кнопку
document.addEventListener("keydown", moveUp);

function moveUp(){
    yPos -= 20;
}

//Создание блоков
var pipe = [];

pipe[0] = {
    x : cvs.width;
    y : 0
}

//Позиция квадрок
var xPos = 10;
var yPos = 150;
var grap = 1;

function draw() {
    ctx.drawImage(bg, 0, 0);

    for(var i=0; i< pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, 100, 0 + pipeUp.height + gap);  
    }
    
    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav;
    requestAnimationFrame(draw);
}

pipeBottom.onload = draw;