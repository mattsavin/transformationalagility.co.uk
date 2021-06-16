//const createError = require('http-errors');
const express = require('express');
//const path = require('path');
//const cookieParser = require('cookie-parser');
//const logger = require('morgan');
//const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

//const indexRouter = require('./routes/index');
//const usersRouter = require('./routes/users');
//const testAPIRouter = require("./routes/testAPI");

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// DB Config
const db = require( "./config/keys");

// Connect to MongoDB
mongoose.connect(db.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB Connection Successful!"))
    .catch(err => console.log(err));

// Use routes

app.use("/api/items", items);

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Server started on port ${port}`));

const { auth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000',
    clientID: 'KwThVdVsHcnomlhWubFqCu5hQ9NYJd5p',
    issuerBaseURL: 'https://transformationalagility.eu.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


/*// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
*/