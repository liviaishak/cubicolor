/*
 * Each object of the square holds the time it was
 * changed in color and the ID to reference in index.html
 */
class Square {
  /*
   * Initiate all of the variable of class square
   * And change the color
   */
  constructor(identification) {
    this.color = '#FFFFFF'; // default to white
    this.id = identification;
    this.time = 0;
  }

  /*
   * Check if the square has changed in color in the past 2 seconds
   */
  ifMoreThanTwoSeconds() {

    var currentTime = Date.now();
    if((currentTime - this.time) >= 2) {
      return true;
      this.time = currentTime;
    }

    return false;
  }

  /*
   * Set Random Colors
   */
  setColor() {

      // This is the possible combinations of colors to choose from
      var x = '0123456789ABCDEF';
      // This is the first char should be
      var y = '#';

      for(var i = 0; i < 6; i++) {
         // Generate a random color here
         y = y + x[Math.round(Math.random()*15)];
      }

      // Initialize the time to current time if time == 0
      if(this.time == 0) {
        this.time = Date.now();
        document.getElementById(this.id).style.backgroundColor = y;
        return;
      }

      // Change color starts here
      if(this.ifMoreThanTwoSeconds()) {
        document.getElementById(this.id).style.backgroundColor = y;
      }
  }
}

/*
 * This main will initiate all of the corresponding squares
 * with an object of Class Square
 */
 var square1 = new Square("1");
 var square2 = new Square("2");
 var square3 = new Square("3");
 var square4 = new Square("4");
 var square5 = new Square("5");
 var square6 = new Square("6");
 var square7 = new Square("7");
 var square8 = new Square("8");
 var square9 = new Square("9");
 var square10 = new Square("10");
 var square11 = new Square("11");
 var square12 = new Square("12");
 var square13 = new Square("13");
 var square14 = new Square("14");
 var square15 = new Square("15");
 var square16 = new Square("16");

 // Store the squares in an array to get index
 var squares = [square1, square2, square3, square4, square5, square6,
                      square7, square8, square9, square10, square11, square12,
                      square13, square14, square15, square16 ];

 // Generate a random number to select a random square
function selectOneSquareAndChangeColor() {
  var randomNum = Math.floor(1 + Math.random() * 16);
  var referenceSquare = squares[randomNum-1];
  referenceSquare.setColor();
}

/*
 * Main calling functions here
 */
var test = setInterval(function(){selectOneSquareAndChangeColor()}, 250);
