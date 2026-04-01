import React from "react";

const NotFound = () => {
  const handleHomeClick = () => {
    console.log("Navigating to home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-800">
      <div className="w-full max-w-md text-center bg-transparent">
        <div className="mb-8">
          <h1 className="mb-4 font-bold text-white text-9xl">404</h1>
          <div className="w-16 h-1 mx-auto bg-blue-500"></div>
        </div>
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Page Not Found
        </h2>
        <p className="mb-8 text-gray-200">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <button
          className="w-full px-6 py-3 font-medium text-white transition-colors duration-200 bg-blue-600 rounded-md hover:bg-blue-700 sm:w-auto"
          onClick={handleHomeClick}
        >
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
