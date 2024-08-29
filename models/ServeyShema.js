// models/Survey.js
const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  provider: String,
  currentProvider: String,
  usage: String,
  connection: String,
  speed: String,
  urgency: String,
  zipCode: String,
  email: String,
  firstName: String,
  lastName: String,
  phone: String,
  callBackTime: String,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Survey', surveySchema);
