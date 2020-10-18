const jwt = require('jsonwebtoken');
const { UNAUTHORIZED } = require('http-status-codes');

const { UserModel } = require('../models/index');
const { fail } = require('./http-response');
const HttpError = require('./http-error');

exports.me = async (req, res, next) => {
  try {
    if (req.headers && req.headers.authorization) {
      const authorization = req.headers.authorization;
      const decoded = jwt.verify(authorization, 'secret');
      if (!decoded) {
        throw new HttpError(UNAUTHORIZED, 'Unauthorized');
      }
      const userId = decoded.id;
      req.user = await UserModel.findById(userId);
      next();
    } else {
      throw new HttpError(UNAUTHORIZED, 'Authorization headers are required');
    }
  } catch (error) {
    fail(res, error);
  }
};
