const { Schema, Types, model } = require('mongoose');

const postSchema = new Schema({
  title: { type: String, unique: true, required: true },
  author: { type: Types.ObjectId, ref: 'User', required: true },
  body: { type: String, required: true },
  comments: [{ type: String, ref: 'Comment' }],
  meta: {
    votes: Number,
    favs: Number
  },
  date: { type: Date, default: Date.now }
});

module.exports = model('Post', postSchema);
