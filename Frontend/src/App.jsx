

// // import React, { useState, useEffect } from 'react';
// // import FeedBackFrom from './components/FeedBackForm';
// // import ViewFeedBack from './components/ViewFeedBack';
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import './theme.css'; // You'll need to create this CSS file
// // import Footer from './components/Footer';

// // export default function App() {
// //   const [activeTab, setActiveTab] = useState('feedback');
// //   const [darkMode, setDarkMode] = useState(false);

// //   // Apply theme attribute to document
// //   useEffect(() => {
// //     document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
// //   }, [darkMode]);

// // // useEffect(()=>{
// // //   toast.success("hskjdfhjkshf")
// // // },[])

// //   return (
// //     <div className="min-h-screen">
// //       <div className="container mx-auto  max-w-3xl px-4 py-8">
// //         {/* Simple theme toggle button */}
// //         <button
// //           onClick={() => setDarkMode(!darkMode)}
// //           className="fixed top-4 right-4 theme-button p-2 rounded-full shadow-md"
// //           // aria-label="Toggle dark mode"
// //         >
// //           {darkMode ? '☀️' : '🌙'}
// //         </button>

// //         <h1 className="text-3xl font-bold text-center mb-2">Feedback Portal</h1>
// //         <p className="text-center secondary-text mb-8">
// //           We value your opinion! Please share your thoughts or view feedback.
// //         </p>

// //         <div className="card rounded-lg shadow-lg overflow-hidden">
// //           {/* Tab Headers */}
// //           <div className="flex w-full tab-header">
// //             <button
// //               className={`w-1/2 py-3 px-4 text-center font-medium ${activeTab === 'feedback' ? 'active-tab' : 'inactive-tab'
// //                 }`}
// //               onClick={() => setActiveTab('feedback')}
// //             >
// //               Share Feedback
// //             </button>
// //             <button
// //               className={`w-1/2 py-3 px-4 text-center font-medium ${activeTab === 'view' ? 'active-tab' : 'inactive-tab'
// //                 }`}
// //               onClick={() => setActiveTab('view')}
// //             >
// //               View Feedback
// //             </button>
// //           </div>

// //           {/* Tab Content */}
// //           <div className="p-6">
// //             {activeTab === 'feedback' ? <FeedBackFrom /> : <ViewFeedBack />}
// //           </div>
// //         </div>

// //         <ToastContainer position="top-right" autoClose={3000} theme={darkMode ? 'dark' : 'light'} />
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from 'react';
// import FeedBackForm from './components/FeedBackForm';
// import ViewFeedBack from './components/ViewFeedBack';
// import Footer from './components/Footer';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './theme.css'; // Ensure this CSS file manages your theme styles

// export default function App() {
//   const [activeTab, setActiveTab] = useState('feedback');
//   const [darkMode, setDarkMode] = useState(false);

//   // Apply theme attribute to document
//   useEffect(() => {
//     document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
//   }, [darkMode]);

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Header Section */}
//       <header className="container mx-auto max-w-3xl px-4 py-8">
//         {/* Theme Toggle Button */}
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="fixed top-4 right-4 theme-button p-2 rounded-full shadow-md"
//           aria-label="Toggle dark mode"
//         >
//           {darkMode ? '☀️' : '🌙'}
//         </button>

//         <h1 className="text-3xl font-bold text-center mb-2">Feedback Portal</h1>
//         <p className="text-center secondary-text mb-8">
//           We value your opinion! Please share your thoughts or view feedback.
//         </p>
//       </header>

//       {/* Main Content Section */}
//       <main className="flex-1">
//         <div className="container mx-auto max-w-3xl px-4">
//           <div className="card rounded-lg shadow-lg overflow-hidden">
//             {/* Tab Headers */}
//             <div className="flex w-full tab-header">
//               <button
//                 className={`w-1/2 py-3 px-4 text-center font-medium ${activeTab === 'feedback' ? 'active-tab' : 'inactive-tab'
//                   }`}
//                 onClick={() => setActiveTab('feedback')}
//               >
//                 Share Feedback
//               </button>
//               <button
//                 className={`w-1/2 py-3 px-4 text-center font-medium ${activeTab === 'view' ? 'active-tab' : 'inactive-tab'
//                   }`}
//                 onClick={() => setActiveTab('view')}
//               >
//                 View Feedback
//               </button>
//             </div>

//             {/* Tab Content */}
//             <div className="p-6">
//               {activeTab === 'feedback' ? <FeedBackForm /> : <ViewFeedBack />}
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer Section */}
//       <Footer />

//       {/* Toast Notifications */}
//       <ToastContainer position="top-right" autoClose={3000} theme={darkMode ? 'dark' : 'light'} />
//     </div>
//   );
// }
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

  // Apply theme attribute to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    // Use flex-col and h-screen (not min-h-screen) for exact viewport height
    <div className="flex flex-col h-screen">
      {/* Use py-4 instead of py-8 to reduce vertical space */}
      <header className="container mx-auto max-w-3xl px-4 pt-8 pb-4">
        {/* Theme Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 theme-button p-2 rounded-full shadow-md z-10"
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        <h1 className="text-3xl font-bold text-center mb-2">Feedback Portal</h1>
        <p className="text-center secondary-text mb-4">
          We value your opinion! Please share your thoughts or view feedback.
        </p>
      </header>

      {/* Main Content - use flex-grow to take available space */}
      <main className="flex-grow overflow-auto">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="card rounded-lg shadow-lg overflow-hidden">
            {/* Tab Headers */}
            <div className="flex w-full tab-header">
              <button
                className={`w-1/2 py-3 px-4 text-center font-medium ${activeTab === 'feedback' ? 'active-tab' : 'inactive-tab'
                  }`}
                onClick={() => setActiveTab('feedback')}
              >
                Share Feedback
              </button>
              <button
                className={`w-1/2 py-3 px-4 text-center font-medium ${activeTab === 'view' ? 'active-tab' : 'inactive-tab'
                  }`}
                onClick={() => setActiveTab('view')}
              >
                View Feedback
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'feedback' ? <FeedBackForm /> : <ViewFeedBack />}
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