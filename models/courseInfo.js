const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    branch:String,
    semester:Number,
    subject:String,
    note:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"notes"
    }]
})

module.exports = mongoose.model('course',courseSchema)