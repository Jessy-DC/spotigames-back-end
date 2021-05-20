const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const genreSchema = new Schema({
    name: { type: String, required: true, unique: true },
    games: { type: Number, required: false }
});

genreSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Genre', genreSchema);