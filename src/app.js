const express = require('express');
const erv = require('express-react-views');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const authController = require('./controllers/auth.controller');
const { me } = require('./helpers/get-user-from-token');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const options = { beautify: true, doctype: '<!DOCTYPE html>' };

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', erv.createEngine(options));

app.post('/login', authController.login);
app.post('/register', authController.register);
app.get('/logout', me, authController.logout);

module.exports = app;
