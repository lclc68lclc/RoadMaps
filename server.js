const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const roadmapRoutes = express.Router();
const PORT = 4000;

let Roadmap = require('./roadmap.model');
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/build')));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/Roadmap",
    {
        useMongoClient: true
    }
);

/* This is the basic find query in Mongo*/
roadmapRoutes.route('/').get(function(req, res) {
    Roadmap.find(function(err, results) {
        if (err){ 
            console.log(err);
        } else {
            res.json(results);
        }
    });
});

app.use('/results', roadmapRoutes);
app.listen(PORT, function() {
    console.log('Listening on PORT ' + PORT);
});