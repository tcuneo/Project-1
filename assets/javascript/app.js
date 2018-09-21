
/*creating the game board - pretty simple at this point*/

var gameData = [

    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,1],
    [1,2,1,1,2,1,2,2,2,1,2,1,2,2,2,1,2,1,1,2,1],
    [1,2,1,2,2,1,2,1,1,1,2,1,1,1,2,1,2,2,1,2,1],
    [1,2,1,2,1,1,2,2,2,2,2,2,2,2,2,1,1,2,1,2,1],
    [1,2,2,2,2,1,2,1,1,1,2,1,1,1,2,1,2,2,2,2,1],
    [1,2,1,1,2,2,2,1,2,2,2,2,2,1,2,2,2,1,1,2,1],
    [1,2,2,2,2,1,2,1,1,1,1,1,1,1,2,1,2,2,2,2,1],
    [1,2,1,2,1,1,2,2,2,2,5,2,2,2,2,1,1,2,1,2,1],
    [1,2,1,2,2,1,2,1,1,1,2,1,1,1,2,1,2,2,1,2,1],
    [1,2,1,1,2,1,2,2,2,1,2,1,2,2,2,1,2,1,1,2,1],
    [1,2,2,2,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

  ];


  const WALL   = 1;
  const COIN   = 2;
  const GROUND = 3;
  const PACMAN = 5;
    
  var map;
  
  /*starting location of pacman, "0" being first count*/
  var pacman = {
<<<<<<< HEAD
    x: 6,
    y: 4,
    direction: 'right',
    score: 0,
=======
    x: 10,
    y: 8,
    direction: 'right'
>>>>>>> 7bc2f9aae88574ba62f8f96a376d55450df18a9c
  };

  function createTiles(data) {

    // We'll keep the DOM elements in an array.
    var tilesArray = [];
  
    // var's take one row at a time...
    for (var row of data) {
  
    // Then look at each column in that row.
    for (var col of row) {

      // We create a game tile as a div element.
      var tile = document.createElement('div');

      // We assign every tile the class name tile.
      tile.classList.add('tile');

      // Now, depending on the numerical value,
      // we need to add a more specific class.
      if (col === WALL) {
        tile.classList.add('wall');

      } else if (col === COIN) {
        tile.classList.add('coin');

      } else if (col === GROUND) {
        tile.classList.add('ground');

      } else if (col === PACMAN) {
        tile.classList.add('pacman');

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
    var brTile = document.createElement('br');

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
    map = document.createElement('div');
    score = document.createElement('p');
    score.innerHTML = "Score: <span class='score'>0</span>";
    

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
    pacman.direction = direction
    var x = pacman.x;
    var y = pacman.y;
// Update coordinate for next move
    if (direction === 'down'){
      y += 1;  
    } else if (direction === 'left'){
      x -= 1;
    } else if (direction === 'right'){
      x += 1;
    } else if (direction === 'up'){
      y -= 1;
    }
    // if next move is on a WALL
    if (gameData[y][x] !== WALL) {   
      // if next move is on a COIN
      if (gameData[y][x] === COIN) {
        console.log('NOM NOM');
        pacman.score +=5;
        console.log(pacman.score);
        
      }

      // sets the previous position to GROUND
      gameData[pacman.y][pacman.x] = GROUND;
      pacman.x = x;
      pacman.y = y;
      gameData[y][x] = PACMAN;
    }
  }


  function nomCount(){
    
  }

  function setupKeyboardControls() {
    document.addEventListener('keydown', function (e) {
  
      
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
    });
  }
  
  
  function main() {
    drawMap();
    setupKeyboardControls();
  }
  
  main();
  