import express from 'express';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import router from './routes/route.js';
dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const app = express();
const PORT = 8000;
app.use('/',router);
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

Connection(username, password);