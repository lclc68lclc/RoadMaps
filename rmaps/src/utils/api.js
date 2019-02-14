import axios from "axios";

export default {
    // Saves a user to the database
    getResults: function(userResponses) {
        // console.log(userData + " at api.js");
      return axios.get("/results", userResponses);
    }
};