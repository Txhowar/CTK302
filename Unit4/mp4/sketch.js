// variables needed for gyroscope
var beta, gamma; // orientation data
var x = 0; // acceleration data
var y = 0;
var z = 0;
var xPosition = 0;
var yPosition = 0;
let cars = []; // declare/intialize an array
let enemies = [];
let duckPos; //variable that contains X and Y
let state = 0;
let timer = 0;
let maxCars = 5;
let maxTimer = 5;
let score = 0;
let debug = true;
let duckSize = 50;
let sizeInc = 0;

// var bunnyImage;
//var cars = [];


function preload() {
  duck = loadImage("assets/1x/duckbird.png");
  font1 = loadFont("assets/1x/boogaloo.ttf");
//  song1 = loadSound("assets/1x/zoned.wav");

  duck = loadImage("assets/1x/duckbird.png");
  worm = loadImage("assets/1x/worm.png");
  snail = loadImage("assets/1x/snail.png");
  roach = loadImage("assets/1x/roach.png");
  raccoon = loadImage("assets/1x/raccoon.png");
  egg1 = loadImage("assets/1x/eggbird.png");
  egg2 = loadImage("assets/1x/eggbird2.png");
  grape = loadImage("assets/1x/grapes.png");
  forest = loadImage("assets/1x/forestbg.png");
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;


  // spawn a bunch of cars
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());

}
  // initialize the frog's position
  duckPos = createVector(width / 2, height - 100);

  // load any images you need
  //bunnyImage = loadImage("assets/bunny.jpg");
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  rotate(90);
  background('#c6f5ff'); // light blue

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -18, 18, 0, width);
  yPosition = map(beta, 25, 45, 0, height);


  // move the frog around the screen
  push(); // before you use translate, rotate, or scale commands, push and then pop after
  translate(xPosition, yPosition); // move everything over by x, y
  //  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

  // draw the FROG
  // image(bunnyImage, 0, 0, 500, 500);
  //fill('green');
  //ellipse(0, 0, 80, 80);
    image(duck, 0, 0, duckSize, duckSize);
  pop();


  // update the frog's position using the accelerometer data
  duckPos.x = xPosition;
  duckPos.y = yPosition;

duckPos.x = mouseX;
duckPos.y = mouseY;

  // iterate through the car loop to move them and see if we need to delete cars
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(duckPos) < 50) {
      cars.splice(i, 1);
    }
  }

  // MORE DECORATIONS - write that pretty ATK type on top.
  fill('white');
  textSize(40);
  textAlign(CENTER);
  text("your words or image here!", width / 2, 600, windowWidth - 200, windowHeight - 200);


  // Debugging information -- take this out when you're ready for production!
  // Just a bunch of text commands to display data coming in from addEventListeners
  textAlign(LEFT);
  textSize(20);
  fill('black');
  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha, 25, 50);
  text("beta: " + beta, 25, 70);
  text("gamma: " + gamma, 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);
  text("x = " + x, 25, 150); // .toFixed means just show (x) decimal places
  text("y = " + y, 25, 170);
  text("z = " + z, 25, 190);


}

function deviceShaken() {
  // re-spawn cars
  cars = []; // clear the array first
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
}


// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});

class Car {
  // constructor and attributes
  constructor(type) {
    this.pos = createVector(random(width), random(height)); // initialize your attributes here
    //this.v = createVector(random(1, 10), random(1, 10));

    this.sizeInc = 0;
    this.image = snail;
    this.type = type;
    switch (this.type) {
      case 0: {
        this.image = snail;
        this.v = createVector(random(1, 2), random(0));
        this.size = random(25, 75);
        //this.sizeInc = this.size/2;
        break;
      }

      case 1:{
        this.image = worm;
        this.v = createVector(random(3, 4), random(0));
        this.size = random(10, 11);
        //this.sizeInc = this.size/4;
        break;
      }

      case 2: {
        this.image = grape;
        this.v = createVector(0,0);
        this.size = random(10, 12);
        //this.sizeInc = this.size/2;
        break;
      }

      case 3:{
        this.image = roach;
        this.v = createVector(random(5, 10), random(0));
        this.size = random(10, 40);
        //this.sizeInc = this.size/2;
        break;
      }

      case 4:{
        this.image = raccoon;
        this.v = createVector(random(10, 15), random(0));
        this.size = random(150, 200);
        //this.sizeInc = this.size/2;
        break;
      }


    }
  }

  // methods

  display() {

    image(this.image, this.pos.x, this.pos.y, this.size, this.size);
    //fill(this.r, this.b, this.g, this.o);
    //rect(this.pos.x, this.pos.y, 75, 25);
    // ellipse(this.pos.x, this.pos.y + 40, 30, 30);
    // ellipse(this.pos.x+70, this.pos.y + 40, 30, 30);
    // textSize(this.size) ;
    //text("bruh", this.pos.x, this.pos.y) ;
  }

  drive() {
    this.pos.add(this.v);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}



// car class!!
function Car1() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.a = random(255); // alpha opacity value for fill!


  // methods
  this.display = function() {

    // maybe use an image here instead!
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x - 50, this.pos.y, 50, 50);
    ellipse(this.pos.x + 50, this.pos.y, 50, 50);
    rect(this.pos.x + 17, this.pos.y - 30, 80, 60);

  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
