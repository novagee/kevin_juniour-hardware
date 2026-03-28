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

export default function AirTools() {
  const products = [
    // Brad Nails
    {
      id: 1,
      model: 'ANA18201',
      name: 'Brad Nail 20mm',
      category: 'Brad Nails',
      image: '/airtool/ANA18201Brad%20nail.jpeg',
      icon: '📍',
      specs: [
        'Brad Length: 20mm',
        '5000pcs/color box',
        'Packed by color box',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
    {
      id: 2,
      model: 'ANA18251',
      name: 'Brad Nail 25mm',
      category: 'Brad Nails',
      image: '/airtool/ANA18201Brad%20nail.jpeg',
      icon: '📍',
      specs: [
        'Brad Length: 25mm',
        '5000pcs/color box',
        'Packed by color box',
        'High Quality',
      ],
      price: 'Contact for Price',
    },
    {
      id: 3,
      model: 'ANA18301',
      name: 'Brad Nail 30mm',
      category: 'Brad Nails',
      image: '/airtool/ANA18201Brad%20nail.jpeg',
      icon: '📍',
      specs: [
        'Brad Length: 30mm (Ga18, 1.25x1.0mm)',
        '5000pcs/color box',
        'Packed by color box',
        'Durable',
      ],
      price: 'Contact for Price',
    },
    // Crown Staples
    {
      id: 4,
      model: 'AST20061',
      name: 'Crown Staple 6mm',
      category: 'Crown Staples',
      image: '/airtool/APS1501Air%20sander.jpg',
      icon: '📎',
      specs: [
        'Staple Size: 6mm',
        '5000pcs/color box',
        'Packed by color box',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
    {
      id: 5,
      model: 'AST20081',
      name: 'Crown Staple 8mm',
      category: 'Crown Staples',
      image: '/airtool/APS1501Air%20sander.jpg',
      icon: '📎',
      specs: [
        'Staple Size: 8mm',
        '5000pcs/color box',
        'Packed by color box',
        'High Quality',
      ],
      price: 'Contact for Price',
    },
    {
      id: 6,
      model: 'AST20101',
      name: 'Crown Staple 10mm',
      category: 'Crown Staples',
      image: '/airtool/APS1501Air%20sander.jpg',
      icon: '📎',
      specs: [
        'Staple Size: 10mm',
        '5000pcs/color box',
        'Packed by color box',
        'Reliable',
      ],
      price: 'Contact for Price',
    },
    {
      id: 7,
      model: 'AST20131',
      name: 'Crown Staple 13mm',
      category: 'Crown Staples',
      image: '/airtool/APS1501Air%20sander.jpg',
      icon: '📎',
      specs: [
        'Staple Size: 13mm',
        '5000pcs/color box',
        'Packed by color box',
        'Professional Standard',
      ],
      price: 'Contact for Price',
    },
    // Concrete Nails
    {
      id: 8,
      model: 'ANA01181',
      name: 'Concrete Nail 18mm',
      category: 'Concrete Nails',
      image: '/airtool/ANA01641Concrete%20nail.jpeg',
      icon: '📍',
      specs: [
        'Length: 18mm',
        '1000pcs/plastic box',
        'Packed by plastic box',
        'High Strength',
      ],
      price: 'Contact for Price',
    },
    {
      id: 9,
      model: 'ANA01251',
      name: 'Concrete Nail 25mm',
      category: 'Concrete Nails',
      image: '/airtool/ANA01641Concrete%20nail.jpeg',
      icon: '📍',
      specs: [
        'Length: 25mm',
        '1000pcs/plastic box',
        'Packed by plastic box',
        'Heavy Duty',
      ],
      price: 'Contact for Price',
    },
    {
      id: 10,
      model: 'ANA01321',
      name: 'Concrete Nail 32mm',
      category: 'Concrete Nails',
      image: '/airtool/ANA01641Concrete%20nail.jpeg',
      icon: '📍',
      specs: [
        'Length: 32mm',
        '1000pcs/plastic box',
        'Packed by plastic box',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
    {
      id: 11,
      model: 'ANA01381',
      name: 'Concrete Nail 38mm',
      category: 'Concrete Nails',
      image: '/airtool/ANA01641Concrete%20nail.jpeg',
      icon: '📍',
      specs: [
        'Length: 38mm',
        '1000pcs/plastic box',
        'Packed by plastic box',
        'Superior Quality',
      ],
      price: 'Contact for Price',
    },
    {
      id: 12,
      model: 'ANA01501',
      name: 'Concrete Nail 50mm',
      category: 'Concrete Nails',
      image: '/airtool/ANA01641Concrete%20nail.jpeg',
      icon: '📍',
      specs: [
        'Length: 50mm',
        '1000pcs/plastic box',
        'Packed by plastic box',
        'Heavy Duty',
      ],
      price: 'Contact for Price',
    },
    {
      id: 13,
      model: 'ANA01641',
      name: 'Concrete Nail 64mm',
      category: 'Concrete Nails',
      image: '/airtool/ANA01641Concrete%20nail.jpeg',
      icon: '📍',
      specs: [
        'Length: 64mm',
        '1000pcs/plastic box',
        'Packed by plastic box',
        'Professional Standard',
      ],
      price: 'Contact for Price',
    },
    // Air Hoses
    {
      id: 14,
      model: 'AH1051-3',
      name: 'Air Hose 5M',
      category: 'Air Hoses',
      image: '/airtool/AH1051-3Air%20hose.jpeg',
      icon: '🧵',
      specs: [
        'Length: 5M',
        'Material: PU',
        'Nitto Type Connector',
        'Durable Design',
      ],
      price: 'Contact for Price',
    },
    {
      id: 15,
      model: 'AH1101-3',
      name: 'Air Hose 10M',
      category: 'Air Hoses',
      image: '/airtool/AH1051-3Air%20hose.jpeg',
      icon: '🧵',
      specs: [
        'Length: 10M',
        'Material: PU',
        'Nitto Type Connector',
        'Flexible',
      ],
      price: 'Contact for Price',
    },
    {
      id: 16,
      model: 'AH1151-3',
      name: 'Air Hose 15M',
      category: 'Air Hoses',
      image: '/airtool/AH1151-3Air%20hose.jpeg',
      icon: '🧵',
      specs: [
        'Length: 15M',
        'Material: PU',
        'Nitto Type Connector',
        'Professional Grade',
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
              <span className="text-orange-500">Air Tools & Fasteners</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Professional INGCO Air Tools & Fasteners - High Quality and Reliable Performance
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
            <p className="text-xs sm:text-sm text-gray-600">Genuine INGCO air tools and fasteners with warranty and technical support</p>
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
            Why Choose INGCO Air Tools & Fasteners
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-linear-to-br from-orange-50 to-orange-100 p-4 sm:p-6 rounded-lg border border-orange-200">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">⚙️</div>
              <h3 className="font-bold text-sm sm:text-base mb-2 text-slate-900">Professional Grade</h3>
              <p className="text-xs sm:text-sm text-gray-700">High-quality fasteners and tools for professional use</p>
            </div>
            <div className="bg-linear-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-lg border border-blue-200">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">🔧</div>
              <h3 className="font-bold text-sm sm:text-base mb-2 text-slate-900">Precision Design</h3>
              <p className="text-xs sm:text-sm text-gray-700">Accurately engineered for optimal performance</p>
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
            Need Air Tools or Fasteners?
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
