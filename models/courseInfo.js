const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    branch:String,
    semester:Number,
    subject:String,
    notes:[{
        ref:"notes"
    }]
})

module.exports = mongoose.model('course',courseSchema)