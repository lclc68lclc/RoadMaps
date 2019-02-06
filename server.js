const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const roadmapRoutes = express.Router();
const PORT = 4000;

let Roadmap = require('./roadmap.model');
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/roadmaps", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

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