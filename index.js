
(function() {

  const size = 5;
  const map = new Map(size);

  // var titles = 9;
  var blankTitle = 9;
  var startPosition = 10;
  var titleSize = 100; // 100 x 100 rectangle
  var currentRowPosition = 0;
  var currentColumnPosition = 0;
  var puzzleName = "board";


  var gameMap = map.get();
  var rows = gameMap.length + 1;
  var columns = gameMap.length;
  var titles = size*size;
  const character = new Character(gameMap);
  const newEvent = new GameEvent();

  
  console.log(gameMap);
  function start() {
    setNPC();
    renderBoard();
    character.render(); 
  }

  const setNPCEvents = () => {
    console.log('PLIXZZ');
    gameMap[1][3] = [new GameEvent(gameMap[1][3][0].id, 2, 0, '1 Dragon')];
    gameMap[2][3] = [new GameEvent(gameMap[2][3][0].id, 2, 0, '2 Dragon')];
    gameMap[3][3] = [new GameEvent(gameMap[3][3][0].id, 2, 0, '3 Dragon')];
    renderBoard();
  }

  function setNPC() {

    gameMap[2][0] = [new NPC(gameMap[2][0][0].id, 2, 0, './dragon.svg', 'Sir Dragon', 'DRAGON OCCURED', setNPCEvents)];
  }


  function renderBoard() {
    for (var i = 1; i <= titles; i++) {
      var titleNumber = gameMap[currentRowPosition][currentColumnPosition][0].id + 1;
      if(i==1){
        var element = document.createElement('div');
        element.id = 'block'+titleNumber;
        element.classList.add('block');
        // element.innerHTML = titleNumber
        // var child = '<div id="block'+titleNumber+'" class="block" >'+titleNumber+'</div>';
        document.getElementById(puzzleName).appendChild(element);
        currentColumnPosition++;
      }
      else{
        var x = startPosition + currentColumnPosition * titleSize;
        var y = startPosition + currentRowPosition * titleSize;
        var element = document.createElement('div');
        element.id = 'block'+titleNumber;
        element.classList.add('block');
        // element.innerHTML = titleNumber;
        element.style.cssText = "left:"+x+"; top:"+y; 
        // var child = '<div id="block'+titleNumber+'" class="block" style="left:'+x+'; top:'+y+';" >'+titleNumber+'</div>';
        document.getElementById(puzzleName).appendChild(element);
  
        currentColumnPosition++;
        if((i % columns) == 0) {
          currentRowPosition++;
          currentColumnPosition = 0;
        }
      }
    }
    currentRowPosition = 0;
    currentColumnPosition = 0;
    uniqueRandoms = [];
  }

  
  function checkEvent(position) {
    const currentEvent = gameMap[character.position.y][character.position.x][0];
    console.log(currentEvent);
    currentEvent.displayEvent();
  }

  function cleanEventBoard() {
    var myNode = document.getElementById("eventWindow");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  }
  // MOVEMENT LISTENERS
  window.addEventListener('keydown', function (e) {
    cleanEventBoard();
    const arrow = {left: 37, up: 38, right: 39, down: 40 };

    switch (e.keyCode) {
      case arrow.left:
        character.moveLeft();
      break;
      case arrow.up:
        character.moveUp();
      break;
      case arrow.right:
        character.moveRight();
      break;
      case arrow.down:
        character.moveDown();
      break;
    }
    character.render();
    checkEvent(character.position);
  });

  start();
})();