
import React from 'react';
import './styles/globals.css'; // Import global styles

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Renthub</title>
        {/* You can include additional head elements here like meta tags, favicon, etc. */}
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          {/* Header Section */}
          <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
            <h1 className="text-xl font-bold">GadgetRent</h1>
          </header>

          {/* Main Content */}
          <main className="flex-grow">{children}</main>

          {/* Footer Section */}
          <footer className="bg-gray-800 p-4 text-white text-center">
            <p>© 2025 GadgetRent - Rent Gadgets, Simplified.</p>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
