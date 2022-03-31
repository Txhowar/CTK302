let cars = [] ;
let frogPos ;
let state = 0;
let timer = 0;
let maxCars = 5;
let maxTimer = 6;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn objects
  for (let i = 0 ; i < 2 ; i++){
    cars.push(new Car()) ;
  }

  frogPos = createVector(width/2, height-100) ;

}

function draw() {

  switch(state) {
    case 0:
      background('grey');
      text("welcome", 100, 100);
      break;

      case 1:
      game();
      timer++;
      if (timer > maxTimer * 60) {
        timer = 0;
        state = 3;
      }
      break;

      case 2:
      background('grey');
      text("you win!", 100, 100);
      break;

      case 3:
      background('grey');
      text("lost!", 100, 100);
      break;
  }

}

function game() {
  background("white");

    for (let i = 0 ; i < cars.length ; i++){
      cars[i].display() ;
      cars[i].move() ;

      if (cars[i].pos.dist(frogPos) < 50) {
        cars.splice(i, 1);

      }
    }

  if (cars.length == 0) { // they won
    state = 2;
  }

  //frog
    fill('green');
  ellipse(frogPos.x, frogPos.y, 50, 50) ;
  checkForKeys();

  //show score

  //fill("black");
  //textSize(24);
  //text("score");
}

class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100); // initialize your attributes here
    this.v = createVector(random(3), random(-6));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = random(48, 128) ;
  }

  // methods

  display() {
    fill(this.r, this.b, this.g, this.o);
     rect(this.pos.x, this.pos.y, 75, 25);
     ellipse(this.pos.x, this.pos.y + 40, 30, 30);
     ellipse(this.pos.x+70, this.pos.y + 40, 30, 30);
   // textSize(this.size) ;
    //text("bruh", this.pos.x, this.pos.y) ;
  }

  move() {
    this.pos.add(this.v);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}


function checkForKeys(){
  if (keyIsDown(LEFT_ARROW)){ frogPos.x -= 5;
      if (frogPos.x < 0) frogPos.x = width ; }
  if (keyIsDown(RIGHT_ARROW)) { frogPos.x += 5;
      if (frogPos.x < 0) frogPos.x = width ; }
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

function mouseReleased() {
  switch(state){
    case 0:
      state = 1;
      break;

       case 2: // win state
      state = 0;
      resetTheGame();
      break;

       case 3: //lose state
      state = 0;
      resetTheGame();
      break;

  }
}

function resetTheGame() {
  timer = 0 ;
  cars = [] ;
  // Spawn objects
  for (let i = 0 ; i < maxCars ; i++){
    cars.push(new Car()) ;
  }

}
