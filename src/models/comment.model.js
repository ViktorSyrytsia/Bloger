import { Schema, Types } from 'mongoose';

const commentSchema = new Schema({
    author: { type: Types.ObjectId, ref: 'User' },
    body: { type: String, required: true },
    comments: [{ type: String, ref: Comment }],
    rating: { type: Number, required: false, default: 0 },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comment', commentSchema);