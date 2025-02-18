import Game from "./game";

export default class Goblin {
  constructor() {
    this.holeGame = document.querySelectorAll('.hole');
    this.a = 0;
    this.b = 0;
    this.timeId = undefined;
    this.game = new Game(0);
  }

  numbers_cells() {
    this._holeGame[this.a].classList.remove("hole_has-mole");
    while (this._a === this._b) {
      this._a = Math.floor(Math.random() * this._holeGame.length);
    }
    if (this.game.fail === 5) {
      clearInterval(this.timeId);
      alert("Вы проиграли!");
      this.game.victory = 0;
      this.game.exit = 0;
      this.game.gameDead.textContent = 0;
      this.game.gameLost.textContent = 0;
    } else {
      this.game.fail = this.game.fail + 1;
    }
    this._b = this._a;
    this._holeGame[this.b].classList.add("hole_has-mole");
  }
}