import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
          {/* <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1> */}
          <img src="/error-404.png" alt="404 Error" className="w-64 h-64 mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
      <p className="text-gray-600 mb-6 text-center">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hover:bg-purple-700"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
