import Game from "./game";

export default class Goblin {
  constructor(timeId) {
    this.holeGame = document.querySelectorAll('.hole');
    this._a = 0;
    this._b = 0;
    this.timeId = timeId;
    this.game = new Game(0);
    this.fail = 0;
  }

  numbers_cells() {
    this.holeGame[this._a].classList.remove("hole_has-mole");
    while (this._a === this._b) {
      this._a = Math.floor(Math.random() * 4);
    }
    
    if (this.fail === 5) {
      clearInterval(this.timeId);
      alert("Вы проиграли!");
      this.holeGame[this._a].classList.remove("hole_has-mole");
      this.game.victory = 0;
      this.fail = 0;
      this.game.gameDead.textContent = 0;
      this.game.gameLost.textContent = 0;
    } else {
      if (globalFail) {

      } else {
        this.fail = this.fail + 1;
      }
    }
    this._b = this._a;
    this.holeGame[this._b].classList.add("hole_has-mole");
  }
}