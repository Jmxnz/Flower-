"use strict";

// Random Color ////////////////////////
const ball = document.getElementById("ball");
let iterationCount = 0;
function changeColor() {
  iterationCount++;
  if (iterationCount < 3 || iterationCount % 2 == 0) {
    return;
  }
  document.documentElement.style.setProperty(
    "--color1",
    "hsl(" + Math.round(Math.random() * 360) + "deg, 100%, 50%)"
  );
  document.documentElement.style.setProperty(
    "--color2",
    "hsl(" + Math.round(Math.random() * 360) + "deg, 100%, 55%)"
  );
}
ball.addEventListener("animationiteration", changeColor);