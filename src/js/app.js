import Goblin from "./goblin";
import Game from "./game";

const button = document.getElementById("btn");
const holeGame = document.querySelectorAll(".hole");

let i = 0;
let game = new Game(0);
let goblin = new Goblin();
let timeId = undefined;

button.addEventListener("click", handler1);

function handler1() {
    time();
    timeId = setInterval(goblin.numbers_cells, 1000);
    game.timeId = timeId;
    goblin.timeId = timeId;
}

function time() {
    for (i; i < holeGame.length; i++) {
        holeGame[i].addEventListener("click", game.handler);
    }
}