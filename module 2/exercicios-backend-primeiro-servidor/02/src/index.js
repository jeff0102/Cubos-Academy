const { time } = require("console");
const express = require("express");
const server = express();

let timerPause = true;
let timerMinutes = 0;
let timerSeconds = 0;

const timerTickMinutes = (timerMinutes) => {
    timerMinutes += 1;
    return timerMinutes;
};

const timerTickSeconds = (timerSeconds) => {
    timerSeconds += 1;
    return timerSeconds;
};

const timerTickShow = () => {
    if (!timerPause) {
        timerSeconds = timerTickSeconds(timerSeconds);

        if (timerSeconds === 60) {
            timerSeconds = 0;
            timerMinutes = timerTickMinutes(timerMinutes);
        }
    }
};

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
};

// Timer tick interval: update timer every second (1000 milliseconds)
setInterval(timerTickShow, 1000);

server.get('/', (req, res) => {
    const formatMinutes = formatTime(timerMinutes);
    const formatSeconds = formatTime(timerSeconds);
    res.send(`Timer: ${formatMinutes} minutes ${formatSeconds} seconds`);
});

server.listen(8000, () => {
    console.log("Server started on http://localhost:8000");
});

server.get('/start', (req, res) => {
    timerPause = false;
    res.send(`Timer iniciated`);
});

server.get('/pause', (req, res) => {
    timerPause = true;
    res.send(`Timer paused`);
});

server.get('/continue', (req, res) => {
    timerPause = false;
    res.send(`Timer continue`);
});

server.get('/reset', (req, res) => {
    timerMinutes = 0;
    timerSeconds = 0;
    res.send(`Timer reset`);
});

