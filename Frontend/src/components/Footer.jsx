


import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 text-gray-600  text-center py-4 border-t">
      <p>© {currentYear} Feedback Compass</p>
      <p className="text-sm">Created by Tanmoy Majee </p>
    </footer>
  );
};

export default Footer;