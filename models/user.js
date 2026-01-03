const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/userinfo')

const userSchema = new mongoose.Schema({
    googleId: String,
    name: String,
    email: String,
    role: {
        type: String,
        default: 'Student'
    }
})

module.exports = mongoose.model('User', userSchema)
