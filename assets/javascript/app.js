
/*creating the game board - pretty simple at this point*/

var gameData = [

    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,1,2,2,2,2,2,1],
    [1,2,1,1,1,2,1,2,1,1,1,2,1],
    [1,2,1,2,2,2,2,2,2,2,1,2,1],
    [1,2,2,2,1,1,5,1,1,2,2,2,1],
    [1,2,1,2,2,2,2,2,2,2,1,2,1],
    [1,2,1,1,2,2,1,2,2,1,1,2,1],
    [1,2,2,2,2,2,1,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1]

  ];
  
  
  const WALL   = 1;
  const COIN   = 2;
  const GROUND = 3;
  const PACMAN = 5;
  
  
  
  var map;
  
  /*starting location of pacman, "0" being first count*/
  var pacman = {
    x: 6,
    y: 4,
    direction: 'right'
  };

// Movement Functions
  function moveDown() {
    pacman.direction = '';
    if (gameData[pacman.y+1][pacman.x] !== WALL) {
      gameData[pacman.y][pacman.x] = GROUND;
      pacman.y = pacman.y + 1 ;
      gameData[pacman.y][pacman.x] = PACMAN;
    }
  }
  
  function moveUp() {
    pacman.direction = '';
    if (gameData[pacman.y-1][pacman.x] !== WALL) {
      gameData[pacman.y][pacman.x] = GROUND;
      pacman.y = pacman.y - 1;
      gameData[pacman.y][pacman.x] = PACMAN;
    }
  }
  
  function moveLeft() {
    pacman.direction = '';
    if (gameData[pacman.y][pacman.x-1] !== WALL) {
      gameData[pacman.y][pacman.x] = GROUND;
      pacman.x = pacman.x - 1 ;
      gameData[pacman.y][pacman.x] = PACMAN;
    }
  }
  
  function moveRight() {
    pacman.direction = '';
    if (gameData[pacman.y][pacman.x+1] !== WALL) {
      gameData[pacman.y][pacman.x] = GROUND;
      pacman.x = pacman.x + 1 ;
      gameData[pacman.y][pacman.x] = PACMAN;
    }
  }
  
 
  function setupKeyboardControls() {
    document.addEventListener('keydown', function (e) {
  
      
      if (e.keyCode === 37) {         // left arrow is 37
        moveLeft();
  
      } else if (e.keyCode === 38) {  // up arrow is 38
        moveUp();
  
      } else if (e.keyCode === 39){   // right arrow is 39
        moveRight();
  
      } else if (e.keyCode === 40){   // down arrow is 40
        moveDown();
      }
  
      // After every move, we erase the map and redraw it.
      eraseMap();
      drawMap();
    });
  }
  
  
  function main() {
    drawMap();
    setupKeyboardControls();
  }
  
  main();
  