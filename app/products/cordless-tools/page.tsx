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

export default function CordlessTools() {
  const products = [
    {
      id: 1,
      model: 'CKLI1201',
      name: 'Cordless 2 pcs Combo Kit',
      category: 'Combo Kits',
      image: 'https://www.ingco.com/userfiles/1/images/photo/2008181423465/CKLI1201.jpg',
      icon: '🔧',
      specs: ['12V Lithium-Ion', '1x Drill + 1x Impact Driver', '220-240V Charger'],
      price: 'KES 12,500',
    },
    {
      id: 2,
      model: 'CSDLI0801',
      name: 'Cordless Screwdriver',
      category: 'Screwdrivers',
      image: 'https://www.ingco.com/userfiles/1/images/photo/20200730/CSDLI0801.JPG',
      icon: '⚙️',
      specs: ['8V Power', '0-220/min Speed', '1/4" Hex Shank'],
      price: 'KES 3,200',
    },
    {
      id: 3,
      model: 'CDLI20012',
      name: 'Cordless Drill',
      category: 'Drills',
      image: 'https://www.ingco.com/website-center/upload/images/dac5650e04d64df6844e260660737298.jpg',
      icon: '🔨',
      specs: ['20V Lithium-Ion', '0-400/0-1500 rpm', 'Plastic Box Packed'],
      price: 'KES 8,900',
    },
    {
      id: 4,
      model: 'CIDLI20012',
      name: 'Cordless Impact Drill',
      category: 'Impact Drills',
      image: 'https://www.ingco.com/website-center/upload/images/87725529e1124786ae68b82dbb1522cb.webp',
      icon: '⚡',
      specs: ['20V Power', '0-400/0-1500 rpm', '18+1+1 Torque Settings'],
      price: 'KES 9,500',
    },
    {
      id: 5,
      model: 'CIWLI2001',
      name: 'Cordless Impact Wrench',
      category: 'Impact Wrenches',
      image: 'https://www.ingco.com/website-center/upload/images/f45808c099d745838a69c2399817c84f.webp',
      icon: '🔩',
      specs: ['20V Brushless Motor', '300Nm Max Torque', 'Professional Grade'],
      price: 'KES 14,200',
    },
    {
      id: 6,
      model: 'CABLI20018',
      name: 'Cordless Blower',
      category: 'Blowers',
      image: 'https://www.ingco.com/website-center/upload/images/7d143c1060534ee1b37f713828af3226.webp',
      icon: '💨',
      specs: ['20V Power', '0-9000/0-18000 rpm', '2.7m³/min Air Volume'],
      price: 'KES 5,800',
    },
    {
      id: 7,
      model: 'CKLI2006',
      name: 'Cordless 2 Pcs Combo Kit',
      category: 'Combo Kits',
      image: 'https://www.ingco.com/website-center/upload/images/229f912480df4c1495fbbca0985ecb4d.webp',
      icon: '🔧',
      specs: ['20V Lithium-Ion', '1x Drill + 1x Impact Driver', '2x Batteries Included'],
      price: 'KES 18,500',
    },
    {
      id: 8,
      model: 'CKLI2008',
      name: 'Cordless 2 Pcs Combo Kit',
      category: 'Combo Kits',
      image: 'https://www.ingco.com/website-center/upload/images/c86968a884c646b6bf2f53853d739448.webp',
      icon: '🔧',
      specs: ['20V Power', '1x Drill + 1x Rotary Hammer', 'Complete Kit'],
      price: 'KES 22,000',
    },
    {
      id: 9,
      model: 'CRHLI22012',
      name: 'Cordless Rotary Hammer',
      category: 'Rotary Hammers',
      image: 'https://www.ingco.com/website-center/upload/images/dac5650e04d64df6844e260660737298.jpg',
      icon: '🔨',
      specs: ['20V Brushless', '0-1350 rpm', '0-5100 bpm Impact Rate'],
      price: 'KES 16,800',
    },
    {
      id: 10,
      model: 'FBLI2002',
      name: 'Lithium-Ion Battery Pack',
      category: 'Batteries & Chargers',
      image: 'https://www.ingco.com/website-center/upload/images/87725529e1124786ae68b82dbb1522cb.webp',
      icon: '🔋',
      specs: ['20V Power', '4.0Ah Capacity', 'LED Power Indicator'],
      price: 'KES 2,800',
    },
    {
      id: 11,
      model: 'FCLI2001',
      name: 'P20S Battery Charger',
      category: 'Batteries & Chargers',
      image: 'https://www.ingco.com/website-center/upload/images/f45808c099d745838a69c2399817c84f.webp',
      icon: '⚡',
      specs: ['220-240V Input', '20V Output', '2A Output Current'],
      price: 'KES 2,200',
    },
    {
      id: 12,
      model: 'CVLI2005E',
      name: 'Cordless Vacuum Cleaner',
      category: 'Vacuum Cleaners',
      image: 'https://www.ingco.com/website-center/upload/images/7d143c1060534ee1b37f713828af3226.webp',
      icon: '🌪️',
      specs: ['20V Power', '≥8.0KPa Suction', '20L Dust Capacity'],
      price: 'KES 11,500',
    },
    {
      id: 13,
      model: 'CRHLI1601',
      name: 'Cordless Rotary Hammer',
      category: 'Rotary Hammers',
      image: 'https://www.ingco.com/website-center/upload/images/80775c873eb1402bba7f16c414e92b10.jpg',
      icon: '🔨',
      specs: ['20V Power', '0-900 rpm', '0-5100 bpm Impact Rate'],
      price: 'KES 14,500',
    },
    {
      id: 14,
      model: 'CSGLI2001',
      name: 'Cordless Spray Gun',
      category: 'Spray Equipment',
      image: 'https://www.ingco.com/userfiles/1/images/photo/20200901231500423/CSGLI2001.jpg',
      icon: '💉',
      specs: ['20V Power', '0.1-0.2Bar Pressure', '600ml/min Flow Rate'],
      price: 'KES 8,700',
    },
    {
      id: 15,
      model: 'CJRLI2001',
      name: 'Cordless Job Radio',
      category: 'Accessories',
      image: 'https://www.ingco.com/userfiles/1/images/photo/20200730/CJRLI2001.jpg',
      icon: '📻',
      specs: ['20V Power', '522-1710KHz AM', '87.5-108MHz FM'],
      price: 'KES 4,900',
    },
    {
      id: 16,
      model: 'CFALI2002',
      name: 'Cordless Fan (11")',
      category: 'Accessories',
      image: 'https://www.ingco.com/userfiles/1/images/photo/20200730/CFALI2002.jpg',
      icon: '💨',
      specs: ['20V DC/220-240V AC', '5V/2A Output', 'Dual Power'],
      price: 'KES 5,200',
    },
    {
      id: 17,
      model: 'CSTLI2001',
      name: 'Cordless Garden Shear',
      category: 'Garden Tools',
      image: 'https://www.ingco.com/userfiles/1/images/photo/CSTLI2001.png',
      icon: '✂️',
      specs: ['20V Power', '1200 rpm Speed', 'SK5 Blade Material'],
      price: 'KES 6,800',
    },
    {
      id: 18,
      model: 'CABLI2001',
      name: 'Cordless Aspirator Blower',
      category: 'Blowers',
      image: 'https://www.ingco.com/website-center/upload/images/90901dced6bb41c4a8e05d8aa6c2cb09.jpg',
      icon: '💨',
      specs: ['20V Power', '10000/12500/17000 rpm', '2.7m³/min Air Volume'],
      price: 'KES 7,200',
    },
    {
      id: 19,
      model: 'CTLI2002',
      name: 'Cordless Hydraulic Crimping Tool',
      category: 'Specialty Tools',
      image: 'https://www.ingco.com/userfiles/1/images/photo/20200730/CTLI2002.jpg',
      icon: '🔧',
      specs: ['20V Power', '16-400mm² Range', '120KN Crimping Force'],
      price: 'KES 24,500',
    },
    {
      id: 20,
      model: 'CRCLI2002',
      name: 'Cordless Hydraulic Cable Cutter',
      category: 'Specialty Tools',
      image: 'https://www.ingco.com/website-center/upload/images/229f912480df4c1495fbbca0985ecb4d.webp',
      icon: '✂️',
      specs: ['20V Power', '85mm Max Diameter', '60KN Cutting Force'],
      price: 'KES 18,900',
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
              <span className="text-orange-500">Cordless Tools</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Professional INGCO Cordless Tools - Powerful, Portable, and Reliable
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
            <p className="text-xs sm:text-sm text-gray-600">Genuine INGCO cordless tools with warranty</p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Product Image */}
                <div className="relative w-full h-56 sm:h-64 md:h-72 bg-linear-to-br from-orange-100 to-orange-50 overflow-hidden flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
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

                {/* Specifications */}
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

                {/* CTA */}
                <div className="border-t bg-gray-50 p-2.5 sm:p-4">
                  <a
                    href="https://wa.me/254701761622"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    <WhatsAppIcon />
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose INGCO Section */}
      <section className="py-8 sm:py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">
              Why Choose <span className="text-orange-500">INGCO Cordless Tools?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-linear-to-br from-slate-50 to-slate-100 p-4 sm:p-6 md:p-8 rounded-xl border border-slate-200">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚡</div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Powerful Performance</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                High-torque motors and brushless technology for maximum efficiency and durability
              </p>
            </div>

            <div className="bg-linear-to-br from-slate-50 to-slate-100 p-4 sm:p-6 md:p-8 rounded-xl border border-slate-200">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔋</div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Long Battery Life</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Lithium-ion batteries provide extended runtime and quick charging for continuous work
              </p>
            </div>

            <div className="bg-linear-to-br from-slate-50 to-slate-100 p-4 sm:p-6 md:p-8 rounded-xl border border-slate-200">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛠️</div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Professional Grade</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Industry-leading reliability and warranty support for professional contractors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-orange-500 to-red-600 text-white py-8 sm:py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            Ready to Upgrade Your Tools?
          </h2>
          <p className="text-xs sm:text-base text-white/90 mb-4 sm:mb-8 leading-relaxed">
            Contact us for bulk orders, wholesale pricing, and technical support
          </p>
          <a
            href="https://wa.me/254701761622"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-white text-orange-600 px-4 sm:px-8 py-2 sm:py-4 rounded-lg font-bold text-sm sm:text-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
