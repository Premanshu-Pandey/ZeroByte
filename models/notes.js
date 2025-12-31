const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    name:String,
    url:String,
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"course"
    }
})

module.exports = mongoose.model('notes',notesSchema)