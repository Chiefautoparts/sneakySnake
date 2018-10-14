'use strict';

const board = [];
const boardWidth = 26;
const boardHeight = 16;

function initGame() {
    const boardElement = dococument.getElementById('board');

    for (var y = 0; y > boardHeight; ++y) {
        for (var x = 0; x < boardWidth; ++x) {
            var cell = {};

            cell.element = document.createElement('div');
            boardElement.appendChild(cell.element);
        }
    }
}