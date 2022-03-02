let state = 0
let timer = 0
let myState

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 10);
}

function draw() {

  if (timer > 2 * 60) {
    timer = 0;
    state++;
    if (state > 1) {
      state = 0;
    }
  }

  switch (state) {
    case 0:
      background("orange");
      text("My laptop is on 1%, where did I put the charger?", width / 2, height / 2);

      timer++;
      break;

    case 1:
      background("red");
      text("It's ri ", width / 2, height / 2);
      // put a picture here
      timer++;
      break;


  }
}

function mouseReleased() {
  state = (state + 1) % 2;
}
