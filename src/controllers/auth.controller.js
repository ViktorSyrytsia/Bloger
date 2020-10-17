const { UserModel } = require('../models');
const { success, fail } = require('../helpers/http-response')
const HttpError = require('../helpers/http-error');
const { INTERNAL_SERVER_ERROR } = require('http-status-codes');

const register = async (req, res) => {
    try {
        const user = await UserModel.create({ ...req.body });
        return success(req, 200, user)
    } catch (error) {
        return fail(req, new HttpError(errpr.code || INTERNAL_SERVER_ERROR, error.message))
    }
}

module.exports = {
    register
}