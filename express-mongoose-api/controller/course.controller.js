const DBSchema = require('../model/DBSchema');
const courseModel = DBSchema.model('course');

var courseController = function () {

    this.insert = function (data) {
        return new Promise(function (resolve, reject){

            var course = new courseModel({
                name:data.pName,
                code:data.pCode,
                passMark:data.pPassMark,
                lectureInCharge:data.pLectureInCharge,
                subjects: data.pSubjects
            });

            course.save().then(()=>{
                resolve({
                    status: 200,
                    message:'Added Successfully'
                });
            }).catch((err)=>{
                reject({
                    status: 500,
                    message:'Error occured'+err
                });
            })


        }).catch((err)=>{
            console.log(err);
        });
    }

    this.get = () =>{
        return new Promise(function (resolve, reject) {
            courseModel.find().exec().then((data)=>{

                resolve({
                    status: 200,
                    data: data
                });

            }).catch((err)=>{
                reject({
                    status: 500,
                    message:'Error occured'+err
                });
            })
        })
    }

    this.getOne = (pCode) =>{
        return new Promise(function (resolve, reject) {
            courseModel.find({code: pCode}).exec().then((data)=>{
                resolve({
                    status: 200,
                    data: data
                });
            }).catch((err)=>{
                reject({
                    status: 500,
                    message: 'Error occured '+err
                });
            })
        })
    }

};

module.exports = new courseController();