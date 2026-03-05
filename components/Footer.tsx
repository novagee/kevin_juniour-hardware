import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-linear-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-lg font-bold">
                JH
              </div>
              <span className="font-bold text-lg">Junior Hardware</span>
            </div>
            <p className="text-gray-400 text-sm">
              Smart Payment System for seamless M-Pesa transactions
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-orange-500" />
                <span>+254 712 345 678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-orange-500" />
                <span>support@juniorhardware.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-orange-500" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="/" className="hover:text-orange-500 transition-colors">
                Home
              </a>
              <a href="/pay" className="block hover:text-orange-500 transition-colors">
                How to Pay
              </a>
              <a
                href="/admin/login"
                className="block hover:text-orange-500 transition-colors"
              >
                Admin Portal
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Junior Hardware Smart Payment System. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
