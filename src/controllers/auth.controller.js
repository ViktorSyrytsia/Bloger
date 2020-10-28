const { NOT_FOUND, UNAUTHORIZED, OK, INTERNAL_SERVER_ERROR, BAD_REQUEST } = require('http-status-codes');

const { UserModel } = require('../models');
const { fail, success } = require('../helpers/http-response');
const jwtr = require('../config/jwt-redis');
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
    return res.status(OK).render('./common/sucsess', { user: await userToSave.toAuthJSON() })
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
    if (!isValid) {
      throw new HttpError(UNAUTHORIZED, 'Wrong password');
    }
    req.session.userId = user.id
    return success(res, OK, await user.toAuthJSON());
  } catch (error) {
    console.log(error);
    return fail(res, new HttpError(error.code || INTERNAL_SERVER_ERROR, error.message));
  }
};

const logout = async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (!user) {
      throw new HttpError(NOT_FOUND, 'User not found');
    }
    await jwtr.destroy(user._id.toHexString()).catch(err => {
      if (err) {
        throw new HttpError(INTERNAL_SERVER_ERROR, 'User already logged out');
      }
    });
    return success(res, OK, {});
  } catch (error) {
    return fail(res, new HttpError(error.code || INTERNAL_SERVER_ERROR, error.message));
  }
};

const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.headers.refreshtoken;
    const decoded = await jwtr.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET).catch(err => {
      if (err) {
        throw new HttpError(INTERNAL_SERVER_ERROR, err);
      }
    });
    if (!decoded) {
      throw new HttpError(BAD_REQUEST, 'Invalid refresh token');
    }
    const user = await userModel.findById(decoded.id);
    return success(res, OK, await user.toAuthJSON());
  } catch (error) {
    return fail(res, new HttpError(error.code || INTERNAL_SERVER_ERROR, error.message));
  }
};

const registrationForm = async (req, res) => {
  try {
    return res.status(OK).render('./auth/registration-form');
  } catch (error) {
    return fail(res, new HttpError(error.code || INTERNAL_SERVER_ERROR, error.message));
  }
}

module.exports = {
  register,
  login,
  logout,
  refreshToken,
  registrationForm
};
