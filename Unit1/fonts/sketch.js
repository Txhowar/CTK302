let font1, font2;



function setup() {
  createCanvas(500, 500);
  font1 = loadFont("assets/Josefont.ttf");
  font2 = loadFont("assets/Robo.ttf");
  textAlign(CENTER);
}

function draw() {
background(100);
textSize(80);
textFont(font1);
text("Chicken Salad", width/2, 100);
textFont(font2);
text("How do you do?", width/2, 200);
}
