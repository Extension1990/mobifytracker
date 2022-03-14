const mongoose = require('mongoose');

// User model
const userSchema = new mongoose.Schema({
    username: {
      type: String
    },
    firstname: {
      type: Number
    },
    lastname: {
      type: String
    }
  }, {
    collection: 'users'
  });

module.exports = mongoose.model('User', userSchema);