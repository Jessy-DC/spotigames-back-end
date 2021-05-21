const User = require('../models/user');
const Game = require('../models/game');
const Genre = require('../models/genre');
const HttpError = require('../models/http-error');

const getGenres = async (req, res, next) => {
    let genres;

    try {
        genres = await Genre.find({});
    } catch (err) {
        const error = new HttpError(
            'Fetching genres failed, please try again later.',
            500
        );
        return next(error);
    }

    res.json({genres: genres.map(genre => genre.toObject({getters: true}))});
}

const addGenres = async (req, res, next) => {

    const name = req.body.name;

    let newGenre = new Genre({
        name,
        games: 0
    });

    try {
        await newGenre.save();
    } catch (err) {
        const error = new HttpError(
            err.message,
            500
        );
        return next(error);
    }

    res.status(201).json({genre: newGenre});
}

exports.getGenres = getGenres;
exports.addGenres = addGenres;