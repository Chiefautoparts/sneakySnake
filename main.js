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
            var cell = {};

            cell.element = document.createElement('div');
            boardElement.appendChild(cell.element);
            row.push(cell);

        }

        board.push(row);
    }
    startGame();
    gameLoop();
}

function placeApple() {
    var appleX = Math.floor(Math.random() * boardWidth);
    var appleY = Math.floor(Math.random() * boardHeight);

    board[appleY][appleX].apple = 1;
}

function startGame() {
    snakeX = Math.floor(boardWidth / 2);
    snakeY = Math.floor(boardHeight / 2);
    snakeLength = 5;
    snakeDirection = 'Up';

    for (var y = 0; y < boardHeight; ++y) {
        for (var x = 0; x < boardWidth; ++X) {
            board[y][x].snake = 0;
            board[y][x].apple = 0;
        }
    }

    board[snakeY][snakeX].snake = snakeLength;

    placeApple();
}

function gameLoop() {

    switch (snakeDirection) {
        case 'Up':
            snakeY--;
            break;
        case 'Down':
            snakeY++;
            break;
        case 'Left':
            snakeX--;
            break;
        case 'Right':
            snakeX++;
            break;
    }

    if (snakeX < 0 || snakeY < 0 || snakeX >= boardWidth || snakeY >= boardHeight) {
        startGame();
    }

    if (board[snakeY][snakeX].snake > 0) {
        startGame();
    }

    if (board[snakeY][snakeX].apple === 1) {
        snakeLength++;
        board[snakeY][snakeX].apple = 0;
        placeApple();
    }

    for (var y = 0; y < boardHeight; ++y) {
        for (var x = 0; x < boardWidth; ++x) {
            var cell = board[y][x];

            if (cell.snake) {
                cell.element.className = 'snake';
            } else {
                cell.element.className = '';
            }
        }
    }



    board[snakeY][snakeX].snake = 1;
    setTimeout(gameLoop, 1000);
}