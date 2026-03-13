'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Navbar, Footer } from '@/components/index';
import {
  Zap,
  MessageSquare,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

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

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/pipe.jpeg', '/tank.jpeg', '/cera.jpeg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);
  const features = [
    {
      icon: Zap,
      title: 'Instant Payment Confirmation',
      description:
        'Get real-time confirmation of M-Pesa transactions directly to your dashboard',
    },
    {
      icon: MessageSquare,
      title: 'Automatic SMS Appreciation',
      description:
        'Customers receive instant SMS appreciation messages after successful payments',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Revenue Dashboard',
      description:
        'Monitor sales and revenue with comprehensive analytics in real-time',
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section - New Junior Hardware */}
      <section className="bg-linear-to-br from-slate-900 via-slate-900 to-slate-800 text-white py-12 md:py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-orange-500/20 text-orange-400 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
                ✨ Now Available
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                New <span className="text-orange-500">Junior Hardware</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-4 sm:mb-8">
                Professional-one stop for hardware solutions 
              </p>
              <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
                unlock  cutting-edge hardware solutions services, product and materials 
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/pay"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-sm sm:text-base"
                >
                  Order Now
                  <ArrowRight size={18} className="hidden sm:block" />
                </Link>
                <Link
                  href="/admin/login"
                  className="inline-flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-sm sm:text-base"
                >
                  Learn More
                  <ArrowRight size={18} className="hidden sm:block" />
                </Link>
              </div>
            </div>

            {/* Right - Hardware Splash Image Slideshow */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-80 lg:h-96">
                {/* Glow effect background */}
                <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-red-600 rounded-3xl blur-2xl opacity-30"></div>
                
                {/* Hardware showcase container with slideshow */}
                <div className="relative h-full bg-linear-to-br from-orange-400 via-orange-500 to-red-600 rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl">
                  {/* Slideshow Images */}
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Product ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                  
                  {/* Overlay gradient for better text readability if needed */}
                  <div className="absolute inset-0 bg-black/30"></div>
                  
                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentImageIndex
                            ? 'bg-white w-8'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-12 sm:py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our <span className="text-orange-500">Products</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium quality hardware and plumbing fixtures for professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
            {/* Pipes Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-56 w-full bg-gray-200">
                <Image
                  src="/pipe.jpeg"
                  alt="Pipes"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Pipes</h3>
                <p className="text-gray-600 mb-4">High-quality durable pipes for all plumbing needs</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Durable</span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Long-lasting</span>
                </div>
                <p className="text-lg font-bold text-orange-500 mb-4">From KES 5,000</p>
                <a
                  href="https://wa.me/254701761622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon />
                  Order via WhatsApp
                </a>
              </div>
            </div>

            {/* Tanks Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-56 w-full bg-gray-200">
                <Image
                  src="/tank.jpeg"
                  alt="Tanks"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Tanks</h3>
                <p className="text-gray-600 mb-4">Premium water storage tanks for residential and commercial use</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Large Capacity</span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Leak-proof</span>
                </div>
                <p className="text-lg font-bold text-orange-500 mb-4">From KES 15,000</p>
                <a
                  href="https://wa.me/254701761622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon />
                  Order via WhatsApp
                </a>
              </div>
            </div>

            {/* Ceramic Fixtures Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-56 w-full bg-gray-200">
                <Image
                  src="/cera.jpeg"
                  alt="Ceramic Fixtures"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Ceramic Fixtures</h3>
                <p className="text-gray-600 mb-4">Premium ceramic bathroom and kitchen fixtures</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Modern Design</span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Durable</span>
                </div>
                <p className="text-lg font-bold text-orange-500 mb-4">From KES 3,500</p>
                <a
                  href="https://wa.me/254701761622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon />
                  Order via WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Why Choose Our Payment System?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-2">
              Streamline your payment process with our intelligent, automated
              solution designed for hardware businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow border border-slate-200"
                >
                  <div className="bg-orange-500 text-white p-3 sm:p-4 rounded-xl w-fit mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 md:py-32 bg-linear-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Transform Your Payments?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join us today and start accepting M-Pesa payments with automatic
            notifications and real-time insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/pay"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-sm sm:text-base"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+254712345678"
              className="inline-flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Call Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

