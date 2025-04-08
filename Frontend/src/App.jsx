


// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import FeedBackForm from './components/FeedBackForm';
// import ViewFeedBack from './components/ViewFeedBack';
// import Footer from './components/Footer';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// // import './theme.css';

// export default function App() {
//   const [activeTab, setActiveTab] = useState('feedback');
//   const [darkMode, setDarkMode] = useState(false);
//   const [Loading,setLoading] = useState(false);
//   const [feedbackData,setFeedbackData] = useState([]);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get('http://localhost:5000/api/feedback')
//       .then((response) => {
//         setFeedbackData(response.data.data);
//         console.log(response);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching feedback:', error);
//         setLoading(false);
//       });
//   }, [activeTab=='feedback']);

//   // Toggle the dark class on the document element
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   return (
//     <div className="flex flex-col h-screen ">
//       <header className="container mx-auto max-w-3xl px-4 pt-8 pb-4">
//         {/* Theme Toggle Button */}
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="fixed top-4 right-4 theme-button p-2 rounded-full shadow-md z-10"
//         >
//           {darkMode ? '☀️' : '🌙'}
//         </button>

//         <h1 className="text-3xl font-bold text-center mb-2">Feedback Portal</h1>
//         <p className="text-center mb-4">
//           We value your opinion! Please share your thoughts or view feedback.
//         </p>
//       </header>

//       <main className="flex-grow">
//         <div className="container mx-auto max-w-3xl px-4">
//           <div className="card rounded-lg shadow-lg overflow-hidden">
//             <div className="flex w-full tab-header">
//               <button
//                 className={`w-1/2 py-3 px-4 text-center font-medium transition-colors ${activeTab === 'feedback'
//                   ? 'active-tab text-blue-500'
//                   : 'inactive-tab text-gray-800 dark:text-gray-300'
//                   }`}
//                 onClick={() => setActiveTab('feedback')}
//               >
//                 Share Feedback
//               </button>
//               <button
//                 className={`w-1/2 py-3 px-4 text-center font-medium transition-colors ${activeTab === 'view'
//                   ? 'active-tab text-blue-500'
//                   : 'inactive-tab text-gray-800 dark:text-gray-300'
//                   }`}
//                 onClick={() => setActiveTab('view')}
//               >
//                 View Feedback
//               </button>
//             </div>
//             <div className="p-6 h-full">
//               {activeTab === 'feedback' ? <FeedBackForm /> : <ViewFeedBack feedbackData={feedbackData} />}
//             </div>
//           </div>
//         </div>
//       </main>

//       <Footer />

//       <ToastContainer position="top-right" autoClose={3000} theme={darkMode ? 'dark' : 'light'} />
//     </div>
//   );
// }


import axios from 'axios';
import React, { useState, useEffect } from 'react';
import FeedBackForm from './components/FeedBackForm';
import ViewFeedBack from './components/ViewFeedBack';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './theme.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('feedback');
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5000/api/feedback')
      .then((response) => {
        setFeedbackData(response.data.data);
        console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching feedback:', error);
        setLoading(false);
      });
  }, [activeTab === 'feedback']); // This is actually another issue - should be fixed

  // Toggle the dark class on the document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <header className="container mx-auto max-w-3xl px-4 pt-8 pb-4">
        {/* Theme Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 theme-button p-2 rounded-full shadow-md z-10 bg-gray-100 dark:bg-gray-700"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        <h1 className="text-3xl font-bold text-center mb-2">Feedback Portal</h1>
        <p className="text-center mb-4">
          We value your opinion! Please share your thoughts or view feedback.
        </p>
      </header>

      <main className="flex-grow">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="card rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-700">
            <div className="flex w-full tab-header">
              <button
                className={`w-1/2 py-3 px-4 text-center font-medium transition-colors ${activeTab === 'feedback'
                    ? 'active-tab text-blue-500 bg-gray-50 dark:bg-gray-600'
                    : 'inactive-tab text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-800'
                  }`}
                onClick={() => setActiveTab('feedback')}
              >
                Share Feedback
              </button>
              <button
                className={`w-1/2 py-3 px-4 text-center font-medium transition-colors ${activeTab === 'view'
                    ? 'active-tab text-blue-500 bg-gray-50 dark:bg-gray-600'
                    : 'inactive-tab text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-800'
                  }`}
                onClick={() => setActiveTab('view')}
              >
                View Feedback
              </button>
            </div>
            <div className="p-6 h-full dark:bg-gray-700">
              {activeTab === 'feedback' ? <FeedBackForm /> : <ViewFeedBack feedbackData={feedbackData} />}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <ToastContainer position="top-right" autoClose={3000} theme={darkMode ? 'dark' : 'light'} />
    </div>
  );
}