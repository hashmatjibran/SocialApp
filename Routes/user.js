// requiring the controller
const userController = require('../Controllers/userController');

// using express again
const express = require('express');
// using router
const router = express.Router();

// dummy route
router.get('/',userController.user);

// dummy route
router.get('/profile',userController.profile);

// route to create users
router.post('/create_user',userController.createUser);

// route to display users 
router.get('/users',userController.getusers);

// create a new Account
router.get('/createAccount',userController.createAccount)

router.get('/deleteUser',userController.deleteUser)

module.exports = router;
