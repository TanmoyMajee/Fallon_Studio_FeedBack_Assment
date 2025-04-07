import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mt-8 py-6">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-1">
            © {currentYear} Feedback Compass
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Created by Your Name - Candidate Submission
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;