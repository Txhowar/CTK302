var bubbles = [];
let url = "https://docs.google.com/spreadsheets/d/14D7f_t6BulWL-02Y2aU1VCbY_TgUJ0PaeB7kMP8WMxA/edit?usp=sharing";

function setup() {
  //let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet
let key = "14D7f_t6BulWL-02Y2aU1VCbY_TgUJ0PaeB7kMP8WMxA";
  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["Which do you prefer to eat?"],
        data[i]["Favorite Pokemon?"],
        data[i]["What is 2 + 3?"])); // THESE NEED TO MATCH SPREADSHEET

  }
}

function draw() {
  background("blue");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(eat, pokemon, math) {
    // only the order of these parameters matters!
    this.eat = eat;
    this.pokemon = pokemon;
    this.math = math;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("red");
    noFill();
  //  if (this.animal == "rat") image(rat, this.pos.x, this,pos.y);
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("white");
    text(
      this.eat + "\n" + this.pokemon + "\n" + this.math,
      this.pos.x,
      this.pos.y
    );

    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
  }


}
