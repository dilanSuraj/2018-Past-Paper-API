const express = require('express');
const router = express.Router();

var courseRouter = require('./subroutes/course.routes');

router.use('/courses',courseRouter);

module.exports = router;