let DUMMY_GAMES = [
    {
        id: 1,
        title: 'Mass Effect'
    },
    {
        id: 2,
        title: 'Mario',
    }
]

const getGames = async (req, res, next) => {
    res.json({games: DUMMY_GAMES});
}

const addGames = async (req, res, next) => {
    let newGame = {
        id: req.body.id,
        title: req.body.title
    };

    if (newGame) {
        DUMMY_GAMES.push(newGame)
    } else {
        let error = new Error('No game');
        error.status = 500;
        return next(error);
    }

    res.json({games: DUMMY_GAMES});
}

exports.getGames = getGames;
exports.addGames = addGames;