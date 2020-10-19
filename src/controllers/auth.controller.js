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
    if (await userModel.findOne({ email: user.email })) {
      throw new HttpError(BAD_REQUEST, 'User with this email, already exist');
    }
    const userToSave = new userModel(user);
    userToSave.setPassword(user.password);
    await userToSave.save().catch(err => {
      if (err) {
        throw new HttpError(INTERNAL_SERVER_ERROR, err.message);
      }
    });
    return success(res, OK, { user: await userToSave.toAuthJSON() });
  } catch (error) {
    return fail(res, new HttpError(error.code || INTERNAL_SERVER_ERROR, error.message));
  }
};

const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      throw new HttpError(NOT_FOUND, 'User with this email is not found');
    }
    const isValid = await user.validatePassword(req.body.password);
    console.log(isValid);
    if (!isValid) {
      throw new HttpError(UNAUTHORIZED, 'Wrong password');
    }
    return success(res, OK, await user.toAuthJSON());
  } catch (error) {
    console.log(error);
    return fail(res, new HttpError(error.code || INTERNAL_SERVER_ERROR, error.message));
  }
};

const logout = async (req, res) => {
  try {
    return success(res, OK, { ...req.user });
  } catch (error) {
    return fail(res, new HttpError(error.code || INTERNAL_SERVER_ERROR, error.message));
  }
};

module.exports = {
  register,
  login,
  logout
};
