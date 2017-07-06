const passport = require('passport'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    LocalStrategy = require('passport-local').Strategy;

module.exports = function({ app, data }) {

    passport.use(new LocalStrategy(
        (username, password, done) => {
            return data.usersData.findByUsername(username)
                .then((user) => {
                    user.toArray(function(err, user) {

                        return done(null, user[0])
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