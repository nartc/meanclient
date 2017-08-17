const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const config = require('../config/database');

//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({
                success: false,
                msg: 'Failed to register User',
                err: err
            });
        } else {
            res.json({
                success: true,
                msg: 'New User registered',
                user: user
            });
        }
    })
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err, user) => {
        if(err) throw err;
        if(!user) {
            return res.json({
                success: false,
                msg: 'Fetching User failed'
            });
        }

        User.comparePassword(password, user.password, (err, isMatched) => {
            if(err) throw err;
            if(isMatched) {
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 18000 // 30 Minutes
                });

                res.json({
                    success: true,
                    token: 'JWT ' +token,
                    msg: 'Fetched User',
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email
                    }
                });
            } else {
                return res.json({
                    success: false,
                    msg: 'Wrong Password'
                })
            }
        });
    });
});

//Profile
router.get('/profile/:id',  passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;