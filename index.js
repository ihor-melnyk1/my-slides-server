/* eslint-disable no-console */
import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import userApi from './api/user';
import presentationApi from './api/presentation';

config();

const server = express();
const { PORT, DATABASE_URL } = process.env;

server.use(cors());
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
server.use(bodyParser.json({ limit: '50mb', extended: true }));
server.use('/api/user', userApi);
server.use('/api/presentation', presentationApi);
server.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

const startServer = async () => {
  try {
    await mongoose.connect(DATABASE_URL, { useNewUrlParser: true });
    server.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};

startServer();
