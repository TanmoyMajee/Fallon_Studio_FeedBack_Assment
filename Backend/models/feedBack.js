const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  feedback: {
    type: String,
    required: [true, 'Please provide your feedback'],
    trim: true
  }
}, {
  timestamps: true
});

const feedback = mongoose.model('Feedback_Assessment', feedbackSchema);
module.exports = feedback;

