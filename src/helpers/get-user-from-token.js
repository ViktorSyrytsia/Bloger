const jwtr = require('../config/jwt-redis');
const { UNAUTHORIZED, INTERNAL_SERVER_ERROR } = require('http-status-codes');

const { UserModel } = require('../models/index');
const { fail } = require('./http-response');
const HttpError = require('./http-error');

exports.me = async (req, res, next) => {
  try {
    if (req.headers && req.headers.authorization) {
      const authorization = req.headers.authorization;
      const decoded = await jwtr.verify(authorization, process.env.ACCESS_TOKEN_SECRET).catch(err => {
        if (err) {
          throw new HttpError(INTERNAL_SERVER_ERROR, err);
        }
      });
      if (!decoded) {
        throw new HttpError(UNAUTHORIZED, 'Unauthorized');
      }
      const userId = decoded.id;
      req.user = await UserModel.findById(userId).lean().select(['-hash', '-salt']);
      next();
    } else {
      throw new HttpError(UNAUTHORIZED, 'Authorization headers are required');
    }
  } catch (error) {
    return fail(res, error);
  }
};
