const Auth0Strategy = require('passport-auth0'),
      passport      = require('passport'),
      authKeys      = require('./authKeys.js'),

      express = require('express'),
      app     = express();
      router  = express.Router()

const strategy = new Auth0Strategy({
  domain:    authKeys.domain,
  clientID:  authKeys.clientID, 
  clientSecret: authKeys.clientSecret,
  callbackURL:  authKeys.callbackURL
},
  function (accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

router.use(require('express-session')({
  secret: authKeys.secret,
  resave: true,
  saveUninitialized: true
}));

router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user)
});

passport.deserializeUser(function (user, done) { done(null, user) });

passport.use(strategy);


module.exports =  router;