let x = 0 ;

function setup() {
  createCanvas(1500, 1200);
}

function draw() {
background(220);

push();
translate(x, 0);
avatar();
x+=5;
if (x > width) {
  x = 0;
}
pop();
}

function avatar(){
  fill('#8A39E1');
  quad(425, 580, 490, 500, 425, 420, 360, 500);

  fill('black');
  quad(425, 550, 460, 500, 425, 450, 390, 500);

  fill('#8A39E1');
    quad(500, 740, 450, 550, 400, 550, 350, 740);

    fill("black");
    rect(425, 545, 1, 190);

    fill('#8A39E1');
  ellipse(660, 580, 150, 325);

  fill('#B667F1');
 ellipse(660, 580, 120, 295);
}
