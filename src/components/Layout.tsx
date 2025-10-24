import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
    <header className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold text-indigo-700">MySite</div>
          <ul className="flex items-center gap-6 text-gray-700">
            <li className="hover:text-indigo-700 transition">Home</li>
            <li className="hover:text-indigo-700 transition">Blog</li>
            <li className="hover:text-indigo-700 transition">About</li>
            <li className="hover:text-indigo-700 transition">Contact</li>
          </ul>
        </nav>
      </div>
    </header>

    <main className="flex-1">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </main>

    <footer className="w-full bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm">
        © 2025 Your Name. All rights reserved.
      </div>
    </footer>
  </div>
);

export default Layout;
