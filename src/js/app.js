'use strict';


import { Game } from "./game.js";
//import Goblin from "./goblin.js";

const holeGame = document.getElementById("hole");
//const has_hole = document.querySelector('.hole_has-mole');
const gameDead = document.getElementById('dead');
const gameLost = document.getElementById('lost');
const button = document.getElementById('btn');

let elem;
let victory = 0;
let exit = 0;
const a = new Game;


document.title = 12345;
document.title = a._activeHole;

function time() {
    for (i=0; i<holeGame.length; i++) {
        holeGame[i].addEventListener('click', handler);
    }
}

//button.addEventListener('click', handler1);

function handler1 () {
    //let b = new Goblin;
    //let a = new Game;
    let c;
    //c = a.random(b._cell);
    alert("11c");
}

function handler() {
    document.title = this.classList.contains('hole_has-mole');
    elem = this.classList.contains('hole_has-mole');
    if (elem) {
        victory = victory + 1;
        gameDead.textContent = victory;
        if (victory == 10) {
            alert('Вы победили!');
            victory = 0;
            exit = 0;
            gameDead.textContent = 0;
            gameLost.textContent = 0;
        }
    } else {
        exit = exit + 1;
        gameLost.textContent = exit;
        if (exit == 5) {
            alert('Вы проиграли!');
            victory = 0;
            exit = 0;
            gameDead.textContent = 0;
            gameLost.textContent = 0;
        }
    }   
}

//setTimeout(handler1, 2000);
//setTimeout(time, 100);
