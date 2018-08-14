class Character {
  constructor(gameMap) {
    this.hp = 100;
    this.exp = 0;
    this.position = { x: 0, y: 0 };
    this.level = 0;
    this.inventory = [];
    this.gameMap = gameMap;
  }

  render() {
    if(document.getElementById('character')) {
      var characterDOM = document.getElementById('character');
      characterDOM.parentNode.removeChild(characterDOM);
    }
    var element = document.createElement('div');
    element.id = 'character';
    element.innerHTML = 'CHARACTER';
    const id = this.gameMap[this.position.y][this.position.x][0].id + 1;
    document.getElementById('block'+id).appendChild(element);
  }

  moveRight() {
    this.position.x++;
  }

  moveLeft() {
    this.position.x--;
  }

  moveUp() {
    this.position.y--;
  }

  moveDown() {
    this.position.y++;
  }
}