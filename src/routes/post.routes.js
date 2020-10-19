const { Router } = require('express');
const {
  createPostForm,
  createPost,
} = require('../controllers/post.controller');

const router = new Router();

router.route('/create-post-form').get(createPostForm);
router.route('/new').post(createPost);

module.exports = router;
