const commentsController = require('../controllers/commentsController');
const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const { protect, optionalAuth, restrictTo } = require('../middleware/auth')

router.get('/', postsController.getAllPosts);
router.get('/:id', postsController.getPostById);
router.post('/', postsController.createPost);
router.put('/:id', postsController.updatePost);
router.delete('/:id', postsController.deletePost);
router.post('/:id/like', postsController.likePost);
module.exports = router;