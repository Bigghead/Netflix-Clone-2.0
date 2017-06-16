const express = require('express'),
    Router = express.Router();


Router.get('/login',
    passport.authenticate('auth0'), function (req, res) {
        console.log('Testing Auth, 1');
    });



Router.get('/callback',
  passport.authenticate('auth0',
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect("/");
  }
));




Router.get('/checkAuth', (req, res, next) => {

    if (req.isAuthenticated()) {
        next();
    } else {
        res.send('not authorized')
    }
}, (req, res) => {
    res.status(200).json(req.user);
})


Router.get('/logout', (req, res) => {
   req.logout();
   res.redirect('/');
 })

 module.exports = Router;