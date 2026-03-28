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

export default function SmallConstructionEquipment() {
  const products = [
    // Gasoline Concrete Vibrators
    {
      id: 1,
      model: 'GVR-1',
      name: 'Gasoline Concrete Vibrator (Claw Type)',
      category: 'Concrete Vibrators',
      image: '/small/GVR-1Gasoline%20concrete%20vibrator%28Claw%20type%29.jpg',
      icon: '🔨',
      specs: [
        'Engine: Honda GX160',
        'Engine Power: 4.0kW (5.5HP)',
        'Claw Type Coupling',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
    {
      id: 2,
      model: 'GVR-2',
      name: 'Gasoline Concrete Vibrator (Claw Type)',
      category: 'Concrete Vibrators',
      image: '/small/GVR-2Gasoline%20concrete%20vibrator%28Claw%20type%29.jpg',
      icon: '🔨',
      specs: [
        'Gasoline Engine',
        'Engine Power: 4.0kW (5.5HP)',
        'Claw Type Coupling',
        'Reliable Performance',
      ],
      price: 'Contact for Price',
    },
    // Vibrator Pokers
    {
      id: 3,
      model: 'VBP1381',
      name: 'Vibrator Poker 38mm',
      category: 'Vibrator Pokers',
      image: '/small/VBP1381Vibrator%20poker.jpeg',
      icon: '📍',
      specs: [
        'Diameter: 38mm',
        'Head Length: 465mm',
        'Claw Type Coupling',
        'Compact Design',
      ],
      price: 'Contact for Price',
    },
    {
      id: 4,
      model: 'VBP1451',
      name: 'Vibrator Poker 45mm',
      category: 'Vibrator Pokers',
      image: '/small/VBP1381Vibrator%20poker.jpeg',
      icon: '📍',
      specs: [
        'Diameter: 45mm',
        'Head Length: 475mm',
        'Claw Type Coupling',
        'High Performance',
      ],
      price: 'Contact for Price',
    },
    // Gasoline Plate Compactors
    {
      id: 5,
      model: 'GCP060-1',
      name: 'Gasoline Plate Compactor 60kg',
      category: 'Plate Compactors',
      image: '/small/GCP060-1Gasoline%20plate%20compactor.jpg',
      icon: '⚙️',
      specs: [
        'Engine: Honda GX160',
        'Engine Power: 4.0kW (5.5HP)',
        'Weight: 60kg',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
    {
      id: 6,
      model: 'GCP060-2',
      name: 'Gasoline Plate Compactor 60kg Pro',
      category: 'Plate Compactors',
      image: '/small/GCP060-2Gasoline%20plate%20compactor.jpg',
      icon: '⚙️',
      specs: [
        'Gasoline Engine',
        'Engine Power: 4.8kW (6.5HP)',
        'Weight: 60kg',
        'Enhanced Performance',
      ],
      price: 'Contact for Price',
    },
    {
      id: 7,
      model: 'GCP100-1',
      name: 'Gasoline Plate Compactor 100kg',
      category: 'Plate Compactors',
      image: '/small/GCP100-2Gasoline%20plate%20compactor.jpg',
      icon: '⚙️',
      specs: [
        'Engine: Honda GX160',
        'Engine Power: 4.0kW (5.5HP)',
        'Weight: 90kg',
        'Heavy Duty',
      ],
      price: 'Contact for Price',
    },
    {
      id: 8,
      model: 'GCP100-2',
      name: 'Gasoline Plate Compactor 100kg Pro',
      category: 'Plate Compactors',
      image: '/small/GCP100-2Gasoline%20plate%20compactor.jpg',
      icon: '⚙️',
      specs: [
        'Gasoline Engine',
        'Engine Power: 4.8kW (6.5HP)',
        'Weight: 90kg',
        'Industrial Standard',
      ],
      price: 'Contact for Price',
    },
    // Gasoline Reversible Plate Compactors
    {
      id: 9,
      model: 'GCP125-1',
      name: 'Gasoline Reversible Plate Compactor 125kg',
      category: 'Reversible Compactors',
      image: '/small/GCP125-1Gasoline%20reversible%20plate%20compactor.jpg',
      icon: '⚙️',
      specs: [
        'Engine: Honda GX160',
        'Engine Power: 4.0kW (5.5HP)',
        'Weight: 126kg',
        'Reversible Function',
      ],
      price: 'Contact for Price',
    },
    {
      id: 10,
      model: 'GCP125-2',
      name: 'Gasoline Reversible Plate Compactor 125kg Pro',
      category: 'Reversible Compactors',
      image: '/small/GCP125-2Gasoline%20reversible%20plate%20compactor.jpg',
      icon: '⚙️',
      specs: [
        'Gasoline Engine',
        'Engine Power: 4.8kW (6.5HP)',
        'Weight: 127kg',
        'Premium Performance',
      ],
      price: 'Contact for Price',
    },
    {
      id: 11,
      model: 'GCP160-1',
      name: 'Gasoline Reversible Plate Compactor 160kg',
      category: 'Reversible Compactors',
      image: '/small/GCP160-1Gasoline%20reversible%20plate%20compactor.jpg',
      icon: '⚙️',
      specs: [
        'Engine: Honda GX270',
        'Engine Power: 6.0kW (9.0HP)',
        'Weight: 160kg',
        'Heavy Duty Industrial',
      ],
      price: 'Contact for Price',
    },
    {
      id: 12,
      model: 'GCP160-2',
      name: 'Gasoline Reversible Plate Compactor 160kg Pro',
      category: 'Reversible Compactors',
      image: '/small/GCP160-2Gasoline%20reversible%20plate%20compactor.jpg',
      icon: '⚙️',
      specs: [
        'Gasoline Engine',
        'Engine Power: 6.0kW (9.0HP)',
        'Weight: 160kg',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
    // Gasoline Tamping Rammers
    {
      id: 13,
      model: 'GRT75-1',
      name: 'Gasoline Tamping Rammer 75kg',
      category: 'Tamping Rammers',
      image: '/small/GRT75-1Gasoline%20tamping%20rammer.jpeg',
      icon: '🔨',
      specs: [
        'Engine: Honda GX160',
        'Engine Power: 4.0kW (5.5HP)',
        'Weight: 79kg',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
    {
      id: 14,
      model: 'GRT75-2',
      name: 'Gasoline Tamping Rammer 75kg Pro',
      category: 'Tamping Rammers',
      image: '/small/GRT75-2Gasoline%20tamping%20rammer.jpeg',
      icon: '🔨',
      specs: [
        'Gasoline Engine',
        'Engine Power: 4.8kW (6.5HP)',
        'Weight: 79kg',
        'Enhanced Performance',
      ],
      price: 'Contact for Price',
    },
    // Gasoline Floor Saws
    {
      id: 15,
      model: 'GSF16-1',
      name: 'Gasoline Floor Saw 16"',
      category: 'Floor Saws',
      image: '/small/GSF16-1Gasoline%20floor%20saw.jpeg',
      icon: '✂️',
      specs: [
        'Engine: Honda GX390',
        'Engine Power: 9.6kW (13.0HP)',
        'Weight: 120kg',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
    {
      id: 16,
      model: 'GSF16-2',
      name: 'Gasoline Floor Saw 16" Pro',
      category: 'Floor Saws',
      image: '/small/GSF16-2%20Gasoline%20floor%20saw.jpeg',
      icon: '✂️',
      specs: [
        'Gasoline Engine',
        'Engine Power: 9.6kW (13.0HP)',
        'Weight: 120kg',
        'Industrial Standard',
      ],
      price: 'Contact for Price',
    },
    // Diamond Discs for Floor Saw
    {
      id: 17,
      model: 'DMD044052',
      name: 'Diamond Disc for Floor Saw 405mm',
      category: 'Diamond Discs',
      image: '/small/DMD044052%20Diamond%20disc%20for%20floor%20saw.jpeg',
      icon: '💎',
      specs: [
        '405mm (16") x 25.4mm',
        'Blade Width: 10mm',
        'Special for Concrete Cutting',
        'Color Box Packed',
      ],
      price: 'Contact for Price',
    },
    {
      id: 18,
      model: 'DMD064051',
      name: 'Diamond Disc for Floor Saw 405mm Pro',
      category: 'Diamond Discs',
      image: '/small/DMD044052%20Diamond%20disc%20for%20floor%20saw.jpeg',
      icon: '💎',
      specs: [
        '405mm (16") x 25.4mm',
        'Blade Width: 10mm',
        'Asphalt & Concrete Cutting',
        'Color Box Packed',
      ],
      price: 'Contact for Price',
    },
    // Gasoline Power Trowels
    {
      id: 19,
      model: 'GPT361-1',
      name: 'Gasoline Power Trowel',
      category: 'Power Trowels',
      image: '/small/GPT361-1Gasoline%20power%20trowel.jpeg',
      icon: '🏗️',
      specs: [
        'Engine: Honda GX160',
        'Engine Power: 4.0kW (5.5HP)',
        'Weight: 78kg',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
    {
      id: 20,
      model: 'GPT361-2',
      name: 'Gasoline Power Trowel Pro',
      category: 'Power Trowels',
      image: '/small/GPT361-1Gasoline%20power%20trowel.jpeg',
      icon: '🏗️',
      specs: [
        'Gasoline Engine',
        'Engine Power: 4.8kW (6.5HP)',
        'Weight: 78kg',
        'Enhanced Performance',
      ],
      price: 'Contact for Price',
    },
    // Electric Concrete Mixers
    {
      id: 21,
      model: 'CM30-1',
      name: 'Electric Concrete Mixer 180L',
      category: 'Concrete Mixers',
      image: '/small/CM30-1Electric%20concrete%20mixer.jpeg',
      icon: '🔧',
      specs: [
        'Voltage: 220-240V~50Hz',
        'Input Power: 0.8kW (1.1HP)',
        'Drum Volume: 180L',
        'Compact Design',
      ],
      price: 'Contact for Price',
    },
    {
      id: 22,
      model: 'CM9011',
      name: 'Electric Concrete Mixer 350L',
      category: 'Concrete Mixers',
      image: '/small/0bElectric%20concrete%20mixer.jpg',
      icon: '🔧',
      specs: [
        'Voltage: 220-240V~50Hz',
        'Input Power: 2.2kW (3HP)',
        'Drum Volume: 350L',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
    // Gasoline Concrete Mixer
    {
      id: 23,
      model: 'CM9021',
      name: 'Gasoline Concrete Mixer 350L',
      category: 'Concrete Mixers',
      image: '/small/0bElectric%20concrete%20mixer.jpg',
      icon: '🔧',
      specs: [
        'Engine: Honda GX270',
        'Engine Power: 6.6kW (9HP)',
        'Drum Volume: 350L',
        'Industrial Grade',
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
              <span className="text-orange-500">Small Construction Equipment</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Professional INGCO Construction Equipment - Reliable and Durable Performance
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
            <p className="text-xs sm:text-sm text-gray-600">Genuine INGCO small construction equipment with warranty and technical support</p>
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
            Why Choose INGCO Construction Equipment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-linear-to-br from-orange-50 to-orange-100 p-4 sm:p-6 rounded-lg border border-orange-200">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">🔧</div>
              <h3 className="font-bold text-sm sm:text-base mb-2 text-slate-900">Professional Grade</h3>
              <p className="text-xs sm:text-sm text-gray-700">Industrial quality equipment for demanding construction tasks</p>
            </div>
            <div className="bg-linear-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-lg border border-blue-200">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">⚙️</div>
              <h3 className="font-bold text-sm sm:text-base mb-2 text-slate-900">Powerful Engines</h3>
              <p className="text-xs sm:text-sm text-gray-700">High-performance engines for efficient construction work</p>
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
            Need Construction Equipment for Your Project?
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
