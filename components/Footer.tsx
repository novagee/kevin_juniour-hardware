import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

// WhatsApp Icon Component
const WhatsAppIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.425 0-2.768-.356-3.464-1.009-.321-.31-.465-.633-.465-.99 0-.898.803-1.727 2.006-1.727 1.375 0 2.682.863 2.682 2.223 0 .565-.2.967-.524 1.306-.656.658-2.065 1.096-3.267 1.096-1.159-.018-.994.014-1.896-.014.1.046.146.082.446.282.3.201 1.176.771 1.576 1.032.394.26.768.416 1.043.416.275 0 .556-.042.827-.126.134-.034.263-.084.388-.148.124-.064.295-.158.476-.282.18-.123.338-.265.486-.41.048-.034.095-.072.14-.112.045-.04.086-.084.126-.13.04-.046.074-.097.1-.152.026-.055.04-.115.04-.175 0-.18-.12-.34-.343-.47-.222-.13-.579-.19-1.051-.19z" />
  </svg>
);

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
                <span></span>
              </div>
              <a
                href="https://wa.me/254701761622"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-500 transition-colors"
              >
                <WhatsAppIcon />
                <span>+254 701 761 622</span>
              </a>
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
              <Link href="/" className="hover:text-orange-500 transition-colors block">
                Home
              </Link>
              <Link href="/products" className="hover:text-orange-500 transition-colors block">
                Our Products
              </Link>
              <Link
                href="/admin/login"
                className="hover:text-orange-500 transition-colors block"
              >
                Admin Login
              </Link>
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
