const express = require('express');

const router = express.Router();

const postController =require('../Controllers/postController');


router.get('/posts',postController.posts);

router.get('/myposts',postController.myPosts);



module.exports = router;