const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// init app
const app = express();

// Enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
// db URL, ⚠️ use an environment variable for this
const DB_URL = process.env.DB_URL || 'mongodb+srv://Extension:Koketso@mongodb2022@cluster0.ygkiz.mongodb.net/myChatApp?retryWrites=true&w=majority';
// get Port from .environment variable or use 3000
const PORT = process.env.PORT || 3000;
// routes
const userRoute = require('./routes/usersRoute');
const authRoute = require('./routes/authRoute');
const groupRoute = require('./routes/groupsRoute');
const channelRoute = require('./routes/channelRoute');
//import dotenv
require('dotenv').config();

// log
app.use(morgan('dev'));
// use cross origine access
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// use routes
app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/groups', groupRoute);
app.use('/channels', channelRoute);

mongoose.Promise = global.Promise;
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(
    () => console.log('Database connected'),
    (error) => console.log('Database error: ' + error)
  );

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).json({ error: err.message });
});

app.listen(PORT, () => console.log(`App listening on port:${PORT}`));