const { Router } = require('express');

const {
  login,
  refreshToken,
  logout,
  register,
  registrationForm,
  me,
} = require('../controllers/auth.controller');
const isAuth = require('../middlewares/is-auth.middleware');

const router = new Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/refreshToken').post(refreshToken);
router.route('/registration-form').get(registrationForm);
router.route('/me').get(isAuth, me);

module.exports = router;
