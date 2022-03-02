let state = 0

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 10);
}

function draw() {

  switch (state) {
    case 0:
      background("orange");
      text("Why did the chicken?", width / 2, height / 2);
      break;

    case 1:
      background("red");
      text("Because chicken noodle soup.", width / 2, height / 2);
      // put a picture here
      break;


  }
}

function mouseReleased() {
  state = (state + 1) % 2;
}
