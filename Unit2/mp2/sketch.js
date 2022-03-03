let numberOfTouches;
let lock;
let unlock;
let font1;
let timer = 0;
let state = 0;


function preload() {

  sound = loadSound("assets/loggedin.mp3");

}

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
        text("PASSWORD DENIED, PLACE HAND HERE", 600, 40);
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



        text("DO NOT REMOVE HAND", 50, 130);

        text("OPENING DATABASES...", 50, 180);

        text("INITIALIZING FINGERPRINT...", 50, 230)

        timer++;
        break;


    }
  } else {

    fill("blue");
    image(unlock, width / 2 - 500, height / 2 - 400, 950, 900, 0);
    text("LOG IN SUCCESSFUL", 50, 80);

    text("ENJOY YOUR STAY, AGENT", 50, 130);

    timer++;

  }
  if ((timer > 8 * 60)) {

    text("WELCOME TO WINDOWS 2099", 50, 180);
    sound.play();

  }

  if ((timer > 9 * 60)) {

    text("LOADING...", 50, 230);
    sound.pause();


  }

  if ((timer > 10 * 60)) {

    text("LOADING COMPLETE", 50, 280);



  }


  if ((timer > 11 * 60)) {

    text("DATABASES ON ALL OF HUMANITY", 50, 330);


    push();
    fill("red");
    rect(1250, 600, 100, 110);
    pop();
    fill("blue");
    text("LOG OUT", 1250, 650);



  }

  if ((timer > 12 * 60)) {

    text("DATABASES ON ALL OF HUMANITY", 50, 330);


    push();
    fill("red");
    rect(1250, 600, 100, 110);
    pop();
    fill("blue");
    text("LOG OUT", 1250, 650);



  }

}

function mouseReleased() {
  if (mouseX > 1250 && mouseX < 1350 && mouseY > 600 && mouseY < 710 ) {

    timer = 0;
  }
}
