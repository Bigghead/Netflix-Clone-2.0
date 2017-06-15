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
      passportConfig = require('./server/passportConfig.js');
      // authKeys = require('./server/authKeys.js');

      
// ===== Models =====
const User = require('./server/models/User.js');

// ===== Routes =====
const index = require('./server/routes/index'),
      users = require('./server/routes/users');
      authRoute = require('./server/routes/authentication.js');
      userHandler = require('./server/routes/userHandler.js');

const app = express();

// ===== Mongoose Setup =====
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.mlabUser}:${process.env.mlabPass}@ds151941.mlab.com:51941/netflix-clone`);

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
app.use(cors());

app.use(passportConfig);

// ===== App Use Routes =====
app.use(authRoute);
app.use(userHandler);



app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/dist/index.html'));
})
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '../client/dist/index.html'));
// });

app.listen(process.env.PORT);

module.exports = app;
