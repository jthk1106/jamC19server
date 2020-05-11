require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json('HELLO slash')
})

app.post('/contact', (req, res) => {
    const msg = {
        to: 'thk116@gmail.com',
        from: 'jthk1106@gmail.com',
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg)
        .then(res => console.log('the RES: ', res))
        .catch(err => console.log('the ERR: ', err))

    res.json('email sent')
})

module.exports = app;