const { Router } = require('express');
const {
  createPostForm,
  createPost,
  findAllPosts,
} = require('../controllers/post.controller');

const router = new Router();

router.route('/create-post-form').get(createPostForm);
router.route('/new').post(createPost);
router.route('/').get(findAllPosts);

module.exports = router;
