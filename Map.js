const GAME_PHASES = {
  precheck: 'precheck',
  basic: 'basic',
  after: 'after',
}
class Map {
  constructor(size) {
    this.size = size;
    this.gamePhases = [GAME_PHASES.precheck, GAME_PHASES.basic, GAME_PHASES.after];
    this.currentPhase = GAME_PHASES.precheck;
  }

  get() {
    var arr = Array.apply(null, Array(this.size));
    return arr.map((x, i) => {
      return Array.apply(null, Array(this.size)).map((x, ii) => {
        // so our GameEvent have ids from 0...size number
        // [0,1]
        // [2,3]
        const uniqueId = i * this.size + ii;
        return [new GameEvent(uniqueId, i, ii)];
      });
    });
  }
}