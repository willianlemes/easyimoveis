import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from './routes';
import AppError from './errors/AppError';

import createConnection from './database';

createConnection();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(
  (err: Error, _request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      const { statusCode, message } = err;

      return response.status(statusCode).json({
        status: 'error',
        message
      });
    }

    console.error(err);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  }
);

export default app;
