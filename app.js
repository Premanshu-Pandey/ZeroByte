const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
//   res.send('Hello World!');
    res.render('index');
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/edit',(req,res)=>{
    res.render('card')
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;