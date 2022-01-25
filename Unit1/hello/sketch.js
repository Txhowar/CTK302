let azu;
let tac;
let ult;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER) ;

  azu = loadImage("assets/azumarill.jpg");
  tac = loadImage("assets/tacos.jpg");
  ult= loadImage("assets/ultimate.jpg");
}

function draw() {
  image(azu, width/2, 100);
  image(tac, width/2, 200);
  image(ult, width/2, 300);
}
