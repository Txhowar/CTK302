let state = 0;
let timer = 0;

function setup() {
  createCanvas(1500, 1000);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background("grey");
      text("WAIT TO START", 800, 400);
      //timer code
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      text("CASE 1", 100, 100);
      fill('#8A39E1');
    ellipse(660, 580, 150, 325);

    fill('#B667F1');
   ellipse(660, 580, 120, 295);
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 2;
      }
      break;


    case 2:
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
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 3;
      }
      break;

      case 3:
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
        timer++;
        if (timer > 3 * 60) {
          timer = 0;
          state = 4;
        }
          break;

        case 4:
        fill('#8A39E1');
          text("Teleportation Successful", 700, 100);
          fill('#8A39E1');
          quad(425, 580, 490, 500, 425, 420, 360, 500);

          fill('black');
          quad(425, 550, 460, 500, 425, 450, 390, 500);

          fill('#8A39E1');
            quad(500, 740, 450, 550, 400, 550, 350, 740);

            fill("black");
            rect(425, 545, 1, 190);
          timer++;
          if (timer > 3 * 60) {
            timer = 0;
            state = 5;
          }
          break;
  }
}
