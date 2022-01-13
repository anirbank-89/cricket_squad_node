import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import logger from 'morgan';

import indexRoute from './routes/index.js';
dotenv.config();

var app = express();
app.use(cors())
mongoose.connect(process.env.MONGOURL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connected to database!");
    })
    .catch(err => {
        console.error("Failed to connect to db due to ", err.message);
    });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}`);
});

export default app;