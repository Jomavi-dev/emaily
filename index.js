"use strict";
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');

const PORT = process.env.PORT || 3000;

mongoose.connect(keys.mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.use(
  cookieSession({
    maxAge: 2 * 24 * 60 * 60 * 1000, //2 days in miliseconds
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// IIFE with paremeter of app
require('./routes/authRoutes')(app);

app.listen(PORT, () => console.log(`App listening on localhost:${PORT}`));

















// require statements
// app config
// middleware
// db config
// ???
// api routes
// listen
