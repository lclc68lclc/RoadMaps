const express = require('express');
const mysql = require('mysql');
const path = require("path");
const bodyParser = require("body-parser");

const app = express();



app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static('images'));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Create connection
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Fl@shahhahhgord0n',
  database : 'roadmaps_db'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL connected..');
});


app.get("/", (req, res) => {
    res.render("index");
});

app.get('/all', (req, res) => {
    db.query("SELECT career FROM careerdata WHERE industry = 'admin' AND annualsal > 50000;", (err, results) => {
        if(err) {
            throw err;
        }
        else {
            res.render("index", {careers: results});
        }
    });
});

app.listen(3000, () => {
    console.log('Server listening on Port 3000')
});