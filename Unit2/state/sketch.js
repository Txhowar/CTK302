let state = 0;

function setup() {
  createCanvas(1500, 1000);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background("grey");
      text("CLICK TO START", 800, 400);
    //  for (let j = 0; j < 20; j++) {
      //  for (let i = 0; i < 20; i++) {
        //  rect(i * 20, j * 20, 12, 12);
      //  }
    //  }
      break;

    case 1:
    background("black");
      text("CASE 1", 100, 100);

        fill('#8A39E1');
      ellipse(660, 580, 150, 325);

      fill('#B667F1');
     ellipse(660, 580, 120, 295);
      break;


    case 2:
      background("white");
      text("CASE 2", 100, 100);
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
      break;

    case 3:
  background("red");
      text("CASE 3", 100, 100);
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
      break;

    case 4:
      background("green");
      text("SUCCESS", 100, 100);
      fill('#8A39E1');
      quad(425, 580, 490, 500, 425, 420, 360, 500);

      fill('black');
      quad(425, 550, 460, 500, 425, 450, 390, 500);

      fill('#8A39E1');
        quad(500, 740, 450, 550, 400, 550, 350, 740);

        fill("black");
        rect(425, 545, 1, 190);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;

}
