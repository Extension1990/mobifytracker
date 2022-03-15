const mongoose = require('mongoose');

// Group model
const groupSchema = new mongoose.Schema({
    groupname: {
      type: String,
    },
    userid: {
      type: String,
    },
    members: [
      member = {
        memberid: String,
        username: String,
        firstname: String,
        lastname: String,
      }
    ]
  }, {
    collection: 'groups'
  });

module.exports = mongoose.model('Group', groupSchema);