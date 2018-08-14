class GameObject {
  constructor(id, x, y, description) {
    this.triggerPosition = { x, y };
    this.description = description || '';
    this.id = id;
  }

  nextState(character) {
    return character.hp++;
  }

  displayDescription() {
    if(document.getElementById('event')) {
      var characterDOM = document.getElementById('event');
      characterDOM.parentNode.removeChild(characterDOM);
    }
    var element = document.createElement('div');
    element.id = 'event';
    element.innerHTML = this.description;
    document.getElementById('eventWindow').appendChild(element);
  }
}