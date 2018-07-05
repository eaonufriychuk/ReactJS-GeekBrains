const mongoose = require('mongoose');

const post = mongoose.model('Post', new mongoose.Schema({
  title: String,
  body: String
}))

module.exports = post;