let x = 0 ;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
}

function draw() {
background('black');
fill('white');

//rect(x, height/2, 30, 10);
fill('yellow');
textSize(24);
text('"muffin"', x, 255);
x+=10;
if (x > width) {
  x = 0;
}


}
