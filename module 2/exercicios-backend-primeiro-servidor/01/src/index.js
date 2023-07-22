const express = require("express");

const server = express();

const players = ["José", "Maria", "João", "Marcos", "Fernanda"];
let currentPlayerPosition = 0;

const playersTurn = (players) => {
    let currentPlayer = players[currentPlayerPosition];
    currentPlayerPosition = (currentPlayerPosition + 1) % players.length;
    return currentPlayer;
};

server.get('/', (req, res) => {
    let currentPlayer = playersTurn(players)
    res.send(`É a vez de ${currentPlayer} jogar!`);
});

server.listen(3000, () => {
    console.log("current player send");
});