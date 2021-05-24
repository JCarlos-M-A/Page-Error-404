///////////////////SVG ROBOT//////////////////////
//Derechos del DIBUJO atribuidos al creador yo solo lo saque de google y lo vectorice XD.

//Crear robot
var robot = SVG("robot").size(250, 270);
robot.viewbox(0, 0, 250, 270);

// Crear cuerpo
var cuerpo = robot.ellipse(150, 180);
cuerpo.center(120, 170).fill("#def7db");
cuerpo.stroke({ width: 5, color: "#000000", line: "0" });

// Crear cinturon
var cinturon = robot.rect(175, 50).fill("#cbddf9");
cinturon.center(120, 160).radius(10);
cinturon.stroke({ width: 5, color: "#000000", line: "0" });

//Crear oreja
var orejad = robot.rect(20, 60).fill("#7d7d7d");
orejad.center(35, 60).radius(5);
orejad.stroke({ width: 5, color: "#000000", line: "0" });

// Crear antena
var antena = robot.rect(5, 40).fill("#000000");
antena.center(190, 20);

// Crear cabeza
var cabeza = robot.rect(160, 90).fill("#def7db");
cabeza.center(120, 60).radius(10);
cabeza.stroke({ width: 5, color: "#000000", line: "0" });

//Crear ojos
var ojoSize = 40;
var centerOjoDY = 55;
var centerOjoDX = 145;
var centerOjoIY = 55;
var centerOjoIX = 75;

var direccionOjo = 7;

// Crear ojo D
var ojod = robot.circle(ojoSize, ojoSize);
ojod.center(centerOjoDX, centerOjoDY).fill("#00b247");

//Crear iris derecha
var ojoiris = robot.circle(10);
ojoiris
  .center(centerOjoDX - direccionOjo, centerOjoDY - direccionOjo)
  .fill("#fff");

//Crear parpado derecho
var circleD = robot.circle(40).fill("#fff").center(145, 55);
var maskD = robot.mask();
maskD.add(circleD);
var rectD = robot.ellipse(75, 40).move(115, -5).fill("#7d7d7d");
rectD.maskWith(maskD);

//Crear ojo izquierdo
var ojoi = robot.ellipse(40, 40);
ojoi.center(centerOjoIX, centerOjoIY).fill("#00b247");

//Crear iris izquierda
var ojoirisi = robot.circle(10);
ojoirisi
  .center(centerOjoIX - direccionOjo, centerOjoIY - direccionOjo)
  .fill("#fff");

//Crear parpado izquierdo
var circle = robot.circle(40).fill("#fff").center(75, 55);
var mask = robot.mask();
mask.add(circle);
var rect = robot.ellipse(75, 40).move(30, -5).fill("#7d7d7d");
rect.maskWith(mask);

//Crear oreja
var orejai = robot.rect(40, 60).fill("#7d7d7d");
orejai.center(200, 60).radius(10);
orejai.stroke({ width: 5, color: "#000000", line: "0" });

var orejai = robot.rect(20, 30).fill("#3e3e3e");
orejai.center(215, 60).radius(5);
orejai.stroke({ width: 5, color: "#000000", line: "0" });

function parpados() {
  rectD.animate({ duration: "500", ease: "<>", delay: "0s" }).dmove(0, 40).animate({ duration: "500", ease: "<>", delay: "0s" }).dmove(0, -40);

  rect.animate({ duration: "500", ease: "<>", delay: "0s" }).dmove(0, 40).animate({ duration: "500", ease: "<>", delay: "0s" }).dmove(0, -40);

  setTimeout(parpados, 3000);
}
$(document).ready(function () {
  parpados();
});

function FullScreen() {
  if (!document.fullscreenElement || !document.webkitFullscreenElement) {
    try {
             var uno = document.getElementById("idFullScrean");
        if (uno.innerHTML == "fullscreen_exit") 
          {
            uno.innerHTML = "fullscreen";
          }else{uno.innerHTML = "fullscreen_exit";}
      document.documentElement.webkitRequestFullscreen();
    } catch (e) {
      document.documentElement.requestFullscreen();
    }
  } else {
    if (document.exitFullscreen || document.webkitExitFullscreen) {
      try {
        var uno = document.getElementById("idFullScrean");
        if (uno.innerHTML == "fullscreen_exit") 
          {
            uno.innerHTML = "fullscreen";
          }else{uno.innerHTML = "fullscreen_exit";} 
        document.webkitExitFullscreen();
      } catch (e) {
        document.exitFullscreen();
      }
    }
  }
}
