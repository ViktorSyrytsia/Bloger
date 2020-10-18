const { UserModel } = require('../models');

const register = async (req, res) => {

};

const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });
        const isValid = await user.validatePassword(req.body.password);
        console.log(isValid);
        if (isValid) {
            res.status(200).json({
                status: "ok",
                token: user.generateJWT()
            })
        }


    } catch (error) {

    }
}

const logout = async (req, res) => {
    res.status(200).json({
        data: req.user
    })
};

module.exports = {
    register, login, logout
}