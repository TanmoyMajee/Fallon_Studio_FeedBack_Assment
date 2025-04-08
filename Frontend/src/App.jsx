

import React, { useState, useEffect } from 'react';
import FeedBackForm from './components/FeedBackForm';
import ViewFeedBack from './components/ViewFeedBack';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './theme.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('feedback');
  const [darkMode, setDarkMode] = useState(false);

  // Apply theme attribute to document (used by some plugins like DaisyUI)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const [feedbackData] = useState([
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      feedback: "Great service and wonderful support!",
      timestamp: "2023-01-01T00:00:00.000Z"
    },
    {
      name: "Bob Smith",
      email: "bob.smith@example.com",
      feedback: "I love using this product every day!",
      timestamp: "2023-02-05T12:34:56.789Z"
    },
    {
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
      feedback: "The user interface is intuitive but could use some improvements.",
      timestamp: "2023-03-10T08:20:30.123Z"
    }
  ]);

  return (
    // Use flex-col and h-screen (not min-h-screen) for exact viewport height
    <div className="flex flex-col h-screen">
      {/* Use py-4 instead of py-8 to reduce vertical space */}
      <header className="container mx-auto max-w-3xl px-4 pt-8 pb-4">
        {/* Theme Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 theme-button p-2 rounded-full shadow-md z-10"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        <h1 className="text-3xl font-bold text-center mb-2">Feedback Portal</h1>
        <p className="text-center mb-4">
          We value your opinion! Please share your thoughts or view feedback.
        </p>
      </header>

      {/* Main Content - use flex-grow to take available space */}
      <main className="flex-grow">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="card rounded-lg shadow-lg overflow-hidden">
            {/* Tab Headers */}
            <div className="flex w-full tab-header">
              <button
                className={`w-1/2 py-3 px-4 text-center font-medium transition-colors ${activeTab === 'feedback'
                    ? 'active-tab text-blue-500'
                    : 'inactive-tab text-gray-800 dark:text-gray-300'
                  }`}
                onClick={() => setActiveTab('feedback')}
              >
                Share Feedback
              </button>
              <button
                className={`w-1/2 py-3 px-4 text-center font-medium transition-colors ${activeTab === 'view'
                    ? 'active-tab text-blue-500'
                    : 'inactive-tab text-gray-800 dark:text-gray-300'
                  }`}
                onClick={() => setActiveTab('view')}
              >
                View Feedback
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6 h-full">
              {activeTab === 'feedback' ? <FeedBackForm /> : <ViewFeedBack feedbackData={feedbackData} />}
            </div>
          </div>
        </div>
      </main>

      {/* Footer - use flex-shrink-0 to prevent shrinking */}
      <Footer />

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} theme={darkMode ? 'dark' : 'light'} />
    </div>
  );
}
