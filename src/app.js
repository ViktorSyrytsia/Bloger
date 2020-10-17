const express = require('express');
const erv = require('express-react-views')

const router = require('./routes')

const app = express()
const options = { beautify: true, doctype: "<!DOCTYPE html>" };

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', erv.createEngine(options));

app.get('/', router.index);

module.exports = app