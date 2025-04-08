import React from 'react';

export default function ViewFeedBack({ feedbackData = [] }) {
  // Display a placeholder message if there's no feedback
  if (feedbackData.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400">
        <p>No feedback available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {feedbackData.map((item, index) => (
        <div
          key={index}
          // Light mode = white background; Dark mode = dark gray background
          className="bg-white dark:bg-gray-800 p-4 rounded shadow"
        >
          {/* Name */}
          <div className="mb-1 text-gray-900 dark:text-white font-semibold">
            {item.name}
          </div>

          {/* Email */}
          <div className="mb-2 text-sm text-gray-600 dark:text-gray-300">
            {item.email}
          </div>

          {/* Feedback Message */}
          <div className="text-gray-800 dark:text-gray-200 mb-2">
            {item.feedback}
          </div>

          {/* Timestamp (if provided) */}
          {item.timestamp && (
            <div className="text-right text-xs text-gray-500 dark:text-gray-400">
              {new Date(item.timestamp).toLocaleString()}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
