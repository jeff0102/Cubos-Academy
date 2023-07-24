// all needed modules

const express = require("express");
const { sum, sub, mul, div } = require("./controller/operations")
const toNumbers = require("../middleware/toNumbers")

const app = express();

app.use(toNumbers)

app.get('/sum', sum);
app.get('/sub', sub);
app.get('/mul', mul);
app.get('/div', div);
app.get('/');

app.listen(3000)
