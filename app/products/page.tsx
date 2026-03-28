'use client';

import { Navbar, Footer } from '@/components/index';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

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

export default function Products() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const categories = [
    {
      id: 1,
      name: 'Cordless Tools',
      icon: '🔋',
      description: 'Modern cordless power tools for convenience and mobility',
      subcategories: ['Cordless Drills', 'Cordless Saws', 'Impact Drivers', 'Battery Packs & Chargers'],
      products: [
        { name: 'Cordless Impact Drill', price: 'KES 8,500', features: ['18V Li-ion', 'Compact design'] },
        { name: 'Cordless Jigsaw', price: 'KES 6,200', features: ['Variable speed', 'LED light'] },
      ]
    },
    {
      id: 2,
      name: 'Power Tools',
      icon: '⚡',
      description: 'Professional-grade power tools for construction and heavy-duty work',
      subcategories: ['Impact Drills', 'Circular Saws', 'Angle Grinders', 'Rotary Hammers'],
      products: [
        { name: 'Electric Impact Drill', price: 'KES 5,800', features: ['1000W', 'Powerful'] },
        { name: 'Angle Grinder', price: 'KES 4,200', features: ['115mm', 'Durable'] },
      ]
    },
    {
      id: 3,
      name: 'Power Tool Accessories',
      icon: '🔧',
      description: 'Complete range of accessories for all power tools',
      subcategories: ['Saw Blades', 'Drill Bits', 'Grinding Wheels', 'Tool Bags'],
      products: [
        { name: 'Saw Blade Set', price: 'KES 2,500', features: ['Multiple sizes', 'High quality'] },
        { name: 'Drill Bit Set', price: 'KES 1,800', features: ['13 pieces', 'All metals'] },
      ]
    },
    {
      id: 4,
      name: 'Generators',
      icon: '⚙️',
      description: 'Reliable power generation solutions for home and business',
      subcategories: ['Portable Generators', 'Inverter Generators', 'Gas Generators', 'Spare Parts'],
      products: [
        { name: 'Portable Generator 2KVA', price: 'KES 35,000', features: ['Fuel efficient', 'Low noise'] },
        { name: 'Inverter Generator 5KVA', price: 'KES 65,000', features: ['Quiet operation', 'Stable output'] },
      ]
    },
    {
      id: 5,
      name: 'Welding Machine',
      icon: '🔥',
      description: 'Professional welding equipment for metal joining',
      subcategories: ['Arc Welders', 'MIG Welders', 'Electrodes', 'Safety Gear'],
      products: [
        { name: 'Arc Welder 200A', price: 'KES 28,000', features: ['Portable', 'Efficient'] },
        { name: 'MIG Welder', price: 'KES 42,000', features: ['Wire feed', 'Professional'] },
      ]
    },
    {
      id: 6,
      name: 'Small Construction Equipment',
      icon: '🏗️',
      description: 'Compact construction equipment for small projects',
      subcategories: ['Concrete Mixers', 'Vibrators', 'Breakers', 'Compactors'],
      products: [
        { name: 'Electric Concrete Mixer', price: 'KES 18,500', features: ['200L capacity', 'Heavy duty'] },
        { name: 'Concrete Vibrator', price: 'KES 12,000', features: ['Portable', 'Efficient'] },
      ]
    },
    {
      id: 7,
      name: 'Air Tools',
      icon: '💨',
      description: 'Pneumatic tools powered by air compressors',
      subcategories: ['Impact Wrenches', 'Air Drills', 'Air Nailers', 'Air Compressors'],
      products: [
        { name: 'Air Impact Wrench', price: 'KES 4,500', features: ['1/2" drive', 'Powerful'] },
        { name: 'Air Compressor 50L', price: 'KES 22,000', features: ['Portable', 'Oil-free'] },
      ]
    },
    {
      id: 8,
      name: 'Water Pumps',
      icon: '💧',
      description: 'Water pumping solutions for various applications',
      subcategories: ['Submersible Pumps', 'Surface Pumps', 'Pressure Pumps', 'Spare Parts'],
      products: [
        { name: 'Submersible Water Pump', price: 'KES 8,500', features: ['1000W', 'Deep well'] },
        { name: 'Surface Pump', price: 'KES 5,200', features: ['1HP', 'Reliable'] },
      ]
    },
    {
      id: 9,
      name: 'Measuring Tool',
      icon: '📏',
      description: 'Precision measurement instruments for accurate work',
      subcategories: ['Tape Measures', 'Levels', 'Laser Measurers', 'Spirit Levels'],
      products: [
        { name: 'Laser Measure', price: 'KES 6,800', features: ['50m range', 'Digital display'] },
        { name: 'Professional Level', price: 'KES 3,200', features: ['120cm', 'Accurate'] },
      ]
    },
    {
      id: 10,
      name: 'INGCO Tools',
      icon: '🛠️',
      description: 'Professional INGCO power tools and hardware solutions',
      subcategories: ['Power Drills', 'Impact Tools', 'Grinding Tools', 'Saw Tools'],
      products: [
        { name: 'INGCO Power Drill', price: 'KES 6,500', features: ['1000W', 'Variable speed'] },
        { name: 'INGCO Impact Wrench', price: 'KES 5,200', features: ['Professional grade', 'Durable'] },
      ]
    },
  ];

  return (
    <>
      <Navbar />

      {/* Products Hero Section */}
      <section className="bg-linear-to-br from-slate-900 via-slate-900 to-slate-800 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Product <span className="text-orange-500">Categories</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Professional hardware, tools, and equipment for all your needs
            </p>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Featured Product <span className="text-orange-500">Categories</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Cordless Tools */}
            <a
              href="/products/cordless-tools"
              className="group relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-blue-800 group-hover:from-blue-700 group-hover:to-blue-900 transition-all duration-300"></div>
              <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
                <span className="text-6xl mb-4">🔋</span>
                <h3 className="text-2xl font-bold text-white mb-2">Cordless Tools</h3>
                <p className="text-blue-100 mb-6 group-hover:text-white transition-colors">
                  Modern cordless power tools for convenience and mobility
                </p>
                <div className="flex items-center gap-2 text-white group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <ArrowRight size={20} />
                </div>
              </div>
            </a>

            {/* Power Tools */}
            <a
              href="/products/power-tools"
              className="group relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-br from-orange-600 to-red-700 group-hover:from-orange-700 group-hover:to-red-800 transition-all duration-300"></div>
              <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
                <span className="text-6xl mb-4">⚡</span>
                <h3 className="text-2xl font-bold text-white mb-2">Power Tools</h3>
                <p className="text-orange-100 mb-6 group-hover:text-white transition-colors">
                  Professional-grade tools for construction and heavy-duty work
                </p>
                <div className="flex items-center gap-2 text-white group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <ArrowRight size={20} />
                </div>
              </div>
            </a>

            {/* Product Accessories */}
            <a
              href="/products/product-accessories"
              className="group relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-br from-emerald-600 to-teal-700 group-hover:from-emerald-700 group-hover:to-teal-800 transition-all duration-300"></div>
              <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
                <span className="text-6xl mb-4">🔧</span>
                <h3 className="text-2xl font-bold text-white mb-2">Accessories</h3>
                <p className="text-emerald-100 mb-6 group-hover:text-white transition-colors">
                  Complete range of bits, blades, and tool accessories
                </p>
                <div className="flex items-center gap-2 text-white group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <ArrowRight size={20} />
                </div>
              </div>
            </a>

            {/* INGCO Tools */}
            <a
              href="#ingco-tools"
              className="group relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-br from-yellow-500 to-amber-600 group-hover:from-yellow-600 group-hover:to-amber-700 transition-all duration-300"></div>
              <div className="relative h-full flex flex-col items-center justify-center text-center p-6">
                <span className="text-6xl mb-4">🛠️</span>
                <h3 className="text-2xl font-bold text-white mb-2">INGCO Tools</h3>
                <p className="text-yellow-100 mb-6 group-hover:text-white transition-colors">
                  Professional INGCO power tools and hardware solutions
                </p>
                <div className="flex items-center gap-2 text-white group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <ArrowRight size={20} />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Categories Dropdown Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{category.icon}</span>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-slate-900">{category.name}</h3>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`text-orange-500 transition-transform ${
                      expandedCategory === category.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                {expandedCategory === category.id && (
                  <div className="border-t bg-gray-50 p-6">
                    {/* Subcategories */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase">Subcategories</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {category.subcategories.map((subcat, idx) => (
                          <button
                            key={idx}
                            className="text-left px-4 py-2 bg-white rounded-lg border border-orange-200 hover:bg-orange-50 text-orange-600 font-medium transition-colors"
                          >
                            {subcat}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Products */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase">Featured Products</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.products.map((product, idx) => (
                          <div
                            key={idx}
                            className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                          >
                            <h5 className="font-bold text-slate-900 mb-1">{product.name}</h5>
                            <ul className="text-xs text-gray-600 space-y-1 mb-3">
                              {product.features.map((feat, i) => (
                                <li key={i}>✓ {feat}</li>
                              ))}
                            </ul>
                            <a
                              href="https://wa.me/254701761622"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                            >
                              <WhatsAppIcon />
                              Order
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-linear-to-r from-orange-500 to-red-600 text-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Contact us today for bulk orders and special pricing
          </p>
          <button className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            Get in Touch
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
