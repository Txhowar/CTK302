let cars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rocket = loadImage("assets/rocket.png");
//  for (let i = 0; i < 20; i++) {
  //  cars.push(new Car());
//  }
  // Spawn one object
noStroke();
  angleMode(DEGREES);
}

function draw() {
  //rotate(90);
  background('white');
    image(rocket, 500, 200, 300, 300);
cars.push(new Car());
  for (let i = 0; i < cars.length; i++) {

    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0){
      cars.splice(i, 1);
    }
  }


//  fill('white');
//  text(myCar.x, 100, 100);

}




class Car {

  // constructor
  constructor() {
    this.pos = createVector(650, 410); // initialize your attributes here
    this.vel = createVector(random(10), random(10));
    this.r = random(255, 0, 0);
    this.g = random(165, 42, 42);
    this.b = random(145, 56, 49);
    this.a = random(255, 68, 51);
    this.s = random(5, 20);
  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.a, this.s);
    ellipse(this.pos.x, this.pos.y, this.s);
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5;
  }

}
