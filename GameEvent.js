class GameEvent extends GameObject {
  constructor(id, x, y, description) {
    super(id, x, y, description); // call the super class constructor and pass in the name parameter
  }

  displayEvent() {
    this.displayDescription();
  }
}