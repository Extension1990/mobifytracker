const mongoose = require('mongoose');

messageSchema = new mongoose.Schema({
  from: {
    type: string,
    required: true,
  },
  to: {
    type: string,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now(),
  },
  message: {
    type: string,
    required: true,
  },
});

ChatSchema = new mongoose.Schema({
  firstUserId:{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
  },
  secondUserId:{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
  },
  Chat: messageSchema,
})

module.exports = mongoose.model('Message', messageSchema);