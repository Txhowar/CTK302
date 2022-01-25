let azu;
let tac;
let ult;

function setup() {
  createCanvas(500, 500);


  azu = loadImage("assets/azumarill.jpg");
  tac = loadImage("assets/tacos.jpg");
  ult= loadImage("assets/ultimate.jpg");
}

function draw() {
  image(azu, width/2, 100, 100, 100);
  image(tac, width/2, 200, 100, 100);
  image(ult, width/2, 300, 100, 100);
}
