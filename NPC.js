class NPC extends GameObject {
  constructor(id, x, y, avatar, name, description, acceptEvent) {
    super(id, x, y, description); // call the super class constructor and pass in the name parameter
    this.avatar = avatar;
    this.name = name;
    this.acceptEvent = acceptEvent;
  }

  displayEvent() {
    this.displayDescription();
    this.displayAvatar();
    this.displayButton();
  }

  displayAvatar() {
    if(document.getElementById('eventImage')) {
      var characterDOM = document.getElementById('eventImage');
      characterDOM.parentNode.removeChild(characterDOM);
    }
    var element = document.createElement('img');
    element.id = 'eventImage';
    element.src  = this.avatar;
    document.getElementById('eventWindow').appendChild(element);
  }

  displayButton() {
    var element = document.createElement('button');
    element.id = 'eventButton';
    element.innerHTML = 'Accept';
    element.addEventListener ("click", () => {
      console.log(this)
      this.acceptEvent();
    });
    document.getElementById('eventWindow').appendChild(element);
  }
}