'use strict';

var express = require('express');
var router = express.Router();

var CourseController = require('../../controllers/course.js');

var courseController = new CourseController();
router.get('/:course_id', courseController.index);

module.exports = router;
