let state = 0

function setup() {
  createCanvas(500, 500);
}

function draw() {

timer++ ;
  if (timer > 2*60) {
    timer = 0 ;
    myState++ ;
    if (myState > 1) {
      myState = 0 ;
    }
  }

  switch (state) {
    case 0:
      background("orange");
      text("My laptop is on 1%, where did I put the charger?", width / 2, height / 2);
      break;

    case 1:
      background("red");
      text("It's ri ", width / 2, height / 2);
      // put a picture here
      break;


  }
}

function mouseReleased() {
  state = (state + 1) % 2;
}
