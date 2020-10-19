const { OK } = require('http-status-codes');
const postService = require('../services/post.service');

// const createPost = async (req, res) => {
//   try {
//     const post = { message: 'Hello World' };
//     res.status(OK).render('post', { ...post });
//   } catch (error) {}
// };

const postCreationForm = async (req, res) => {
  return res.status(OK).render('post');
};

const newPost = async (req, res) => {
  console.log('BODY: ', req.body);
  return res.status(OK).json({
    message: 'hello world'
  });
};

module.exports = {
  postCreationForm,
  newPost
};
