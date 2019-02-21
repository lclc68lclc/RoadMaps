const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/apiroutes');
const PORT = process.env.PORT || 4000;
const db = require("./models");
const cors = require('cors');
const mysql = require('mysql');

const connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/build')));
//app.use('/results', routes);
//app.get('/', function(req, res){
    //res.sendFile(path.join(__dirname, '/build', 'index.html'));
//});



app.get('/results', cors(), function(req, res) {
    //connection.query("SELECT housesize, annualsal FROM mortgagedata WHERE neighborhood = 'henry' AND housesize <= '3bd';", function(err, results){
      //  if(err) throw err;
        //res.json(results);
    //});

    switch (req.body){
        case "help":
            sequelize.query("SELECT OccupationalTitle, EducationNeeded, AvgAnnualWage FROM `lwdas` WHERE OccupationClassification IN('Community and Social Service', 'Education and Library', 'Healthcare', 'Protective Service', 'Personal Care') AND AvgAnnualWage > 50000;", function(err, results){
            if(err) throw err;
            res.json(results);
        });
        case "hands":
        sequelize.query("SELECT OccupationalTitle, EducationNeeded, AvgAnnualWage FROM `lwdas` WHERE `﻿OccupationClassification` IN('Maintenance', 'Construction', 'Maintenance and Repair', 'Farming, Fishing and Forestry', 'Production', 'Transportation', 'Food Prep and Service') AND AvgAnnualWage > 50000;", function(err, results){
            if(err) throw err;
            res.json(results);
        });
        case "stem":
        sequelize.query("SELECT OccupationalTitle, EducationNeeded, AvgAnnualWage FROM `lwdas` WHERE `﻿OccupationClassification` IN('Computer', 'Architecture and Engineering', 'Art, Design, Entertainment, Sports and Media', 'Life, Physical and Social Science') AND AvgAnnualWage > 50000;", function(err, results){
            if(err) throw err;
            res.json(results);
        });
        case "business":
        sequelize.query("SELECT OccupationalTitle, EducationNeeded, AvgAnnualWage FROM `lwdas` WHERE `﻿OccupationClassification` IN('Management', 'Business and Financial Operations', 'Sales', 'Office and Admin Support', 'Legal') AND AvgAnnualWage > 50000;", function(err, results){
            if(err) throw err;
            res.json(results);
        });
        default:
        connection.query("SELECT OccupationalTitle, EducationNeeded, AvgAnnualWage FROM `lwdas` WHERE `﻿OccupationClassification` IN('Management', 'Business and Financial Operations', 'Sales', 'Office and Admin Support', 'Legal') AND AvgAnnualWage > 50000;", function(err, results){
            if(err) throw err;
            res.json(results);
        });
    }
});

{/*mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/Roadmap",
    {
        useMongoClient: true
    }
); 

//----------------------- Sequelize --------------//
db.sequelize.sync().then(function() {
    app.listen(3000, function(){
        console.log("Listening on port %s", 3000);
    });
});*/}





app.listen(PORT, function() {
    console.log('Listening on PORT ' + PORT);
});