const express = require('express');

const gamesController = require('../controllers/games-controller')

const router = express.Router();

router.get('/', gamesController.getGames);

router.post('/', gamesController.addGames);

module.exports = router;