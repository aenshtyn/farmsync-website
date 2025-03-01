'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-gray-700 hover:text-green-700">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-gray-700 hover:text-green-700">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-green-700">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-gray-700 hover:text-green-700">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-700 hover:text-green-700">
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="https://dairy.farmsync.co.ke"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute right-0 top-10 mt-2 w-48 rounded-md bg-white py-2 shadow-lg md:hidden">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Products
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            href="/blog"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            href="https://dairy.farmsync.co.ke"
            className="block px-4 py-2 text-blue-600 hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}