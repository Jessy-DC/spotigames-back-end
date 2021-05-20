const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: { type: String, required: true, unique: true },
    release: { type: Date, required: true },
    image: { type: String, required: false },
    owners: { type: Number, required: false },
    genres: [{type: mongoose.Types.ObjectId, required: false, ref: 'Genre'}]
});

gameSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Game', gameSchema);