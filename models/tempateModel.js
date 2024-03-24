const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    thumbnail: {
        type: String,
        required: true
    },
    template: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('template', templateSchema);