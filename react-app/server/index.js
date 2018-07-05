const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userModel = require('./models/user');
const postModel = require('./models/post');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/user');

app.get('/', (req, res) => res.send('OK'));

app.get('/users', (req, res) => {
  userModel.find({}, (err, result) => {
    if (!err && result) {
      res.status(200).json(result)
    } else {
      res.status(404).send('not found');
    }
  })
})

app.get('/users/:id', (req, res) => {
  userModel.findById(req.params.id, (err, result) => {
    if (!err && result) {
      res.status(200).json(result)
    } else {
      res.status(404).send('not found');
    }
  })
})

app.get('/posts', (req, res) => {
  postModel.find({}, (err, result) => {
    if (!err && result) {
      res.status(200).json(result)
    } else {
      res.status(404).send('not found');
    }
  })
})

app.listen(3008, () => console.log('server started'));