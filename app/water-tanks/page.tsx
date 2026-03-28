'use client';

import Link from 'next/link';
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

export default function WaterTanks() {
  const products = [
    {
      id: 1,
      model: 'JOJO-500',
      name: 'Jojo Tank 500 Litres',
      category: 'Jojo Tanks',
      image: '/watertank/jojo tank.jpg',
      specs: [
        'Capacity: 500 Liters',
        'Material: Food Grade Plastic',
        'UV Resistant',
        'Durable & Long-lasting',
      ],
      price: 'Contact for Price',
    },
    {
      id: 2,
      model: 'JOJO-1000',
      name: 'Jojo Tank 1000 Litres',
      category: 'Jojo Tanks',
      image: '/watertank/jojo tank 1000 litres.jpeg',
      specs: [
        'Capacity: 1000 Liters',
        'Material: Food Grade Plastic',
        'UV Resistant',
        'Heavy Duty Construction',
      ],
      price: 'Contact for Price',
    },
    {
      id: 3,
      model: 'JOJO-1500',
      name: 'Jojo Tank 1500 Litres',
      category: 'Jojo Tanks',
      image: '/watertank/jojo tank.jpg',
      specs: [
        'Capacity: 1500 Liters',
        'Material: Food Grade Plastic',
        'UV Resistant',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
    {
      id: 4,
      model: 'JOJO-2000',
      name: 'Jojo Tank 2000 Litres',
      category: 'Jojo Tanks',
      image: '/watertank/jojo tank 2000 litres.webp',
      specs: [
        'Capacity: 2000 Liters',
        'Material: Food Grade Plastic',
        'UV Resistant',
        'Commercial Use',
      ],
      price: 'Contact for Price',
    },
    {
      id: 5,
      model: 'JOJO-2300',
      name: 'Jojo Tank 2300 Litres',
      category: 'Jojo Tanks',
      image: '/watertank/jojo 2300 litres.webp',
      specs: [
        'Capacity: 2300 Liters',
        'Material: Food Grade Plastic',
        'UV Resistant',
        'Heavy Duty Design',
      ],
      price: 'Contact for Price',
    },
    {
      id: 6,
      model: 'JOJO-2500',
      name: 'Jojo Tank 2500 Litres',
      category: 'Jojo Tanks',
      image: '/watertank/jojo tank.jpg',
      specs: [
        'Capacity: 2500 Liters',
        'Material: Food Grade Plastic',
        'UV Resistant',
        'Reliable & Sturdy',
      ],
      price: 'Contact for Price',
    },
    {
      id: 7,
      model: 'JOJO-3000',
      name: 'Jojo Tank 3000 Litres',
      category: 'Jojo Tanks',
      image: '/watertank/jojo tank.jpg',
      specs: [
        'Capacity: 3000 Liters',
        'Material: Food Grade Plastic',
        'UV Resistant',
        'Large Capacity Storage',
      ],
      price: 'Contact for Price',
    },
    {
      id: 8,
      model: 'JOJO-5000',
      name: 'Jojo Tank 5000 Litres',
      category: 'Jojo Tanks',
      image: '/watertank/jojo tank.jpg',
      specs: [
        'Capacity: 5000 Liters',
        'Material: Food Grade Plastic',
        'UV Resistant',
        'Industrial Grade',
      ],
      price: 'Contact for Price',
    },
    {
      id: 9,
      model: 'JOJO-10000',
      name: 'Jojo Tank 10000 Litres',
      category: 'Jojo Tanks',
      image: '/watertank/jojo tank.jpg',
      specs: [
        'Capacity: 10000 Liters',
        'Material: Food Grade Plastic',
        'UV Resistant',
        'Premium Large Capacity',
      ],
      price: 'Contact for Price',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-linear-to-r from-slate-900 to-orange-500 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Water Tanks</h1>
            <p className="text-lg sm:text-xl text-gray-100">
              Premium water storage solutions for residential, commercial, and industrial applications
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Available Products ({products.length})</h2>
            <p className="text-gray-600 mb-10">High-quality water tanks and accessories for every need</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Product Image */}
                  <div className="relative h-64 bg-linear-to-br from-gray-100 to-gray-300 flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full"
                      style={{ objectFit: 'cover', display: 'block' }}
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.display = 'none';
                        const fallback = img.parentElement;
                        if (fallback) {
                          fallback.style.background = 'linear-gradient(135deg, #f3f4f6 0%, #d1d5db 100%)';
                        }
                      }}
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Looking for the Right Tank?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Our experts can help you choose the perfect water tank solution for your needs.
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
