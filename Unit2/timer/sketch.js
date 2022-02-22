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
      //timer code
      timer++;
      if (timer > 3*60){
        timer = 0;
        state = 1 ;
      }
      break;

    case 1:
      text("CASE 1", 100, 100);
      timer++;
      if (timer > 5*60){
        timer = 0;
        state = 2 ;
      }
      break;


    case 2:
      text("CASE 2", 100, 100);
      timer++;
      if (timer > 5*60){
        timer = 0;
        state = 0 ;
      }
      break;
}
