const mongoose = require('mongoose');

// User model
const groupSchema = new mongoose.Schema({
    username: {
      type: String
    },
    firstname: {
      type: String
    },
    lastname: {
      type: String
    },
    password: {
      type: String
    }
  }, {
    collection: 'users'
  });

module.exports = mongoose.model('User', userSchema);