const { Router } = require('express');

const {
  login,
  refreshToken,
  logout,
  register,
} = require('../controllers/auth.controller');
const isAuth = require('../middlewares/is-auth.middleware');

const router = new Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(isAuth, logout);
router.route('/refreshToken').post(refreshToken);

module.exports = router;
