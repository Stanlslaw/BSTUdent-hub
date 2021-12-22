var cvs = document.getElementById("main");
var ctx = cvs.getContext("2d");
var bird = new Image();
var bg = new Image();
var fg = new Image();
var palkaUp = new Image();
var palkaDown = new Image();
var ht = 90;
var posX = 20;
var posY = 275;
var grav = 0.7;
var palka = [];
var i = 0;
var score = 0;
palka[i] = {
  x: cvs.width,
  y: 0,
};
bird.src = "img/flappy_bird_bird.png";
bg.src = "img/flappy_bird_bg.png";
fg.src = "img/flappy_bird_fg.png";
palkaUp.src = "img/flappy_bird_pipeUp.png";
palkaDown.src = "img/Flappy_bird_pipeBottom.png";
function vis() {
  document.getElementById("main").className = "cs";
  document.getElementById("ct").className = "dp";

  ctx.drawImage(bg, 0, 0);

  for (i = true - 1; i < palka.length && i != -5; i++) {
    ctx.drawImage(palkaUp, palka[i].x, palka[i].y);
    ctx.drawImage(palkaDown, palka[i].x, palka[i].y + palkaUp.height + ht);
    ctx.drawImage(fg, 0, cvs.height - fg.height);
    palka[i].x -= 1;
    if (palka[i].x == 70) {
      palka.push({
        x: cvs.width,
        y: Math.floor(Math.random() * palkaUp.height) - palkaUp.height,
      });
    }
    console.log(palka.length);
    if (
      (posX + bird.width >= palka[i].x &&
        posX <= palka[i].x + palkaUp.width &&
        (posY <= palka[i].y + palkaUp.height ||
          posY + bird.height >= palka[i].y + palkaUp.height + ht)) ||
      posY + bird.height >= cvs.height - fg.height
    ) {
      let g = confirm("smth");
      if (g == true) {
        posY = 275;
        posX = 20;
        palka[i].x = 1000000;
        palka[i].y = -1000000;
        score = 0;
        vis();
      } else if (g != "ok" && g != 1) {
        i = -5;
        document.getElementById("main").className = "dp";
        alert("gg");
      }
    }
    if (palka[i].x == 10) {
      score++;
    }
  }
  ctx.fillStyle = "#000";
  ctx.font = "24px Verdana, sans-serif";
  ctx.fillText("Счет:" + score, 10, 500);

  ctx.drawImage(bird, posX, posY);
  posY += grav;
  duration = 200;
  requestAnimationFrame(vis);
}
document.addEventListener("keydown", moveUp, false);
function moveUp() {
  posY -= 50;
}
var popup = document.getElementById("instMain");
var button = document.getElementById("inst");
var span = document.getElementById("sp");
button.onclick = function () {
  popup.style.display = "block";
};
span.onclick = function () {
  popup.style.display = "none";
};
window.onclick = function (e) {
  if (e.target == popup) {
    popup.style.display = "none";
  }
};
