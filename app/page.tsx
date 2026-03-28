'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Navbar, Footer } from '@/components/index';
import {
  ArrowRight,
  ChevronDown,
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);
  const images = ['/junior%20new/front%20view.jpeg', '/junior%20new/new%20junior%20h.jpeg', '/junior%20new/view%20hardware.jpeg', '/junior%20new/kitchen%20sink.jpeg', '/junior%20new/junior%20pipes.jpeg'];

  const partners = [
    { name: 'Aura Stack', logo: '/partner/logo_aura-removebg-preview.png', subtitle: 'Software Company' },
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const partnerInterval = setInterval(() => {
      setCurrentPartnerIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 4000); // Change partner every 4 seconds

    return () => clearInterval(partnerInterval);
  }, [partners.length]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.querySelector('.relative.group');
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <>
      <Navbar />

      {/* Hero Section - New Junior Hardware */}
      <section className="bg-linear-to-br from-slate-900 via-slate-900 to-slate-800 text-white py-12 md:py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
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

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="https://wa.me/254701761622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto"
                >
                  Order Now
                  <ArrowRight size={18} className="hidden sm:block" />
                </a>
                <a
                  href="https://wa.me/254701761622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto"
                >
                  Learn More
                  <ArrowRight size={18} className="hidden sm:block" />
                </a>
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
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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

      {/* Products Categories Section */}
      <section className="py-12 sm:py-20 md:py-32 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Featured Product <span className="text-orange-500">Categories</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Premium quality hardware and plumbing fixtures for professionals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12">
            {/* Pipes Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 mx-auto w-full max-w-sm">
              <div className="relative h-56 w-full bg-gray-200">
                <Image
                  src="/pipe.jpeg"
                  alt="Pipes"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-2">Pipes</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">High-quality durable pipes for all plumbing needs</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">Durable</span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">Long-lasting</span>
                </div>
                <a
                  href="https://wa.me/254701761622"
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <WhatsAppIcon />
                  Order via WhatsApp
                </a>
              </div>
            </div>

            {/* Tanks Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 mx-auto w-full max-w-sm">
              <div className="relative h-56 w-full bg-gray-200">
                <Image
                  src="/tank.jpeg"
                  alt="Tanks"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-2">Tanks</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">Premium water storage tanks for residential and commercial use</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">Large Capacity</span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">Leak-proof</span>
                </div>
                <a
                  href="https://wa.me/254701761622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
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

            {/* INGCO Tools Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-56 w-full bg-gray-200">
                <Image
                  src="/ingco/junior%20yellow.jpeg"
                  alt="INGCO Tools"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">INGCO Tools</h3>
                <p className="text-gray-600 mb-4">Professional power tools for hardware enthusiasts</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Modern</span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Professional</span>
                </div>
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

            {/* INGCO Professional Tools Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-56 w-full bg-gray-200">
                <Image
                  src="/ingco/junior%20ingco.jpeg"
                  alt="INGCO Professional Tools"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">INGCO Professional</h3>
                <p className="text-gray-600 mb-4">Heavy-duty professional tools for construction work</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Heavy Duty</span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Durable</span>
                </div>
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

            {/* INGCO Showers Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-56 w-full bg-gray-200">
                <Image
                  src="/ingco/showers.jpeg"
                  alt="INGCO Showers"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Showers</h3>
                <p className="text-gray-600 mb-4">Modern shower systems and fixtures for your bathroom</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Modern Design</span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Premium Quality</span>
                </div>
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

            {/* Davis Shirtlift Products */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-56 w-full bg-gray-200">
                <Image
                  src="/ingco/davis%20shirtlift%20products.jpeg"
                  alt="Davis Shirtlift Products"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Davis Shirtlift</h3>
                <p className="text-gray-600 mb-4">Premium lifting and handling equipment for professional use</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Professional Grade</span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Heavy Duty</span>
                </div>
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

            {/* Sanitary Wares Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-56 w-full bg-gray-200">
                <Image
                  src="/ingco/sanitary%20wares.jpeg"
                  alt="Sanitary Wares"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Sanitary Wares</h3>
                <p className="text-gray-600 mb-4">High-quality bathroom and kitchen sanitary fixtures</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Premium Quality</span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">Durable</span>
                </div>
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
            <div className="relative group">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-sm sm:text-lg"
              >
                View All Products
                <ChevronDown size={20} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 w-64 bg-white text-slate-900 rounded-lg shadow-2xl z-50 overflow-hidden">
                  <div className="max-h-96 overflow-y-auto">
                    {categories.map((category, index) => (
                      <a
                        key={index}
                        href="https://wa.me/254701761622"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 hover:bg-orange-50 transition-colors border-b border-gray-100 text-sm font-medium last:border-b-0"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {category.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/254701761622"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 bg-orange-100 text-orange-700 font-semibold text-center hover:bg-orange-200 transition-colors text-sm"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    View All Categories
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Slideshow Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our <span className="text-orange-500">Partners</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted partnerships with leading brands and suppliers
            </p>
          </div>

          {/* Partners Carousel */}
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {/* Left Arrow */}
            <button
              onClick={() => setCurrentPartnerIndex((prevIndex) => (prevIndex - 1 + partners.length) % partners.length)}
              className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors shrink-0"
              aria-label="Previous partner"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            {/* Carousel Container */}
            <div className="flex-1 relative bg-white rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto w-full">
              <div className="h-48 sm:h-56 md:h-64 flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 relative">
                {/* Current Partner Logo */}
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                      index === currentPartnerIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain p-4"
                        priority={index === currentPartnerIndex}
                      />
                    </div>
                  </div>
                ))}
                
                {/* Partner Name */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent py-4 sm:py-6 text-center">
                  <p className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                    {partners[currentPartnerIndex].name}
                  </p>
                  {partners[currentPartnerIndex].subtitle && (
                    <p className="text-gray-200 text-xs sm:text-sm mt-1">
                      {partners[currentPartnerIndex].subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Indicators */}
              <div className="flex justify-center gap-2 py-4 px-4 bg-gray-50">
                {partners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPartnerIndex(index)}
                    className={`transition-all rounded-full ${
                      index === currentPartnerIndex
                        ? 'bg-orange-500 w-8 h-3'
                        : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                    }`}
                    aria-label={`Go to partner ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => setCurrentPartnerIndex((prevIndex) => (prevIndex + 1) % partners.length)}
              className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors shrink-0"
              aria-label="Next partner"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="sm:hidden flex justify-center gap-3 mt-6">
            <button
              onClick={() => setCurrentPartnerIndex((prevIndex) => (prevIndex - 1 + partners.length) % partners.length)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors"
              aria-label="Previous partner"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button
              onClick={() => setCurrentPartnerIndex((prevIndex) => (prevIndex + 1) % partners.length)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors"
              aria-label="Next partner"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

