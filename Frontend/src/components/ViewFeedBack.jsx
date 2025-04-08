
import React from 'react';

export default function ViewFeedBack({ feedbackData = [] }) {
  if (feedbackData.length === 0) {
    return (
      <div className="text-center text-gray-500">
        <p>No feedback available.</p>
      </div>
    );
  }

  return (
    <div className="h-80 overflow-y-auto p-4 border border-gray-300 rounded-lg">
      {feedbackData.map((item, index) => (
        <div
          key={index}
          className="bg-gray-100 p-4 rounded shadow mb-3"
        >
          <div className="mb-1 font-semibold text-gray-900">{item.name}</div>
          <div className="mb-2 text-sm text-gray-600">{item.email}</div>
          <div className="text-gray-800 mb-2 break-words">{item.feedback}</div> {/* Added break-words */}
          {item.updatedAt && (
            <div className="text-right text-xs text-gray-500">
              {new Date(item.updatedAt).toLocaleString()}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}