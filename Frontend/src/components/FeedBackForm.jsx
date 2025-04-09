

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function FeedBackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !feedback) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/feedback', {
        name,
        email,
        feedback,
      });
      toast.success(response.data.message || 'Feedback submitted successfully!');
      setName('');
      setEmail('');
      setFeedback('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast.error(error.response?.data?.message || 'Failed to submit feedback. Please try again.');
    }
  };


 return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-2 font-medium dark:text-gray-300">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          className="w-full p-2 border border-gray-300  bg-white  text-gray-900  rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 font-medium dark:text-gray-300">
          Email Address
        </label>
        <input
          type="email"
id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 bg-white  text-gray-900  rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="feedback" className="block mb-2 font-medium dark:text-gray-300">
          Feedback
        </label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Share your thoughts, suggestions, or experiences..."
          rows="4"
          className="w-full p-2 border border-gray-300  bg-white  text-gray-900  rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  </div>
      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Submit Feedback
      </button>
    </form>
  );

}