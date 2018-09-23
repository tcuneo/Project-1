$(document).ready(function() {
  
  
  
  
  var backgroundDog = "";

  /*creating the game board - pretty simple at this point*/

  var gameData = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 1, 2, 1],
    [1, 2, 1, 2, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 2, 1],
    [1, 2, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 1],
    [1, 2, 1, 2, 1, 1, 2, 2, 2, 2, 5, 2, 2, 2, 2, 1, 1, 2, 1, 2, 1],
    [1, 2, 1, 2, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 2, 1, 2, 1],
    [1, 2, 1, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];

  const WALL = 1;
  const COIN = 2;
  const GROUND = 3;
  const PACMAN = 5;

  var map;

  /*starting location of pacman, "0" being first count*/
  var pacman = {
    x: 10,
    y: 8,
    score: 0,
    direction: "right"
  };

  /*js for user adding new image for PacDog*/
  document.getElementById("upload-file").addEventListener("change", function() {
    var file;
    var destination = $(".pacman");

    for (var x = 0, xlen = this.files.length; x < xlen; x++) {
      file = this.files[x];
      if (file.type.indexOf("image") != -1) {
        var reader = new FileReader();

        reader.onload = function(e) {
          var img = new Image(50, 50);
          img.src = e.target.result;
          backgroundDog = img;
          destination.append(img);
        };

        reader.readAsDataURL(file);
      }
    }
  });
  /*end of js for user adding new image for PacDog*/

  function createTiles(data) {
    // We'll keep the DOM elements in an array.
    var tilesArray = [];

    // var's take one row at a time...
    for (var row of data) {
      // Then look at each column in that row.
      for (var col of row) {
        // We create a game tile as a div element.
        var tile = document.createElement("div");

        // We assign every tile the class name tile.
        tile.classList.add("tile");

        // Now, depending on the numerical value,
        // we need to add a more specific class.
        if (col === WALL) {
          tile.classList.add("wall");
        } else if (col === COIN) {
          tile.classList.add("coin");
        } else if (col === GROUND) {
          tile.classList.add("ground");
        } else if (col === PACMAN) {
          tile.classList.add("pacman");

          // For Pacman, we will add yet another
          // class for the direction pacman is facing.
          tile.classList.add(pacman.direction);
        }

        // Now that our individual tile is configured,
        // we add it to the tilesArray.
        tilesArray.push(tile);
      }

      // Once we reach the end of a row, we create a br element,
      // which tells the browser to create a line break on the page.
      var brTile = document.createElement("br");

      // We then add that br element to the tilesArray.
      tilesArray.push(brTile);
    }

    // At the end of our function, we return the array
    // of configured tiles.
    return tilesArray;
  }

  // This function creates a map element, fills it with tiles,
  // and adds it to the page.
  function drawMap() {
    map = document.createElement("div");

    var tiles = createTiles(gameData);
    for (var tile of tiles) {
      map.appendChild(tile);
    }

    document.body.appendChild(map);
  }

  // This function removes the map element from the page.
  function eraseMap() {
    document.body.removeChild(map);
  }

  // Movement Functions
  function movePacman(direction) {
    pacman.direction = direction;
    var x = pacman.x;
    var y = pacman.y;
    // Update coordinate for next move
    if (direction === "down") {
      y += 1;
    } else if (direction === "left") {
      x -= 1;
    } else if (direction === "right") {
      x += 1;
    } else if (direction === "up") {
      y -= 1;
    }
    // if next move is on a WALL
    if (gameData[y][x] !== WALL) {
      // if next move is on a COIN
      if (gameData[y][x] === COIN) {
        console.log("NOM NOM");
        pacman.score += 5;
        console.log(pacman.score);
        $("#highscore-div").html("Highscore: " + pacman.score);

      }

      // sets the previous position to GROUND
      gameData[pacman.y][pacman.x] = GROUND;
      pacman.x = x;
      pacman.y = y;
      gameData[y][x] = PACMAN;
    }
  }

  function nomCount() {}

  function setupKeyboardControls() {
    document.addEventListener('keydown', function (e) {
      event.preventDefault();
      
      if (e.keyCode === 37) {         // left arrow is 37
        movePacman('left');
  
      } else if (e.keyCode === 38) {  // up arrow is 38
        movePacman('up');
  
      } else if (e.keyCode === 39){   // right arrow is 39
        movePacman('right');
  
      } else if (e.keyCode === 40){   // down arrow is 40
        movePacman('down');

      }

      // After every move, we erase the map and redraw it.
      eraseMap();
      drawMap();

      $(".pacman").append(backgroundDog);
    });
  }




  //new code for timer 
  var timer;
  

 var game = {

  counter: 5,

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#timer").prepend("<h2>Time Remaining: <span id='counter-number'>5</span> s</h2>");

    $("#start").remove();


  },

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      clearInterval(timer);
       $("#timer").html("Game Over!"); 

      // game.done();
       
    console.log("TIME UP");
    }
  },


  //  stopinterval: function(){


  
  //   return false;
  // }

  result: function() {
    $("#timer h2").remove();

  }


};


  function main() {

    drawMap();
    setupKeyboardControls();
  }

  main();


  
// ON CLICK START EVENTS

$(document).on("click", "#start", function() {
 
 
  game.start();



});


  

});
