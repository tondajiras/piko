const piko = document.getElementById("piko");
const h = document.getElementById("h");
const gameover = document.getElementById("gameover");
const scoreDis = document.getElementById('score');
const halusky = document.getElementById('halusky')
let stamina = 100;

let score = 0;
let speed = 1;
let halucinace = 0;

const interval = setInterval(() => {
  stamina -= speed;
  h.style.width = stamina + "%";
  if (stamina <= 0) {
    clearInterval(interval);
    gameover.style.visibility = "visible";
  }
}, 100);

piko.addEventListener("click", () => {
  score++;
  scoreDis.innerHTML = score;
  scoreDis.animate({
    transform: "scale(1.2) translate(-50%, -50%)"
  }, {duration: 500, iterations: 1})
  speed += 0.02;
  stamina += 10;
  halucinace++;
  if (stamina >= 100) {
    stamina = 100;
  }

  if (speed > 20) {
    speed = 20;
  }
  piko.style.top = Math.random() * 80 + "%";
  piko.style.left = Math.random() * 80 + "%";
});
