// require Express 
const express = require('express');

// use router
const router = express.Router();

// use news Controller
const newsController = require('../Controllers/newsController');

// create Routes
router.get('/latest',newsController.latestNews);

// export the route function call i.e express.Router() which is stored as a reference in router

module.exports = router;