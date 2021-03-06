const JwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const mongojs = require('mongojs');

const User = require('../models/user');
const config = require('../config/database');

module.exports = (passport) => {
    let opts = {};
    opts.jwtFromRequest = extractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.getUserById(jwt_payload._doc._id, (err, user) => {
            if(err) {
                return done(err, false);
            }
            
            if(user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
};