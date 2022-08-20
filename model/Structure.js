const mongoose = require("mongoose")
const studentList = new mongoose.Schema({
    StudentName : {
        type : String,
        required : true
    },
     CollegeName : {
        type : String,
        required : true
    },
     Location : {
        type : String,
        required : true
    },
    
})
const studentData = new mongoose.model("studentData",studentList)

module.exports = studentData;