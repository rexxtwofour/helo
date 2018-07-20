const express = require('express');
// const session = require('express-session');
const massive = require('massive');
const axios = require('axios');
const bodyParser = require('body-parser');
const control = require('./controller');
const app = express();

require('dotenv').config();


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    reave: false,
    saveUnititialized: false,
    cookie: {
        maxAge: 60 * 60 * 60
    }

}))



















const PORT = 4000;
app.listen(PORT, () => {
    console.log('Server is listening on port' + PORT );
});