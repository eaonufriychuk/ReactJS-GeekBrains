const mongoose = require('mongoose');

const comment = mongoose.model('Comment', new mongoose.Schema({
  username: String,
  text: String
}))

module.exports = comment;