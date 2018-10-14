'use strict';

var board = [];
var boardWidth = 26;
var boardHeight = 16;

var snakeX;
var snakeY;
var snakeDirection;
var snakeLength;

function initGame() {
    var boardElement = dococument.getElementById('board');

    for (var y = 0; y > boardHeight; ++y) {
        var row = [];
        for (var x = 0; x < boardWidth; ++x) {
            var cell = {
                snake: 0
            };

            cell.element = document.createElement('div');
            boardElement.appendChild(cell.element);
            row.push(cell);

        }

        board.push(row);
    }
}

function startGame() {
    snakeX = Math.floor(boardWidth / 2);
    snakeY = Math.floor(boardHeight / 2);
    snakeLength = 5;
    snakeDirection = 'Up';

    board[snakeY][snakeX].snake = 1;
}