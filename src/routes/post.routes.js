const { Router } = require('express');
const {
  createPostForm,
  createPost,
  findAllPosts,
  postDetails
} = require('../controllers/post.controller');

const router = new Router();

router.route('/create-post-form').get(createPostForm);
router.route('/new').post(createPost);
router.route('/').get(findAllPosts);
router.route('/:id').get(postDetails);

module.exports = router;
