const express = require('express');
const erv = require('express-react-views');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const sessions = require('express-session');
const connectRedis = require('connect-redis');
const ioredis = require('ioredis');

const authRouter = require('./routes/auth.routes');
const postRouter = require('./routes/post.routes');

const redisStore = connectRedis(sessions);
const redis = new ioredis();

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(sessions({
  secret: 'secret',
  name: 'qid',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  store: new redisStore({
    host: 'localhost',
    port: 6379,
    client: redis,
    ttl: 86400
  }),
}));

const options = { beautify: true, doctype: '<!DOCTYPE html>' };

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', erv.createEngine(options));

app.use('/auth', authRouter);
app.use('/posts', postRouter);

module.exports = app;
