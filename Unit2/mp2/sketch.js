let numberOfTouches;
let lock;
let unlock;
let font1;
let timer = 0;
let state = 0;

function setup() {

    createCanvas(windowWidth - 10, windowHeight - 10);
  font1 = loadFont("assets/Orbitron Black.ttf");
  lock = loadImage("assets/HandLock.jpg");
  unlock = loadImage("assets/HandUnlock.jpg");

}


function draw() {
  clear();
  background("black");
  numberOfTouches = touches.length;
  text(numberOfTouches + ' Fingerprints', 5, 30);
  if (!(timer > 3 * 60)) {




    switch (numberOfTouches) {
      case 0:

        image(lock, width / 2 - 500, height / 2 - 400, 950, 900, 0);
        fill("red");
        textFont(font1);
        textSize(16);
        text("PASSWORD DENIED, PLACE HAND HERE", 560, 40);
        break;


      case 1:


        image(lock, width / 2 - 500, height / 2 - 400, 950, 900, 0);
        text("FINGERPRINT DETECTED, 4 MORE REQUIRED", 50, 80);
        break;

      case 2:


        image(lock, width / 2 - 500, height / 2 - 400, 950, 900, 0);
        text("2 FINGERPRINTS DETECTED, 3 MORE REQUIRED", 50, 80);
        break;

      case 3:


        image(lock, width / 2 - 500, height / 2 - 400, 950, 900, 0);
        text("3 FINGERPRINTS DETECTED, 2 MORE REQUIRED", 50, 80);
        break;

      case 4:


        image(lock, width / 2 - 500, height / 2 - 400, 950, 900, 0);
        text("4 FINGERPRINTS DETECTED, 1 MORE REQUIRED", 50, 80);
        timer = 0;
        break;

      case 5:


        image(unlock, width / 2 - 500, height / 2 - 400, 950, 900, 0);
        fill("green");
        text("5 FINGERPRINTS DETECTED, LOGGING IN", 50, 80);

        timer++;


        break;


    }
  }
  else {
    fill("blue");
  image(unlock, width / 2 - 500, height / 2 - 400, 950, 900, 0);
  text("LOGGED IN", 50, 80);

  timer++;
}



}
