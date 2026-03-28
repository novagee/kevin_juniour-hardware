'use client';

import Image from 'next/image';
import { Navbar, Footer } from '@/components/index';

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

export default function Generators() {
  const generators = [
    // Gasoline Engines
    {
      id: 1,
      model: 'GEN1682',
      name: 'Gasoline Engine GEN1682',
      category: 'Gasoline Engine',
      image: '/generators/GEN1682Gasoline%20engine.jpg',
      icon: '⚙️',
      specs: [
        'Max.output: 6.5HP',
        'Camshaft diameter: 19mm, Q TYPE',
        'Max.torque: 12.4Nm',
      ],
      price: 'Contact for Price',
    },
    {
      id: 2,
      model: 'GEN1882',
      name: 'Gasoline Engine GEN1882',
      category: 'Gasoline Engine',
      image: '/generators/GEN1882Gasoline%20engine.jpg',
      icon: '⚙️',
      specs: [
        'Max.output: 13.0HP',
        'Camshaft diameter: 25.4mm, Q TYPE',
        'Max.torque: 29Nm',
      ],
      price: 'Contact for Price',
    },
    // Gasoline Generators
    {
      id: 3,
      model: 'GE8002',
      name: 'Gasoline Generator GE8002',
      category: 'Gasoline Generator',
      image: '/generators/GE8002Gasoline%20generator.jpg',
      icon: '⚡',
      specs: [
        'Rated voltage(V): 220-240',
        'Rated frequency(Hz): 50',
        'Max.output(kW): 0.8',
      ],
      price: 'Contact for Price',
    },
    {
      id: 4,
      model: 'GE30005',
      name: 'Gasoline Generator GE30005',
      category: 'Gasoline Generator',
      image: '/generators/GE30005Gasoline%20generator.jpg',
      icon: '⚡',
      specs: [
        'Rated voltage(V): 220-240',
        'Rated frequency(Hz): 50',
        'Max.output(kW): 2.8',
      ],
      price: 'Contact for Price',
    },
    {
      id: 5,
      model: 'GE35006',
      name: 'Gasoline Generator GE35006',
      category: 'Gasoline Generator',
      image: '/generators/GE35006Gasoline%20generator.jpg',
      icon: '⚡',
      specs: [
        'Rated voltage(V): 220-240',
        'Rated frequency(Hz): 50',
        'Max.output(kW): 3.5',
      ],
      price: 'Contact for Price',
    },
    {
      id: 6,
      model: 'GE35006ES',
      name: 'Gasoline Generator GE35006ES',
      category: 'Gasoline Generator',
      image: '/generators/GE35006ESGasoline%20generator.jpg',
      icon: '⚡',
      specs: [
        'Rated voltage(V): 220-240',
        'Rated frequency(Hz): 50',
        'Max.output(kW): 3.5',
      ],
      price: 'Contact for Price',
    },
    {
      id: 7,
      model: 'GE65006',
      name: 'Gasoline Generator GE65006',
      category: 'Gasoline Generator',
      image: '/generators/GE65006Gasoline%20generator.jpg',
      icon: '⚡',
      specs: [
        'Rated voltage(V): 220-240',
        'Rated frequency(Hz): 50',
        'Max.output(kW): 6.5',
      ],
      price: 'Contact for Price',
    },
    {
      id: 8,
      model: 'GE75006',
      name: 'Gasoline Generator GE75006',
      category: 'Gasoline Generator',
      image: '/generators/GE75006Gasoline%20generator.jpg',
      icon: '⚡',
      specs: [
        'Rated voltage(V): 220-240',
        'Rated frequency(Hz): 50',
        'Max.output(kW): 7.5',
      ],
      price: 'Contact for Price',
    },
    // Diesel Generators
    {
      id: 9,
      model: 'GDE30001',
      name: 'Diesel Generator GDE30001',
      category: 'Diesel Generator',
      image: '/generators/GDE30001Diesel%20generator.jpg',
      icon: '🛢️',
      specs: [
        'Rated voltage: 220-240V~50Hz',
        'Max.output(kW): 3.0',
        'Phase: Single',
      ],
      price: 'Contact for Price',
    },
    {
      id: 10,
      model: 'GDE50003',
      name: 'Diesel Generator GDE50003',
      category: 'Diesel Generator',
      image: '/generators/GDE50003Diesel%20generator.jpg',
      icon: '🛢️',
      specs: [
        'Rated voltage(V): 220-240/380-415~50Hz',
        'Max.output(kW): 5.0@380-415V',
        'Phase: Three',
      ],
      price: 'Contact for Price',
    },
    // Silent Diesel Generators
    {
      id: 11,
      model: 'GSE50001',
      name: 'Silent Diesel Generator GSE50001',
      category: 'Silent Diesel Generator',
      image: '/generators/GSE50001Silent%20diesel%20generator.jpg',
      icon: '🔇',
      specs: [
        'Rated voltage(V): 220-240',
        'Rated frequency(Hz): 50',
        'Max.output(kW): 5',
      ],
      price: 'Contact for Price',
    },
    {
      id: 12,
      model: 'GSE50003',
      name: 'Silent Diesel Generator GSE50003',
      category: 'Silent Diesel Generator',
      image: '/generators/GSE50003Silent%20diesel%20generator.jpg',
      icon: '🔇',
      specs: [
        'Rated voltage(V): 220-240/380-400',
        'Rated frequency(Hz): 50',
        'Max.output(kW): 5',
      ],
      price: 'Contact for Price',
    },
    // Diesel Welder Generators
    {
      id: 13,
      model: 'GDW65001',
      name: 'Diesel Welder Generator GDW65001',
      category: 'Diesel Welder Generator',
      image: '/generators/GDW65001Diesel%20welder%20generator.jpg',
      icon: '⚒️',
      specs: [
        'Voltage: 220V-240V~50Hz',
        'Max.output(kW): 4.6',
        'Welding current: 50-180A',
      ],
      price: 'Contact for Price',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-8 sm:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Generators</h1>
          <p className="text-xs sm:text-base md:text-lg opacity-90 leading-relaxed">
            High-quality generators for residential, commercial, and industrial applications. Gasoline, diesel, and welder generators available.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-6xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {generators.map((generator) => (
            <div
              key={generator.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Product Image */}
              <div className="relative w-full h-60 sm:h-64 lg:h-72 bg-gray-100 flex items-center justify-center overflow-hidden">
                {generator.image && (
                  <Image
                    src={generator.image}
                    alt={generator.name}
                    fill
                    className="object-contain p-2 sm:p-3 lg:p-4"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={false}
                  />
                )}
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-4 border-t border-gray-200 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-1 sm:mb-2 gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-500 font-semibold truncate">{generator.category}</p>
                    <h3 className="text-sm sm:text-lg font-bold text-gray-800 mt-1 line-clamp-2">{generator.name}</h3>
                  </div>
                  <span className="text-lg sm:text-2xl shrink-0">{generator.icon}</span>
                </div>

                {/* Model */}
                <p className="text-xs sm:text-sm text-blue-600 font-semibold mb-2 sm:mb-3">Model: {generator.model}</p>

                {/* Specs */}
                <ul className="space-y-0.5 sm:space-y-1 mb-3 sm:mb-4 flex-1">
                  {generator.specs.map((spec, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-gray-600 flex items-start gap-1">
                      <span className="text-blue-500 shrink-0">•</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-gray-200 pt-3 sm:pt-4 gap-2 sm:gap-3">
                  <p className="font-semibold text-gray-800 text-xs sm:text-sm">{generator.price}</p>
                  <a
                    href={`https://wa.me/?text=I'm interested in ${generator.name} (${generator.model})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0"
                  >
                    <WhatsAppIcon />
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-8 sm:py-12 px-4 mt-8 sm:mt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">Why Choose Our Generators?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">✅</div>
              <h3 className="font-bold text-base sm:text-lg mb-2">Reliable Performance</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Engineered for durability and consistent power output</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🔧</div>
              <h3 className="font-bold text-base sm:text-lg mb-2">Easy Maintenance</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Simple maintenance procedures and readily available parts</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">💰</div>
              <h3 className="font-bold text-base sm:text-lg mb-2">Cost Effective</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Competitive pricing without compromising quality</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🌍</div>
              <h3 className="font-bold text-base sm:text-lg mb-2">Wide Range</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Multiple models for every need and budget</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
