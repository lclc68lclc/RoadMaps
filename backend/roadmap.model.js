const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RoadMap = new Schema({
    neighborhood: {
        type: String
    },
    lifestyle: {
        type: String
    },
    career: {
        type: String
    }
});

module.exports = mongoose.model('Roadmaps', RoadMap);