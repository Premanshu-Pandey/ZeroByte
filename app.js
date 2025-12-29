const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


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
    //   res.send('Hello World!');
    console.log(req.user)
    res.render('index');
});

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/edit', (req, res) => {
    res.render('card')
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;