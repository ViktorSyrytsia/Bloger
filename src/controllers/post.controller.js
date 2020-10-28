const { OK, INTERNAL_SERVER_ERROR } = require('http-status-codes');
const HttpError = require('../helpers/http-error');
const { fail } = require('../helpers/http-response');
const userModel = require('../models/user.model');
const postService = require('../services/post.service');

const createPostForm = async (req, res) => {
  return res.status(OK).render('./posts/create-post-form');
};
const createPost = async (req, res) => {
  try {
    const body = JSON.parse(Object.keys(req.body)[0]);
    await postService.create({
      author: req.user._id,
      ...body,
    });
    const posts = await postService.findAll();
    return res.status(OK).render('./posts/posts', { posts });
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
    console.log(posts);
    return res.status(OK).render('./posts/posts', { posts });
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
    const user = await userModel.findById(post.author);
    return res.status(OK).render('./posts/post-detail', { post, user });
  } catch (error) {
    return fail(
      res,
      new HttpError(error.code || INTERNAL_SERVER_ERROR, error.message)
    );
  }
};

module.exports = {
  findAllPosts,
  createPostForm,
  createPost,
  postDetails,
};
