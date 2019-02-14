var db = require("../models");

//function to make query work
function getResponses(UserInput, UserOutput) {
    console.log("the UserArray is:" + responses);
    if(UserInput ===undefined){
        UserOutput({
            Title: "An error has occured",
            Description: "Could not query the database"
        });
    }
    else{
        //define a variable to attach values to
        var dataQuery;
        db.mortgagedata.findAll({
            attributes: ['housesize', 'annualsal'],
            where: {
                neighborhood: UserInput[0],
                housesize: UserInput[1]
            }
        }).then(function(results) {
            dataQuery = results;
            console.log("________________________");
            console.log("dataQuery[0] is: " + dataQuery);
            console.log("________________________");     

            UserOutput(dataQuery);
        });

    }
}

module.exports = getResponses;