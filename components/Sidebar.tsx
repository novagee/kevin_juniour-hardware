'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, LayoutDashboard, ArrowRightLeft, LogOut } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      label: 'Dashboard',
      href: '/admin/dashboard',
      icon: LayoutDashboard,
    },
    {
      label: 'Transactions',
      href: '/admin/transactions',
      icon: ArrowRightLeft,
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-20 left-4 z-40 p-2 bg-slate-900 text-white rounded-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white shadow-lg transition-transform duration-300 md:translate-x-0 z-30 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:top-0`}
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-linear-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-lg font-bold">
              JH
            </div>
            <span className="font-bold text-lg">Admin</span>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    active
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-300 hover:bg-slate-800'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Logout Button */}
        <div className="absolute bottom-6 left-6 right-6">
          <Link
            href="/admin/login"
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition-colors"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
