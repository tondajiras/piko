const piko = document.getElementById("piko");
const h = document.getElementById("h");
const gameover = document.getElementById("gameover");
const scoreDis = document.getElementById('score');
const halusky = document.getElementById('halucinace');
const reset = document.getElementById('reset');
const blikani = document.getElementById('body');
const play = document.getElementById('play');

const bool = false;
let stamina = 100;
  
const list = ["#ff0000", "#ff8000", "#ffff00", "#80ff00", "#00ff80", "#00ffff", "#0000ff", "#8000ff", "#ff0080"];

let score = 0;
let speed = 1;
let halucinace = 0;
var audio = new Audio('Piko Párno.mp3');
play.addEventListener('click', () =>{
  const interval2 = setInterval(() => {
    audio.play();
  }, 100);

  play.style.visibility = 'hidden';
  piko.style.visibility = 'visible';
  function interval(){
  let inter = setInterval(() => {
    stamina -= speed;
    h.style.width = stamina + "%";
    if (stamina <= 0) {
      blikani.style.animation = "rainbow 0.5s infinite";
      blikani.style.opacity = "0.5";
      clearInterval(inter);
      gameover.style.visibility = "visible";
      reset.style.visibility = 'visible';
      reset.addEventListener('click', () => {
        reset.style.visibility = 'hidden';
        gameover.style.visibility = "hidden";
        speed = 1;
        stamina = 100;
        score = 0;
        interval();
        blikani.style.animation = "rainbow 0.6s 1";
        blikani.style.opacity = "0.7";
      });
    }
  }, 100);
  };
interval();

piko.addEventListener("click", () => {
  score++;
  halusky.style.setProperty('--move', score  /2);
  scoreDis.innerHTML = score;
  scoreDis.animate({
    transform: "scale(1.2) translate(-50%, -50%)"
  }, {duration: 500, iterations: 1})
  speed += 0.02;
  stamina += 10;
  halucinace++;
  halusky.style.animation = 'halucinaceAnimace 1s infinite';
  if (stamina >= 100) {
    stamina = 100;
  }

  if(score === 15){
 halusky.style.backgroundImage = "url('https://i0.wp.com/i.ytimg.com/vi/PzP1XC51kro/hqdefault.jpg?w=470&ssl=1')"
  }

  if (speed > 20) {
    speed = 20;
  }
  piko.style.top = Math.random() * 80 + "%";
  piko.style.left = Math.random() * 80 + "%";
  blikani.style.backgroundColor = list[Math.floor(Math.random() * 10)];
 
  });
});

