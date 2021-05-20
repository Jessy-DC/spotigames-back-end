const User = require('../models/user');
const Game = require('../models/game');
const Genre = require('../models/genre');
const HttpError = require('../models/http-error');

const getGames = async (req, res, next) => {
    let games;

    try {
        games = await Game.find({});
    } catch (err) {
        const error = new HttpError(
            'Fetching games failed, please try again later.',
            500
        );
        return next(error);
    }

    res.json({games: games.map(game => game.toObject({getters: true}))});
}

const addGames = async (req, res, next) => {

    const {title, release} = req.body;

    let newGame = new Game({
        title,
        release,
        image: null,
        owners: 0,
        genres: []
    });

    try {
        await newGame.save();
    } catch (err) {
        const error = new HttpError(
            'Signing up failed, please try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({game: newGame});
}

exports.getGames = getGames;
exports.addGames = addGames;