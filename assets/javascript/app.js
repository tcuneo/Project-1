
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
  