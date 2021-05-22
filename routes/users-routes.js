const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/users-controller')

const router = express.Router();

router.get('/', usersController.getUsers);

router.post('/signup',
    [
        check('username')
            .not()
            .isEmpty(),
        check('email')
            .normalizeEmail()
            .isEmail().withMessage('Email must be valid'),
        check('password')
            .isLength({min: 7})
    ], usersController.signup);

module.exports = router;