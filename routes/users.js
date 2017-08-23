const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const passport = require('passport');
const bcrypt = require('bcryptjs');
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

    User.find({'email': newUser.email}, (err, user) => {
        if(err) {
            console.log(err);
        }

        if(user.length > 0) {
            if(user[0].email === newUser.email) {
                res.json({
                    success: false,
                    msg: 'Email "'+newUser.email+'" is already existed'
                });
            } 
        } else {
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
            });
        }
    });
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
                msg: 'User not found'
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
                    msg: 'Logged In',
                    user: {
                        _id: user._id,
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
router.get('/profile',  passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({user: req.user});
});

//Change Password
router.put('/password', (req, res, next) => {
    console.log(req.body);
    let candidatePassword = req.body.candidatePassword;
    let newPassword = req.body.newPassword;
    let currentPassword = req.body.user.password;
    User.comparePassword(candidatePassword, currentPassword, (err, isMatched) => {
        if (err) throw err;
        if(isMatched) {
           bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newPassword, salt, (err, hash) => {
                newPassword = hash;
                req.body.user = {
                    _id: req.body.user._id,
                    email: req.body.user.email,
                    name: req.body.user.name,
                    password: newPassword
                }
                console.log(req.body.user);
                User.findByIdAndUpdate({_id: mongojs.ObjectId(req.body.user._id)}, req.body.user, {new: true}, (err, user) => {
                    if (err) {
                        console.log(err);
                        return next (err);
                    } else {
                        res.json({
                            success: true,
                            msg: "Password Successfully Changed",
                            user: {
                                _id: user._id,
                                name: user.name,
                                email: user.email
                            }
                        });
                    }
                });
            });
           });
           
        } else {
            res.json({
                success: false,
                msg: "Password Does Not Match"
            });
        }
        
    });
});

module.exports = router;