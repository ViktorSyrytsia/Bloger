const { INTERNAL_SERVER_ERROR } = require('http-status-codes');
const HttpError = require('../helpers/http-error');
const { PostModel } = require('../models/index');

const create = async (post) => {
  try {
    const createdPost = await PostModel.create(post);
    return createdPost;
  } catch (error) {
    throw new HttpError(INTERNAL_SERVER_ERROR, error.message);
  }
};
const update = async () => {
  try {
    const post = await PostModel.findByIdAndUpdate('id', {}, { new: true });
    return post;
  } catch (error) {
    throw new HttpError(INTERNAL_SERVER_ERROR, error.message);
  }
};

const deleteById = async () => {
  try {
    const post = await PostModel.findByIdAndDelete('id', {});
    return null;
  } catch (error) {
    throw new HttpError(INTERNAL_SERVER_ERROR, error.message);
  }
};

const findAll = async () => {
  try {
    const posts = await PostModel.find({}).sort({ date: -1 }).populate('author');
    return posts;
  } catch (error) {
    throw new HttpError(INTERNAL_SERVER_ERROR, error.message);
  }
};

const findById = async (id) => {
  try {
    const post = await PostModel.findById(id);
    return post;
  } catch (error) {
    throw new HttpError(INTERNAL_SERVER_ERROR, error.message);
  }
};

module.exports = {
  create,
  update,
  deleteById,
  findAll,
  findById,
};
