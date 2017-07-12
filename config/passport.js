const passport = require('passport'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    LocalStrategy = require('passport-local').Strategy,
    CryptoJs = require('crypto-js');

module.exports = function({ app, data }) {

    passport.use(new LocalStrategy(
        (username, password, done) => {
            return data.usersData.findByUsername(username)
                .then((user) => {
                    user.toArray(function(err, user) {
                        if (user[0] && (user[0].password === CryptoJs.SHA1(password).toString())) {
                            return done(null, user[0])
                        } else {
                            done(null, false)
                        }

                    });


                })
                .catch((err) => {
                    return done(err)
                })
        }
    ));

    app.use(cookieParser());
    app.use(session({ secret: 'Top secret' }));
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        let id = user.id || user._id;
        done(null, id)
    });

    passport.deserializeUser((id, done) => {
        return data.usersData.getUserById(id)
            .then((user) => {
                done(null, (user))
            })
            .catch(done)
    })
}