import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FeedBackForm from './components/FeedBackForm';
import ViewFeedBack from './components/ViewFeedBack';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('feedback');
  const [loading, setLoading] = useState(false);
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    if (activeTab === 'view' ) {
      setLoading(true);
      axios
        .get('http://localhost:5000/api/feedback')
        .then((response) => {
          console.log('Feedback data:', response);
          setFeedbackData(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching feedback:', error);
          setLoading(false);
        });
    }
  }, [activeTab]);

  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-900">
      <header className="container mx-auto max-w-3xl px-4 pt-8 pb-4">
        <h1 className="text-3xl font-bold text-center mb-2">Feedback Portal</h1>
        <p className="text-center mb-4">
          We value your opinion! Please share your thoughts or view feedback.
        </p>
      </header>

      <main className="flex-grow">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="card rounded-lg shadow-lg overflow-hidden bg-white">
            <div className="flex w-full border-b">
              <button
                className={`w-1/2 py-3 px-4 text-center font-medium ${
                  activeTab === 'feedback'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-600'
                }`}
                onClick={() => setActiveTab('feedback')}
              >
                Share Feedback
              </button>
              <button
                className={`w-1/2 py-3 px-4 text-center font-medium ${
                  activeTab === 'view'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-600'
                }`}
                onClick={() => setActiveTab('view')}
              >
                View Feedback
              </button>
            </div>
            <div className="p-6">
              {activeTab === 'feedback' ? (
                <FeedBackForm />
              ) : loading ? (
           <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <ViewFeedBack feedbackData={feedbackData} />
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
