'use client';

import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    { name: 'Cordless Tools', href: '/products/cordless-tools' },
    { name: 'Power Tools', href: '/products/power-tools' },
    { name: 'Power Tool Accessories', href: '/products/product-accessories' },
    { name: 'Generators', href: '/products/generators' },
    { name: 'Welding Machine', href: '/products/welding' },
    { name: 'Small Construction Equipment', href: '/products/small-construction-equipment' },
    { name: 'Air Tools', href: '/products/air-tools' },
    { name: 'Water Pumps', href: '/products/water-pump' },
    { name: 'Measuring Tool', href: '/products/measuring-tool' },
  ];

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
            
            {/* Product Categories Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="flex items-center gap-1 text-slate-700 hover:text-orange-500 transition-colors"
              >
                Product Categories
                <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute left-0 mt-0 w-64 bg-white shadow-xl rounded-lg py-2 z-50"
                >
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={category.href}
                      className="block px-4 py-2 text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors text-sm font-medium"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              href="/pipe-and-fittings"
              className="text-slate-700 hover:text-orange-500 transition-colors"
            >
              Pipe & Fittings
            </Link>
            
            <Link
              href="/water-tanks"
              className="text-slate-700 hover:text-orange-500 transition-colors"
            >
              Water Tanks
            </Link>
            
            <Link
              href="/solar-panels"
              className="text-slate-700 hover:text-orange-500 transition-colors"
            >
              Solar Panels
            </Link>
            
            <Link
              href="/services"
              className="text-slate-700 hover:text-orange-500 transition-colors"
            >
              Our Services
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
            
            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left flex items-center justify-between text-slate-700 hover:text-orange-500 transition-colors"
              >
                Product Categories
                <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="mt-2 ml-4 border-l-2 border-orange-300 flex flex-col gap-2">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={category.href}
                      className="text-left py-1 text-slate-600 hover:text-orange-600 transition-colors text-sm font-medium"
                      onClick={() => {
                        setIsOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              href="/pipe-and-fittings"
              className="text-slate-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pipe & Fittings
            </Link>
            
            <Link
              href="/water-tanks"
              className="text-slate-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Water Tanks
            </Link>
            
            <Link
              href="/solar-panels"
              className="text-slate-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Solar Panels
            </Link>
            
            <Link
              href="/services"
              className="text-slate-700 hover:text-orange-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Our Services
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

