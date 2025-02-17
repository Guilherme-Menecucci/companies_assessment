import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from './routes';
import handleErrors from './middlewares/handleErrors';

import '@shared/container';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.use(handleErrors);

app.listen(3333, () => {
  console.log(`🚀 Server started @ 3333`);
});
