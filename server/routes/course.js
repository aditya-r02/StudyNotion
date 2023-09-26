const express = require('express');
const router = express.Router();

const {auth, isInstructor} = require('../middleware/Auth');
const {createCourse} = require('../controllers/Course');


// Create course -----------
//router.post("/createcourse", auth, isInstructor, createCourse);

// get all categories


module.exports = router;