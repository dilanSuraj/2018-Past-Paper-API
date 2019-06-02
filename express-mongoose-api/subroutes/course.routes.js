var express = require('express');
var router = express.Router();

const courseController = require('../controller/course.controller');

router.route('/').get(function (req, res) {

   courseController.get().then((data)=>{
       res.status(data.status).send(data.data);
   }).catch((err)=>{
       res.status(err.status).send(err.message);
   })

});

router.route('/:courseid').get(function (req, res) {

    courseController.getOne(req.params.courseid).then((data)=>{
        res.status(data.status).send(data.data);
    }).catch((err)=>{
        res.status(err.status).send(err.message);
    });

});

router.route('/').post(function (req, res) {

   courseController.insert(req.body).then((data)=>{
       res.status(data.status).send(data.message);
   }).catch((err)=>{
       res.status(err.status).send(err.message);
   })

});

module.exports = router;