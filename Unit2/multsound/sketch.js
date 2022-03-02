let state = 0 ;
let song1, song2, song3;


function preload() {
  song1 = loadSound("assets/jazz1.mp3");
  song2 = loadSound("assets/jazz2.mp3");
  song3 = loadSound("assets/jazz3.mp3");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
state = (state + 1) % 6;
switch (state) {
  case 0:

song1.play();
state = 1;

  break;
  case 1:
background('red');
  break;
  case 2:
  song3.play();
  state = 3;
  break;
  case 3:
background('yellow');
  break;
  case 4:
  song3.play();
  state = 5;
  break;
  case 5:
background('orange');
  break;
}
}

function mouseReleased(){

  song1.pause();
  song2.pause();
  song3.pause();
}
