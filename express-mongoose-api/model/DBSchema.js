const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

var CourseSchema = new Schema({
    name:{
        type: String
    },
    code:{
        type: String
    },
    passMark:{
        type: Number
    },
    lectureInCharge:{
        type: String
    },
    subjects:[{

        name: {
            type: String
        },
        description:{
            type: String
        },
        amount:{
            type: Number
        }
    }]
});

mongoose.model('course', CourseSchema);

mongoose.connect('mongodb://127.0.0.1:27017/testdb', function (err) {
    if(err){
        console.log('Database error '+err);
        process.exit(-1);
    }
    console.log('Successfully connected to the database');
});

module.exports = mongoose;
