// using the express liBRARY
const express = require('express');
const homeController = require('../Controllers/homeController');

// Using the express.Router to get the routes functionality
const router =express.Router();

// usingControllers
const controller = require("../Controllers/homeController");

router.get('/',homeController);

router.use('/user',require('./user'));

router.use('/post',require('./posts'));

router.use('/news',require('./news'));




// Finally exporting the router to use in our app entry point
module.exports = router;