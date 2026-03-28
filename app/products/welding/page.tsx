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

export default function Welding() {
  const products = [
    // Inverter MMA Welding Machines
    {
      id: 1,
      model: 'ING-MMA1305',
      name: 'Inverter MMA Welding Machine 130A',
      category: 'Inverter MMA Welders',
      image: '/welding/ING-MMA1305Inverter%20MMA%20welding%20machine.jpg',
      icon: '⚡',
      specs: [
        'Input: 220-240V~50/60Hz',
        'Output: 10-130A',
        'Duty Cycle: 130A@40%',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
    {
      id: 2,
      model: 'ING-MMA16015',
      name: 'Inverter MMA Welding Machine 160A',
      category: 'Inverter MMA Welders',
      image: '/welding/ING-MMA16015Inverter%20MMA%20welding%20machine.jpg',
      icon: '⚡',
      specs: [
        'Input: 1~220-240V~50/60Hz',
        'Output: 10-160A',
        'Duty Cycle: 160A@40%',
        'High Performance',
      ],
      price: 'Contact for Price',
    },
    {
      id: 3,
      model: 'ING-MMA1805',
      name: 'Inverter MMA Welding Machine 180A',
      category: 'Inverter MMA Welders',
      image: '/welding/ING-MMA1805Inverter%20MMA%20welding%20machine.jpg',
      icon: '⚡',
      specs: [
        'Input: 220-240V~50/60Hz',
        'Output: 10-180A',
        'Duty Cycle: 180A@40%',
        'Heavy Duty',
      ],
      price: 'Contact for Price',
    },
    {
      id: 4,
      model: 'ING-MMA1302',
      name: 'Inverter MMA Welding Machine 130A Pro',
      category: 'Inverter MMA Welders',
      image: '/welding/ING-MMA1302Inverter%20MMA%20welding%20machine.jpg',
      icon: '⚡',
      specs: [
        'Input: 1~220-240V~50/60Hz',
        'Output: 15-130A',
        'Duty Cycle: 130A@45%',
        'Enhanced Efficiency',
      ],
      price: 'Contact for Price',
    },
    {
      id: 5,
      model: 'ING-MMA1602',
      name: 'Inverter MMA Welding Machine 160A Pro',
      category: 'Inverter MMA Welders',
      image: '/welding/ING-MMA1606Inverter%20MMA%20welding%20machine.jpg',
      icon: '⚡',
      specs: [
        'Input: 1~220-240V~50/60Hz',
        'Output: 15-160A',
        'Duty Cycle: 160A@30%',
        'Industrial Standard',
      ],
      price: 'Contact for Price',
    },
    {
      id: 6,
      model: 'ING-MMA1606',
      name: 'Inverter MMA Welding Machine 160A Plus',
      category: 'Inverter MMA Welders',
      image: '/welding/ING-MMA1606Inverter%20MMA%20welding%20machine.jpg',
      icon: '⚡',
      specs: [
        'Input: 220-240V~50/60Hz',
        'Output: 10-160A',
        'Duty Cycle: 160A@60%',
        'High Efficiency',
      ],
      price: 'Contact for Price',
    },
    {
      id: 7,
      model: 'ING-MMA2006',
      name: 'Inverter MMA Welding Machine 200A',
      category: 'Inverter MMA Welders',
      image: '/welding/ING-MMA2006Inverter%20MMA%20welding%20machine.jpeg',
      icon: '⚡',
      specs: [
        'Input: 220-240V~50/60Hz',
        'Output: 10-200A',
        'Duty Cycle: 200A@60%',
        'Premium Series',
      ],
      price: 'Contact for Price',
    },
    {
      id: 8,
      model: 'ING-MMA2508',
      name: 'Inverter MMA Welding Machine 250A',
      category: 'Inverter MMA Welders',
      image: '/welding/ING-MMA2508Inverter%20MMA%20welding%20machine.jpeg',
      icon: '⚡',
      specs: [
        'Input: 220-240/380-400V~50/60Hz',
        'Output: 20-250A',
        'Duty Cycle: 250A@60%',
        'Three-Phase Ready',
      ],
      price: 'Contact for Price',
    },
    {
      id: 9,
      model: 'ING-MMA5008',
      name: 'Inverter MMA Welding Machine 500A',
      category: 'Industrial Welders',
      image: '/welding/ING-MMA5008Inverter%20MMA%20welding%20machine.jpeg',
      icon: '⚡',
      specs: [
        'Input: 380-400V~50/60Hz',
        'Output: 20-500A',
        'Duty Cycle: 500A@60%',
        'Industrial Grade',
      ],
      price: 'Contact for Price',
    },
    {
      id: 10,
      model: 'ING-MMA6308',
      name: 'Inverter MMA Welding Machine 630A',
      category: 'Industrial Welders',
      image: '/welding/ING-MMA6308Inverter%20MMA%20welding%20machine.jpeg',
      icon: '⚡',
      specs: [
        'Input: 380-400V~50/60Hz',
        'Output: 30-630A',
        'Duty Cycle: 630A@60%',
        'Heavy Industrial',
      ],
      price: 'Contact for Price',
    },
    // Electrode Holders
    {
      id: 11,
      model: 'WAH3008',
      name: 'Electrode Holder 300A',
      category: 'Electrode Holders',
      image: '/welding/WAH3008Electrode%20holder.jpg',
      icon: '🔧',
      specs: [
        'Rated Current: 300A',
        'Unique Design',
        'Suitable for MMA Welding',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
    {
      id: 12,
      model: 'WAH5008',
      name: 'Electrode Holder 500A',
      category: 'Electrode Holders',
      image: '/welding/WAH5008Electrode%20holder.jpg',
      icon: '🔧',
      specs: [
        'Rated Current: 500A',
        'High Capacity Design',
        'MMA Welding Machine Compatible',
        'Durable Construction',
      ],
      price: 'Contact for Price',
    },
    {
      id: 13,
      model: 'WAH8008',
      name: 'Electrode Holder 800A',
      category: 'Electrode Holders',
      image: '/welding/WAH5008Electrode%20holder.jpg',
      icon: '🔧',
      specs: [
        'Rated Current: 800A',
        'Unique New Design',
        'Suitable for Below 630A Welder',
        'Heavy Duty',
      ],
      price: 'Contact for Price',
    },
    {
      id: 14,
      model: 'WAH10008',
      name: 'Electrode Holder 1000A',
      category: 'Electrode Holders',
      image: '/welding/WAH10008Electrode%20holder.jpg',
      icon: '🔧',
      specs: [
        'Rated Current: 1000A',
        'Premium Design',
        'Industrial Use',
        'Maximum Compatibility',
      ],
      price: 'Contact for Price',
    },
    // Battery Chargers
    {
      id: 15,
      model: 'ING-CB1501',
      name: 'Battery Charger 6/12V',
      category: 'Battery Chargers',
      image: '/welding/ING-CB1501Battery%20charger.jpg',
      icon: '🔋',
      specs: [
        'Input: 1~220-240V~50/60Hz',
        'Charging Voltage: 6/12V',
        'Reference: 40-90Ah',
        'Compact Design',
      ],
      price: 'Contact for Price',
    },
    {
      id: 16,
      model: 'ING-CB1601',
      name: 'Battery Charger 12/24V',
      category: 'Battery Chargers',
      image: '/welding/ING-CB1601Battery%20charger.jpg',
      icon: '🔋',
      specs: [
        'Input: 1~220-240V~50/60Hz',
        'Charging Voltage: 12/24V',
        'Reference: 28-180Ah',
        'Versatile',
      ],
      price: 'Contact for Price',
    },
    {
      id: 17,
      model: 'ING-CD2201',
      name: 'Battery Charger 12/24V Pro',
      category: 'Battery Chargers',
      image: '/welding/ING-CB1601Battery%20charger.jpg',
      icon: '🔋',
      specs: [
        'Input: 1~220-240V~50/60Hz',
        'Charging Voltage: 12/24V',
        'Reference: 70-300Ah',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
    // Booster Cables
    {
      id: 18,
      model: 'HBTCP2001',
      name: 'Booster Cable 200A',
      category: 'Booster Cables',
      image: '/welding/HBTCP2001Booster%20cable.jpg',
      icon: '⚙️',
      specs: [
        'Current: 200AMP',
        'Cable Length: 2.5m',
        'Suitable: ≤1.8L Cars',
        'Heavy Duty',
      ],
      price: 'Contact for Price',
    },
    {
      id: 19,
      model: 'HBTCP6008',
      name: 'Booster Cable 600A',
      category: 'Booster Cables',
      image: '/welding/HBTCP6008Booster%20cable.jpg',
      icon: '⚙️',
      specs: [
        'Current: 600AMP',
        'Cable Length: 3m',
        'Suitable: ≤4.5L Cars',
        'Heavy Duty',
      ],
      price: 'Contact for Price',
    },
    {
      id: 20,
      model: 'HBTCP6008L',
      name: 'Booster Cable 600A with Lamp',
      category: 'Booster Cables',
      image: '/welding/HBTCP6008Booster%20cable.jpg',
      icon: '⚙️',
      specs: [
        'Current: 600AMP',
        'Cable Length: 3m',
        'Built-in Lamp',
        'Premium Feature',
      ],
      price: 'Contact for Price',
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-slate-900 via-slate-900 to-slate-800 text-white py-8 sm:py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
              <span className="text-orange-500">Welding Equipment</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Professional INGCO Welding Machines and Accessories - Professional Grade Performance
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          {/* Filter Summary */}
          <div className="mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">
              Available Products ({products.length})
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">Genuine INGCO welding equipment with warranty and technical support</p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Product Image */}
                <div className="relative w-full h-60 sm:h-64 lg:h-72 bg-gray-100 flex items-center justify-center overflow-hidden p-2 sm:p-3 lg:p-4">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      priority={false}
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  {!product.image && (
                    <div className="text-4xl sm:text-5xl md:text-6xl">
                      {product.icon}
                    </div>
                  )}
                </div>

                {/* Product Header */}
                <div className="bg-linear-to-r from-orange-50 to-orange-100 p-2.5 sm:p-4 border-b">
                  <div className="font-mono text-xs font-bold text-orange-600 mb-1">
                    Model: {product.model}
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-slate-900 line-clamp-2">
                    {product.name}
                  </h3>
                  <span className="inline-block mt-1.5 sm:mt-2 bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">
                    {product.category}
                  </span>
                </div>

                {/* Product Specs */}
                <div className="px-2.5 sm:px-4 py-3 sm:py-4 grow">
                  <ul className="space-y-1">
                    {product.specs.map((spec, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-gray-600 flex items-start gap-1.5">
                        <span className="text-orange-500 font-bold shrink-0">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="border-t bg-gray-50 p-2.5 sm:p-4">
                  <div className="mb-2 sm:mb-3">
                    <p className="text-sm sm:text-base font-bold text-slate-900">
                      {product.price}
                    </p>
                  </div>
                  <a
                    href="https://wa.me/254701761622"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-3 sm:px-4 py-2 text-xs sm:text-sm bg-green-500 hover:bg-green-600 text-white font-bold rounded transition-colors flex items-center justify-center gap-1.5"
                  >
                    <WhatsAppIcon />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-16 md:py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-6 sm:mb-12 text-center">
            Why Choose INGCO Welding Equipment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-linear-to-br from-orange-50 to-orange-100 p-4 sm:p-6 rounded-lg border border-orange-200">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">⚡</div>
              <h3 className="font-bold text-sm sm:text-base mb-2 text-slate-900">Professional Grade</h3>
              <p className="text-xs sm:text-sm text-gray-700">Industrial quality welding machines for demanding applications</p>
            </div>
            <div className="bg-linear-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-lg border border-blue-200">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">🔧</div>
              <h3 className="font-bold text-sm sm:text-base mb-2 text-slate-900">Complete Accessories</h3>
              <p className="text-xs sm:text-sm text-gray-700">Full range of electrode holders and support equipment</p>
            </div>
            <div className="bg-linear-to-br from-green-50 to-green-100 p-4 sm:p-6 rounded-lg border border-green-200">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">✓</div>
              <h3 className="font-bold text-sm sm:text-base mb-2 text-slate-900">Warranty Support</h3>
              <p className="text-xs sm:text-sm text-gray-700">Full warranty and technical support for all products</p>
            </div>
            <div className="bg-linear-to-br from-purple-50 to-purple-100 p-4 sm:p-6 rounded-lg border border-purple-200">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">📦</div>
              <h3 className="font-bold text-sm sm:text-base mb-2 text-slate-900">Reliable Delivery</h3>
              <p className="text-xs sm:text-sm text-gray-700">Fast and secure delivery to your location</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-orange-500 to-orange-600 text-white py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Need Welding Equipment for Your Project?
          </h2>
          <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8 text-orange-100 max-w-2xl mx-auto leading-relaxed">
            Contact us for bulk orders, wholesale pricing, and technical support
          </p>
          <a
            href="https://wa.me/254701761622"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
