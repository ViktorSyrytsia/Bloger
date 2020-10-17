const { Schema, Types, model } = require('mongoose')
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    hash: { type: String, unique: true, required: true },
    salt: { type: String, required: false },
    comments: [{ type: Types.ObjectId, require: false, ref: 'Comment' }],
    rating: { type: Number, required: false, default: 0 },
    date: { type: Date, required: false, default: Date.now },
});

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(8).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 100, 64, 'sha512').toString('hex');
};

userSchema.methods.validatePassword = function (password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 100, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

userSchema.methods.generateJWT = function () {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        email: this.email,
        id: this._id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
}

userSchema.methods.toAuthJSON = function () {
    return {
        _id: this._id,
        email: this.email,
        token: this.generateJWT(),
    };
};

module.exports = model('User', userSchema);