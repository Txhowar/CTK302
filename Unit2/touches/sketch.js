let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("PASSWORD DENIED, PLACE HAND HERE", 5, 22) ;
      break ;

      case 1:
       text("FINGERPRINT DETECTED, 4 MORE REQUIRED", 5, 22) ;
      // put a picture here
      break ;

      case 2:
      text("2 FINGERPRINTS DETECTED, 3 MORE REQUIRED", 5, 22) ;
            // put a picture here
      break ;

      case 3:
     text("3 FINGERPRINTS DETECTED, 2 MORE REQUIRED", 5, 22) ;
            // put a picture here
      break ;


  }

}
