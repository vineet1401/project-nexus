const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const port = 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/submit', (req, res) =>{
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    res.send(`<h1> ${username} ${email} ${password}</h1>`);
});



app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})