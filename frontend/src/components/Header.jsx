import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="text-white py-4 shadow-lg mb-6">
      <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <div className="flex items-center space-x-3 mb-2 sm:mb-0">
          <img
            src="/voxstudii.png"
            alt="VoxStudii Logo"
            className="h-10 w-10 rounded-full shadow object-cover"
          />
          <span className="text-xl font-bold">VoxStudii</span>
        </div>
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 items-center">
          <li>
            <Link to="/" className="hover:text-blue-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-300">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-300">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}