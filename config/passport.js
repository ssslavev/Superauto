const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const CryptoJs = require('crypto-js');

module.exports = function({ app, data }) {
    passport.use(new LocalStrategy((username, password, done) => {
        return data.usersData.findByUsername(username)
            .then((User) => {
                User.toArray((err, u) => {
                    if (u[0] && (u[0].password === CryptoJs.sha1(password).toString())) {
                        return done(null, u[0]);
                    }
                    return done(null, false);
                });
            })
            .catch((err) => {
                return done(err);
            });
        }
    ));

    app.use(cookieParser());
    app.use(session({ secret: 'Top secret' }));
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        const id = user.id || user._id;
        done(null, id);
    });

    passport.deserializeUser((id, done) => {
        return data.usersData.getUserById(id)
            .then((user) => {
                done(null, (user));
            })
            .catch(done);
    });
};
