import { Schema, Types } from 'mongoose';

const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true },
    comments: [{ type: Types.ObjectId, require: false, ref: Comment }],
    rating: { type: Number, required: false, default: 0 },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);