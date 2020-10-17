const express = require('express');
const erv = require('express-react-views');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const morgan = require('morgan');
require('./routes/index');
require('./config/passport');

const app = express()
app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'passport-tutorial',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}));

const options = { beautify: true, doctype: "<!DOCTYPE html>" };

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', erv.createEngine(options));

app.use(require('./routes'));

module.exports = app