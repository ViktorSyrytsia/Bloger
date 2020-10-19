const express = require('express');
const erv = require('express-react-views');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const authRouter = require('./routes/auth.routes');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const options = { beautify: true, doctype: '<!DOCTYPE html>' };

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', erv.createEngine(options));

app.use('/auth', authRouter);

module.exports = app;
