const express = require('express');
const auth = require('./middleware/authentication')
const routes = require('./route/route');

const app = express();

app.use(auth);
app.use(express.json());

app.use(routes);

app.listen(3000);