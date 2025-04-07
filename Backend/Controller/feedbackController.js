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

// @desc    Get all feedback
// @route   GET /api/feedback
// @access  Private (Admin only)
const getAllFeedback = asyncHandler(async (req, res) => {
  const feedback = await Feedback.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: feedback.length,
    data: feedback
  });
});

// @desc    Get single feedback
// @route   GET /api/feedback/:id
// @access  Private (Admin only)
const getFeedbackById = asyncHandler(async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);

  if (!feedback) {
    res.status(404);
    throw new Error('Feedback not found');
  }

  res.status(200).json({
    success: true,
    data: feedback
  });
});

// @desc    Delete feedback
// @route   DELETE /api/feedback/:id
// @access  Private (Admin only)
const deleteFeedback = asyncHandler(async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);

  if (!feedback) {
    res.status(404);
    throw new Error('Feedback not found');
  }

  await feedback.deleteOne();

  res.status(200).json({
    success: true,
    data: {}
  });
});

module.exports = {
  createFeedback,
  getAllFeedback,
  getFeedbackById,
  deleteFeedback
};
