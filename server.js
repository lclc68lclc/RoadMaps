const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = express.Router();
const PORT = process.env.PORT || 4000;
const db = require("./models");

let Roadmap = require('./roadmap.model');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/build')));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
});


mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/Roadmap",
    {
        useMongoClient: true
    }
);

db.sequelize.sync().then(function() {
    app.listen(PORT, function(){
        console.log("Listening on port %s", PORT);
    });
});

/* This is the basic find query in Mongo*/
routes.route('/').get(function(req, res) {
    Roadmap.find(function(err, results) {
        if (err){ 
            console.log(err);
        } else {
            res.json(results);
        }
    });
});


app.use('/results', routes);
app.listen(PORT, function() {
    console.log('Listening on PORT ' + PORT);
});