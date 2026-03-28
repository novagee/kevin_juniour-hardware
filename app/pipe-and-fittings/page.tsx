'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Navbar } from '@/components';
import Footer from '@/components/Footer';

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

export default function PipeAndFittings() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slideImages = [
    {
      src: '/pipes/pipe g.jpeg',
      alt: 'Pipes Collection',
    },
    {
      src: '/pipes/pipe uvpc grouped.jpeg',
      alt: 'UPVC Grouped Pipes',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideImages.length]);

  const goToSlide: (index: number) => void = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  const products = [
    {
      id: 1,
      model: 'PVC-PIPE',
      name: 'PVC Pipes',
      category: 'PVC Pipes',
      image: '/pipes/pipe.png',
      specs: [
        'Available Sizes: 20mm, 25mm, 32mm',
        'Length: 6 meters',
        'Pressure Rating: 10 bar',
        'Food Grade Quality',
      ],
      price: 'Contact for Price',
    },
    {
      id: 2,
      model: 'ELB-90',
      name: 'Elbow 90°',
      category: 'Elbow Fittings',
      image: '/pipes/pipes%20fitting.png',
      specs: [
        'Available Sizes: 20mm, 25mm, 32mm',
        'Angle: 90 degrees',
        'Material: PVC',
        'Professional Grade Connection',
      ],
      price: 'Contact for Price',
    },
    {
      id: 3,
      model: 'TEE-JOINT',
      name: 'T-Joint Fitting',
      category: 'T-Joint Fittings',
      image: '/pipes/pipes%20fitting.png',
      specs: [
        'Available Sizes: 20mm, 25mm, 32mm',
        'Material: PVC',
        'Equal branching design',
        'Leak-proof construction',
      ],
      price: 'Contact for Price',
    },
    {
      id: 4,
      model: 'COUPLER',
      name: 'Coupler',
      category: 'Couplers',
      image: '/pipes/pipe.png',
      specs: [
        'Available Sizes: 20mm, 25mm, 32mm',
        'Material: PVC',
        'Straight connection type',
        'Threaded design',
      ],
      price: 'Contact for Price',
    },
    {
      id: 5,
      model: 'END-CAP',
      name: 'End Cap',
      category: 'End Caps',
      image: '/pipes/pipe.png',
      specs: [
        'Available Sizes: 20mm, 25mm, 32mm',
        'Material: PVC',
        'Prevents water loss',
        'Durable quality',
      ],
      price: 'Contact for Price',
    },
    {
      id: 6,
      model: 'VALVE-BALL',
      name: 'Ball Valve',
      category: 'Ball Valves',
      image: '/pipes/pipes%20fitting.png',
      specs: [
        'Size: 20mm',
        'Type: Ball Valve',
        'Material: Brass body',
        'Handles: Red plastic',
      ],
      price: 'Contact for Price',
    },
    {
      id: 7,
      model: 'UPV-PIPE',
      name: 'UPV Pipes',
      category: 'Specialty Pipes',
      image: '/pipes/upv%20pipes.jpg',
      specs: [
        'Material: Unplasticized PVC',
        'Sizes: 20mm, 25mm, 32mm',
        'High strength',
        'Long lasting durability',
      ],
      price: 'Contact for Price',
    },
    {
      id: 8,
      model: 'FITTING-SET',
      name: 'Fitting Assortment',
      category: 'Complete Sets',
      image: '/pipes/pipes%20fitting.png',
      specs: [
        'Mixed fittings package',
        'Includes: Elbows, T-joints, Couplers',
        'Multiple sizes included',
        'Professional quality',
      ],
      price: 'Contact for Price',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with Slideshow */}
        <section className="relative h-80 sm:h-96 md:h-screen overflow-hidden bg-slate-900">
          {/* Slideshow Container */}
          <div className="relative w-full h-full">
            {/* Slideshow Images */}
            {slideImages.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full"
                  style={{ objectFit: 'cover', display: 'block' }}
                  onError={() => console.log('Image failed to load:', slide.src)}
                />
              </div>
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 z-1 bg-linear-to-r from-black/50 via-black/40 to-black/50" />

            {/* Slide Content */}
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
              <div className="text-center text-white">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Pipes & Fittings</h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl mx-auto px-4 drop-shadow-md">
                  Professional quality pipes and fittings for all plumbing and industrial applications
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={28} />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {slideImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Available Products ({products.length})</h2>
            <p className="text-gray-600 mb-10">Browse our complete range of PVC pipes, fittings, and accessories</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Product Image */}
                  <div className="relative h-40 bg-gray-200 flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4 flex flex-col grow">
                    <p className="text-sm text-orange-600 font-semibold mb-1">{product.category}</p>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{product.name}</h3>
                    <p className="text-xs text-gray-500 mb-3">Model: {product.model}</p>

                    {/* Specs */}
                    <ul className="text-sm text-gray-700 space-y-1 mb-4 grow">
                      {product.specs.map((spec, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-orange-500 mt-0.5">•</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price and CTA */}
                    <div className="border-t pt-4">
                      <p className="text-xl font-bold text-orange-600 mb-3">{product.price}</p>
                      <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                        <WhatsAppIcon />
                        Order via WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Help Selecting Products?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Our expert team is ready to assist you with product selection and specifications.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-slate-800 transition-colors font-semibold"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
