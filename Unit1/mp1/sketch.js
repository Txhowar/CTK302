function setup() {
  createCanvas(1520, 749);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
}

function draw() {
  background("#0F044C");

  if (mouseIsPressed) {

    fill("green");
    rect(800, 749, 1800, 20);


    fill("#CA965C");
    rect(1150, 600, 300, 500);
    rect(800, 700, 1, 2000);

    fill("grey");
    rect(1200, 360, 860, 1200);
    //ellipse(387, 187, 100, 100);


    fill("grey");
    rect(1150, 350, 1, 780);
//mc
  //  fill('#8A39E1');
  //  quad(425, 580, 490, 500, 425, 420, 360, 500);

  //  fill('black');
  //  quad(425, 550, 460, 500, 425, 450, 390, 500);

  //  fill('#8A39E1');
    //  quad(500, 740, 450, 550, 400, 550, 350, 740);

    //  fill("black");
    //  rect(425, 645, 1, 190);

      fill('#8A39E1');
    ellipse(660, 580, 150, 325);

    fill('#B667F1');
    ellipse(660, 580, 120, 295);

    fill("#F5EEDC");
    rect(1150, 450, 700, 575);

    fill('#8A39E1');
  ellipse(900, 580, 150, 325);

  fill('#B667F1');
  ellipse(900, 580, 120, 295);
//mc2
  fill('#8A39E1');
  quad(1115, 580, 1180, 500, 1115, 420, 1050, 500);

  fill('black');
  quad(1115, 550, 1150, 500, 1115, 450, 1080, 500);

  fill('#8A39E1');
    quad(1190, 740, 1140, 550, 1090, 550, 1040, 740);

    fill("black");
    rect(1115, 645, 1, 190);

    fill('#ECB390');
  ellipse(1400, 520, 75, 85);

  fill('black');
 arc(1400, 740, 90, 350, PI, TWO_PI);

 fill('black');
arc(1400, 520, 75, 85, PI, TWO_PI);

fill('#CA965C');
ellipse(1445, 650, 70, 80);

triangle(1440, 610, 1420, 595, 1460, 595);

fill('white');
arc(375, 1, 280, 280, PI/0.5, TWO_PI);



fill('#9A0680');
ellipse(1125, 489, 5, 5);

fill('purple');
textSize(16);
text('"As soon as the chosen target catches a glimpse of a portal, it is already too late... "', 850, 312);


  } else {
    // when the mouse isn't pressed!

    //fill("grey");
    //rect(300, 300, 100, 200);

    //fill("grey");
    //rect(600, 300, 100, 200);

    fill("#D9CAB3");
    rect(1200, 360, 860, 1200);


    fill("#CA965C");
    rect(1150, 600, 300, 500);
    fill("black");
    rect(800, 700, 1, 2000);
    //ellipse(387, 187, 100, 100);
    fill("green");
    rect(800, 749, 1800, 20);

    fill("grey");
    rect(1150, 550, 1, 380);
//mc
    fill('#8A39E1');
    quad(425, 580, 490, 500, 425, 420, 360, 500);

    fill('black');
    quad(425, 550, 460, 500, 425, 450, 390, 500);

    fill('#8A39E1');
      quad(500, 740, 450, 550, 400, 550, 350, 740);

      fill("black");
      rect(425, 645, 1, 190);

      fill('#8A39E1');
    ellipse(660, 580, 150, 325);

    fill('#B667F1');
   ellipse(660, 580, 120, 295);

   fill('white');
  arc(375, 1, 280, 280, PI/0.5, TWO_PI);

  fill('purple');
  textSize(24);
  text('"Tele, the Unknown Teleporter"', 270, 255);

  fill('white');
  textSize(16);
  text('"Tele" is the given name of the unknown hero who can seemingly make portals out of thin air.', 80, 315);

  //  fill("#F5EEDC");
  //  rect(1150, 450, 700, 575);

  //  fill('#8A39E1');
//  ellipse(900, 580, 150, 325);

//  fill('#B667F1');
//  ellipse(900, 580, 120, 295);
//mc2
//  fill('#8A39E1');
//  quad(1115, 580, 1180, 500, 1115, 420, 1050, 500);

//  fill('black');
//  quad(1115, 550, 1150, 500, 1115, 450, 1080, 500);

//  fill('#8A39E1');
  //  quad(1190, 740, 1140, 550, 1090, 550, 1040, 740);

  //  fill("black");
  //  rect(1115, 645, 1, 190);

  //  fill('#ECB390');
//  ellipse(1400, 520, 75, 85);

  //fill('black');
 //arc(1400, 740, 90, 350, PI, TWO_PI);

 //fill('black');
//arc(1400, 520, 75, 85, PI, TWO_PI);

//fill('#CA965C');
//ellipse(1445, 650, 70, 80);

//triangle(1440, 610, 1420, 595, 1460, 595);


  }


  // this shows mouse location - comment it out when you're done!
//  textSize(16);
//  fill("yellow");
//  text(mouseX + ", " + mouseY, 40, 40);
//}

// record the mouse location in console when clicked
//function mouseReleased() {
//  print(mouseX + ", " + mouseY);
//}
