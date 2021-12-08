"use strict";
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user');
require('./models/survey');
require('./services/passport');

const PORT = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI || 'mongodb://localhost:27017/mailDB', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

app.use(express.json());
app.use(express.urlencoded());

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
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(PORT, () => console.log(`App listening on localhost:${PORT}`));

















// require statements
// app config
// middleware
// db config
// ???
// api routes
// listen
