// app/layout.tsx

import React from 'react';
import Link from 'next/link';
import './styles/globals.css'; // Import your global styles

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">GadgetRent</h1>
        <nav>
          <Link href="/" passHref>
            <a className="text-white px-4">Home</a>
          </Link>
          <Link href="/login" passHref>
            <a className="text-white px-4">Login</a>
          </Link>
          <Link href="/signup" passHref>
            <a className="text-white px-4">Sign Up</a>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer Section */}
      <footer className="bg-gray-800 p-4 text-white text-center">
        <p>© 2025 GadgetRent - Rent Gadgets, Simplified.</p>
      </footer>
    </div>
  );
};

export default Layout;
