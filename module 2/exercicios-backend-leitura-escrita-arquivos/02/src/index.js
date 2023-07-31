import express from 'express';
import rotas from './route/route.mjs';

const app = express();

app.use(express.json());
app.use(rotas);

app.listen(3000);