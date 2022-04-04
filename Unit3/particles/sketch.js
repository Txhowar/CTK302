let cars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
//  for (let i = 0; i < 20; i++) {
  //  cars.push(new Car());
//  }
  // Spawn one object
noStroke();

}

function draw() {
  background(100);
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
    this.pos = createVector(100, 100); // initialize your attributes here
    this.vel = createVector(random(10), random(10));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(200, 255);
    this.s = random(5, 20);
  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.a, this.s);
    ellipse(this.pos.x, this.pos.y, 20);
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5;
  }

}
