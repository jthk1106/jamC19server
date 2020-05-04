require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json('HELLO slash')
})

app.get('/contact', (req, res) => {
    res.json('CONTACT slash')
})

module.exports = app;