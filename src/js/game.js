export default class Game {
  constructor(timeId) {
    this.gameDead = document.getElementById("dead");
    this.gameLost = document.getElementById("lost");
    this.elem = undefined;
    this.victory = 0;
    this.exit = 0;
    this.timeId = timeId;
  }
    
  handler() {
    this.elem = this.classList.contains("hole_has-mole");
    if (this.elem) {
      this.victory = this.victory + 1;
      this.gameDead.textContent = this.victory;
      if (victory === 10) {
        clearInterval(timeId);
        alert("Вы победили!");
        this.victory = 0;
        this.exit = 0;
        this.gameDead.textContent = 0;
        this.gameLost.textContent = 0;
      }
    } else {
      this.exit = this.exit + 1;
      this.gameLost.textContent = this.exit;
      if (this.exit === 5) {
        clearInterval(this.timeId);
        alert("Вы проиграли!");
        this.victory = 0;
        this.exit = 0;
        this.gameDead.textContent = 0;
        this.gameLost.textContent = 0;
      }
    }
  }
}
