const passportJwt = require('passport-jwt');
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const db = require('../startup/db');
const user = db.user;
const config=require('config');

module.exports = (passport) => {
    passport.use(
        new StrategyJwt({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get('jwtPrivateKey')
        },
            async (jwtPayload, cb) => {
                await user.findOne({ where: { Email: jwtPayload.Email } }).then((user) => {
                    return cb(null, user);
                }).catch((error) => {
                    return cb(error);
                })
            })
    );
}