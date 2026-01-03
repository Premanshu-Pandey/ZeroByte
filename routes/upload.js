const express = require("express");
const multer = require("multer");
const upload = multer({ dest: 'uploads/' })

const router = express.Router()

const course = require('../models/courseInfo')
const notes = require('../models/notes')

router.get('/', (req, res) => {
    res.render('upload')
})

router.post('/send', upload.single('notes'), async (req, res) => {
    res.send(req.body)

    const { branch, semester, subject } = req.body
    const uploadfile = req.file

    let file = await notes.findOne({ name: uploadfile.originalname })

    if (file) return res.send('notes already exist')

    let info = await course.findOne({ subject }).populate('note')

    if (!info) {
        info = await course.create({
            branch,
            semester,
            subject
        })
    }

    file = await notes.create({
        name: uploadfile.originalname,
        url: "relative",
        subject:info._id
    })

    info.note.push(file._id)

    await info.save()

})

module.exports = router