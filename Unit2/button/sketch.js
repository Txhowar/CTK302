let state = 0

function setup() {
  createCanvas(750, 750);
}

function draw() {

  switch (state) {
    case 0:
      background("orange");
      text("My laptop is on 1%, where did I put the charger?", width / 2, height / 2);
      break;

    case 1:
      background("yellow");
      text("Oh it's right h ", width / 2, height / 2);
      // put a picture here
      break;


  }


push();
fill("red");
rect(100, 100, 100, 100);
pop();

}

function mouseReleased() {
  if ((mouseX > 100) && (mouseX < 200) && (mouseY < 200)) {
    state = (state + 1) % 2;
  }

}
