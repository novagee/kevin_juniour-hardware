'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-linear-to-r from-slate-900 to-orange-500 text-white px-3 py-1 rounded-lg font-bold text-lg">
              JH
            </div>
            <span className="hidden sm:inline font-bold text-slate-900">
            new junior plumber hardware 
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-slate-700 hover:text-orange-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-slate-700 hover:text-orange-500 transition-colors"
            >
              Our Products
            </Link>
            <Link
              href="/admin/login"
              className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors"
            >
              Admin Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-slate-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-slate-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Our Products
            </Link>
            <Link
              href="/admin/login"
              className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors inline-block"
              onClick={() => setIsOpen(false)}
            >
              Admin Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
