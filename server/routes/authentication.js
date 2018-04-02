const express = require('express'),
    Router = express.Router();


Router.get('/login',
    passport.authenticate('auth0'), function (req, res) {
        console.log('Testing Auth, 1');
    });



Router.get('/callback', function (req, res, next) {

    passport.authenticate('auth0', function (err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/'); }
        req.logIn(user, function (err) {
            if (err) { return next(err); }
            return res.redirect('/');
        });
    })(req, res, next);
});



Router.get('/checkAuth', (req, res, next) => {

    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(400).json({ status: 'not authorized'})
    }
}, (req, res) => {
    res.status(200).json(req.user);
})


Router.get('/logout', (req, res) => {
   req.logout();
   res.redirect('/');
 })

 module.exports = Router;