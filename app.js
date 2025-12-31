const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const multer = require('multer')
const upload = multer({dest:'uploads/'})
const { uploadPDF } = require("./controllers/uploadController.js");

require('dotenv').config()


const session = require('express-session')
const passport = require('passport')

require('./config/passport')

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/auth', require('./routes/auth'))


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next()
    res.redirect('/')
}

// Sample route
app.get('/home', isLoggedIn, (req, res) => {
    console.log(req.user)
    res.render('home');
});

app.get('/', (req, res) => {
    res.render('main');
});

app.get('/edit', (req, res) => {
    res.render('card')
})

app.get('/home/upload',(req,res)=>{
    res.render('upload')
})


app.post('/home/upload/send',upload.single('file'),uploadPDF,async (req, res) => {

    // File info
    const file = req.file;
    const { subject, semester, branch } = req.body;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // file.path → temp file location
    // Upload file to Firebase / S3 next

    res.json({ message: 'File received successfully' });
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;