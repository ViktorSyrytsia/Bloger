const { OK, INTERNAL_SERVER_ERROR } = require('http-status-codes');
const HttpError = require('../helpers/http-error');
const { fail } = require('../helpers/http-response');
const userModel = require('../models/user.model');
const postService = require('../services/post.service');

const createPostForm = async (req, res) => {
  return res.status(OK).render('create-post-form');
};

const createPost = async (req, res) => {
  try {
    const post = await postService.create({
      author: '5f8d5db75654481cf24e0b2d',
      ...req.body,
    });
    const user = await userModel.findById(post.author).lean();
    return res.status(OK).render('post', { post, user });
  } catch (error) {
    return fail(
      res,
      new HttpError(error.code || INTERNAL_SERVER_ERROR, error.message)
    );
  }
};

const findAllPosts = async (req, res) => {
  try {
    const posts = await postService.findAll();
    return res.status(OK).render('posts', { posts });
  } catch (error) {
    return fail(
      res,
      new HttpError(error.code || INTERNAL_SERVER_ERROR, error.message)
    );
  }
};

const postDetails = async (req, res) => {
  try {
    const post = await postService.findById(req.params.id);
    const user = await userModel.findById(post.author)
    return res.status(OK).render('post-detail', { post, user })
  } catch (error) {
    return fail(
      res,
      new HttpError(error.code || INTERNAL_SERVER_ERROR, error.message)
    );
  }
}

module.exports = {
  findAllPosts,
  createPostForm,
  createPost,
  postDetails
};
