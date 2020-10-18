const { NOT_FOUND, UNAUTHORIZED, OK, INTERNAL_SERVER_ERROR, BAD_REQUEST } = require('http-status-codes');

const { UserModel } = require('../models');
const { fail, success } = require('../helpers/http-response');
const HttpError = require('../helpers/http-error');
const userModel = require('../models/user.model');

const register = async (req, res) => {
  try {
    const user = req.body;
    if (!user.email) {
      throw new HttpError(BAD_REQUEST, 'Email is require');
    }
    if (!user.password) {
      throw new HttpError(BAD_REQUEST, 'Password is require');
    }
    const userToSave = new userModel(user);
    userToSave.setPassword(user.password);
    success(res, OK, {
      status: 'success',
      data: (await userToSave.save()).toAuthJson()
    });
  } catch (error) {
    fail(res, new HttpError(error.code || INTERNAL_SERVER_ERROR, error.message));
  }
};

const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      throw new HttpError(NOT_FOUND, 'User with this email is not found');
    }
    const isValid = await user.validatePassword(req.body.password);
    if (!isValid) {
      throw new HttpError(UNAUTHORIZED, 'Wrong password');
    }
    success(res, OK, await user.generateJWT());
  } catch (error) {
    fail(res, new HttpError(error.code || INTERNAL_SERVER_ERROR, error.message));
  }
};

const logout = async (req, res) => {
  res.status(200).json({
    data: req.user
  });
};

module.exports = {
  register,
  login,
  logout
};
