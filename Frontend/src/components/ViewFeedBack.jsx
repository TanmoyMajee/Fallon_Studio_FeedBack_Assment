

export default function ViewFeedBack({ feedbackData = [] }) {
  if (feedbackData.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400">
        <p>No feedback available.</p>
      </div>
    );
  }

  return (
    <div className="h-80 overflow-y-auto p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
      {feedbackData.map((item, index) => (
        <div
          key={index}
          className="bg-gray-100 dark:bg-gray-700 p-4 rounded shadow mb-3"
        >
          <div className="mb-1 font-semibold text-gray-900 dark:text-gray-100">{item.name}</div>
          <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">{item.email}</div>
          <div className="text-gray-800 dark:text-gray-200 mb-2 break-words">{item.feedback}</div>
          {item.updatedAt && (
            <div className="text-right text-xs text-gray-500 dark:text-gray-400">
              {new Date(item.updatedAt).toLocaleString()}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}