const router = require("express").Router();
//const resultsController = require("../scripts/resultscontroller");
const express = require('express');
const sequelize = require('sequelize');
const db = require('../models');

{/*
router.route("/results")
    .get(resultsController);
console.log("there are results"); */}

const app = express();

app.get('/results', function(req, res) {
    sequelize.query("SELECT housesize, annualsal FROM mortgagedata WHERE neighborhood = 'henry' AND housesize <= '3bd';", {type: sequelize.QueryTypes.SELECT})
    .then(function(results) {
        res.json(results);
        console.log(results);
    })
    .catch(function(err){
        console.log(err);
        res.json(err);
    });
})

module.exports = router;