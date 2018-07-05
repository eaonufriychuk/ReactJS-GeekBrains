const mongoose = require('mongoose');

const user = mongoose.model('User', new mongoose.Schema({
  name: String,
  username: String,
  email: String
}))

module.exports = user;