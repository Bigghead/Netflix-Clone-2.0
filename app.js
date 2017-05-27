const express = require('express'), 
      path    = require('path'), 
      favicon = require('serve-favicon'), 
      logger  = require('morgan'), 
      serveStatic = require('serve-static'),
      cookieParser = require('cookie-parser'), 
      cors    = require('cors');
      bodyParser = require('body-parser'), 
      mongoose = require('mongoose'),
      
      passport = require('passport'), 
      passportConfig = require('./server/passportConfig.js'),
      authKeys = require('./server/authKeys.js');


const index = require('./routes/index'),
      users = require('./routes/users');

const app = express();

// ===== Mongoose Setup =====
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${authKeys.mlabUser}:${authKeys.mlabPass}@ds151941.mlab.com:51941/netflix-clone`);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(serveStatic(path.join(__dirname, './client/dist')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
//   next();
// });
app.use(cors());

app.use(passportConfig);


app.get('/login',
  passport.authenticate('auth0'), function (req, res) {
    console.log('Testing Auth, 1');
  });

app.get('/callback', function(req, res, next) {
  passport.authenticate('auth0', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/movies');
    });
  })(req, res, next);
});

  app.get('/checkAuth', (req, res, next) => {
    if(req.isAuthenticated()){
      next();
    } else {
      res.send('not authorized')
    }
  }, (req, res) => {
    res.status(200).json(req.user);
  })

 app.post('/:userId/movies', ( req, res ) => {
   console.log(req.body);
  // User.findById(req.params.userId)
  //     .exec()
  //     .then(user => {
  //       user.userList.push(req.body);
  //       return user.save();
  //     })
  //     .then( () => {
  //       res.status(200).send('Success');
  //     })
  //     .catch(err => {
  //       res.send(err);
  //     })
 });

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/dist/index.html'));
})
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '../client/src/index.html'));
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, () => console.log('listening on 3000'));

module.exports = app;
