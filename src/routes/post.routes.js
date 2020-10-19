const { Router } = require('express');
const { postCreationForm, newPost } = require('../controllers/post.controller');

const router = new Router();

// router.route('/').get(createPost);
router.route('/create-post').get(postCreationForm);
router.route('/create-post').post(newPost);

module.exports = router;
