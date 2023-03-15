// requiring the controller
const userController = require('../Controllers/userController');

// using express again
const express = require('express');
// using router
const router = express.Router();


router.get('/',userController.user);

router.get('/profile',userController.profile);

router.post('/create_user',userController.createUser);

module.exports = router;
