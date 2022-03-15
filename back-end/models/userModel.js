const mongoose = require('mongoose');

// User model
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true
    },
    firstname: {
      type: String
    },
    lastname: {
      type: String
    },
    password: {
      type: String
    },
    addedOn: {
      type: String
    }
  }, {
    collection: 'users'
  });

module.exports = mongoose.model('User', userSchema);