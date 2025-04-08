const Feedback = require('../models/feedBack');
const asyncHandler = require('express-async-handler');

// @desc    Create new feedback
// @route   POST /api/feedback
// @access  Public
const createFeedback = asyncHandler(async (req, res) => {
  const { name, email, feedback } = req.body;

  const newFeedback = await Feedback.create({
    name,
    email,
    feedback
  });

  res.status(201).json({
    success: true,
    data: newFeedback
  });
});

const getAllFeedback = asyncHandler(async (req, res) => {
  const feedback = await Feedback.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: feedback.length,
    data: feedback
  });
});





module.exports = {
  createFeedback,
  getAllFeedback,

};
