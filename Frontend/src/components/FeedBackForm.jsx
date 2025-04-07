import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function FeedBackFrom() {
  // Using separate state variables for each field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  // Handle change functions for each field
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !feedback) {
      toast.error('Please fill in all fields');
      return;
    }

    // Submit logic would go here
    toast.success('Feedback submitted successfully!');

    // Reset form
    setName('');
    setEmail('');
    setFeedback('');
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your full name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email address"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="feedback" className="block mb-2 font-medium">
            Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Share your thoughts, suggestions, or experiences..."
            rows="4"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}