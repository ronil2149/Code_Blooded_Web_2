// app/page.tsx

import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to GadgetRent</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Rent high-value gadgets like cameras, gaming consoles, laptops, and more, without the hefty price tag. A
        secure, affordable, and simple way to get the gadgets you need for your short-term needs.
      </p>
      <div>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg mx-2"
          onClick={() => window.location.href = '/signup'}
        >
          Sign Up
        </button>
        <button
          className="bg-transparent border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-lg text-lg mx-2"
          onClick={() => window.location.href = '/login'}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default HomePage;
