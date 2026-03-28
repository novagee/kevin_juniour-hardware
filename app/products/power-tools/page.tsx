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

export default function PowerTools() {
  const products = [
    // 12V Cordless Tools
    {
      id: 1,
      model: 'CSPLI1211',
      name: '12V Lithium Battery Sprayer',
      category: 'Battery Sprayers',
      image: '/powertools/AB6008 Aspirator blower.jpg',
      icon: '💉',
      specs: ['12V Lithium-Ion', '16L Capacity', 'Portable Design', 'Color Box Packed'],
      price: 'Contact for Price',
    },
    {
      id: 2,
      model: 'CGGLI1201',
      name: 'Cordless Glue Gun 12V',
      category: 'Glue Guns',
      image: '/powertools/HG200038 Heat gun.jpg',
      icon: '🔨',
      specs: ['12V Voltage', '15-18g/min Gluing Capacity', '11.2mm Glue Stick Diameter', 'Cordless Design'],
      price: 'Contact for Price',
    },
    {
      id: 3,
      model: 'CIRLI1201',
      name: 'Cordless Impact Driver 12V',
      category: 'Impact Drivers',
      image: '/powertools/IW10508 Impact wrench.jpeg',
      icon: '⚡',
      specs: ['12V Voltage', '100Nm Max Torque', '6.35mm Hex Shank', 'Brushless Motor'],
      price: 'Contact for Price',
    },
    // 20V Cordless Tools
    {
      id: 4,
      model: 'CDLI2002',
      name: 'Cordless Drill 20V',
      category: 'Cordless Drills',
      image: '/powertools/JS57028 Jig saw.jpg',
      icon: '🔧',
      specs: ['20V Voltage', '0-400/0-1500rpm Speed', '45Nm Max Torque', 'Two-Speed Transmission'],
      price: 'Contact for Price',
    },
    {
      id: 5,
      model: 'CIRLI2002',
      name: 'Cordless Impact Driver 20V',
      category: 'Impact Drivers',
      image: '/powertools/IW10508 Impact wrench.jpeg',
      icon: '⚡',
      specs: ['20V Voltage', '170Nm Max Torque', 'Brushless Motor', 'Professional Grade'],
      price: 'Contact for Price',
    },
    {
      id: 6,
      model: 'CAGLI1003',
      name: 'Cordless Angle Grinder 20V (100mm)',
      category: 'Cordless Angle Grinders',
      image: '/powertools/AG750282 Angle grinder.jpg',
      icon: '⚙️',
      specs: ['20V Voltage', '100mm Disc Diameter', '8500rpm No-load Speed', 'Compact Design'],
      price: 'Contact for Price',
    },
    {
      id: 7,
      model: 'CAGLI1152',
      name: 'Cordless Angle Grinder 20V (115mm)',
      category: 'Cordless Angle Grinders',
      image: '/powertools/AG95018 Angle grinder.jpg',
      icon: '⚙️',
      specs: ['20V Voltage', '115mm Disc Diameter', '8500rpm No-load Speed', 'Brushless Motor'],
      price: 'Contact for Price',
    },
    {
      id: 8,
      model: 'CSLI1401',
      name: 'Cordless Circular Saw 20V (140mm)',
      category: 'Cordless Saws',
      image: '/powertools/JS57028 Jig saw.jpg',
      icon: '✂️',
      specs: ['20V Voltage', '140mm Blade Diameter', '3600rpm No-load Speed', 'Bevel Cutting'],
      price: 'Contact for Price',
    },
    {
      id: 9,
      model: 'CSLI1651',
      name: 'Cordless Circular Saw 20V (165mm)',
      category: 'Cordless Saws',
      image: '/powertools/JS57028 Jig saw.jpg',
      icon: '✂️',
      specs: ['20V Voltage', '165mm Blade Diameter', '4600rpm No-load Speed', 'Laser Guide'],
      price: 'Contact for Price',
    },
    {
      id: 10,
      model: 'CRSLI1151',
      name: 'Cordless Reciprocating Saw 20V',
      category: 'Cordless Saws',
      image: '/powertools/JS57028 Jig saw.jpg',
      icon: '🪚',
      specs: ['20V Voltage', '0-2800rpm No-load Speed', '8mm Metal / 115mm Wood Cutting', 'Variable Speed'],
      price: 'Contact for Price',
    },
    {
      id: 11,
      model: 'CJSLI8501',
      name: 'Cordless Jig Saw 20V',
      category: 'Cordless Saws',
      image: '/powertools/JS57028 Jig saw.jpg',
      icon: '🪚',
      specs: ['20V Voltage', '2400rpm No-load Speed', '80mm Wood / 8mm Metal Cutting', 'Tool-Free Blade Change'],
      price: 'Contact for Price',
    },
    {
      id: 12,
      model: 'CSPLI2001',
      name: '20V Lithium Battery Sprayer',
      category: 'Battery Sprayers',
      image: '/powertools/AB6008 Aspirator blower.jpg',
      icon: '💉',
      specs: ['20V Voltage', '16L Battery Sprayer', '5 Bar Pressure', 'Professional Grade'],
      price: 'Contact for Price',
    },
    {
      id: 13,
      model: 'CMLI2001',
      name: 'Cordless Multi-Tool 20V',
      category: 'Multi-Tools',
      image: '/powertools/MG1309 Mini grinder.jpeg',
      icon: '🔧',
      specs: ['20V Voltage', '5000-20000rpm No-load Speed', 'Variable Speed', 'Tool-Free Blade Sled'],
      price: 'Contact for Price',
    },
    {
      id: 14,
      model: 'CROSLI2001',
      name: 'Cordless Random Orbit Sander 20V',
      category: 'Cordless Sanders',
      image: '/powertools/PS2408 Palm sander.jpeg',
      icon: '💨',
      specs: ['20V Voltage', '125mm Bottom Size', '10000rpm No-load Speed', 'Variable Speed'],
      price: 'Contact for Price',
    },
    {
      id: 15,
      model: 'CGGLI2001',
      name: 'Cordless Glue Gun 20V',
      category: 'Glue Guns',
      image: '/powertools/HG200038 Heat gun.jpg',
      icon: '🔨',
      specs: ['20V Voltage', '15-18g/min Gluing Capacity', 'Includes 3x 150mm Glue Sticks', 'Color Box Packed'],
      price: 'Contact for Price',
    },
    {
      id: 16,
      model: 'CSILI2001',
      name: 'Cordless Soldering Iron 20V',
      category: 'Soldering Tools',
      image: '/powertools/HG200038 Heat gun.jpg',
      icon: '🔥',
      specs: ['20V Voltage', '40W Input Power', '3-5min Preheat Time', 'Portable Design'],
      price: 'Contact for Price',
    },
    {
      id: 17,
      model: 'CMS2001',
      name: 'Cordless Mitre Saw 20V',
      category: 'Cordless Saws',
      image: '/powertools/BJ9508 Biscuit jointer.jpeg',
      icon: '🪓',
      specs: ['20V Voltage', '3000rpm No-load Speed', '210mm x 25.4mm Blade Size', 'Precision Cutting'],
      price: 'Contact for Price',
    },
    // Electric (Corded) Tools
    {
      id: 18,
      model: 'ID6808',
      name: 'Impact Drill 680W',
      category: 'Electric Impact Drills',
      image: '/powertools/IW10508 Impact wrench.jpeg',
      icon: '⚡',
      specs: ['220-240V~50/60Hz', '680W Input Power', '13mm Max Drilling Capacity', 'Industrial Grade'],
      price: 'Contact for Price',
    },
    {
      id: 19,
      model: 'ID8508',
      name: 'Impact Drill 850W',
      category: 'Electric Impact Drills',
      image: '/powertools/IW10508 Impact wrench.jpeg',
      icon: '⚡',
      specs: ['220-240V~50/60Hz', '850W Input Power', '13mm Max Drilling Capacity', 'Powerful Motor'],
      price: 'Contact for Price',
    },
    {
      id: 20,
      model: 'ID11008',
      name: 'Impact Drill 1100W',
      category: 'Electric Impact Drills',
      image: '/powertools/IW10508 Impact wrench.jpeg',
      icon: '⚡',
      specs: ['220-240V~50/60Hz', '1100W Input Power', '13mm Max Drilling Capacity', 'Heavy Duty'],
      price: 'Contact for Price',
    },
    {
      id: 21,
      model: 'ED2808',
      name: 'Electric Drill 280W',
      category: 'Electric Drills',
      image: '/powertools/JS57028 Jig saw.jpg',
      icon: '🔧',
      specs: ['220-240V~50/60Hz', '280W Input Power', '10mm Max Drilling Capacity', 'Compact Design'],
      price: 'Contact for Price',
    },
    {
      id: 22,
      model: 'ED4508',
      name: 'Electric Drill 450W',
      category: 'Electric Drills',
      image: '/powertools/JS57028 Jig saw.jpg',
      icon: '🔧',
      specs: ['220-240V~50/60Hz', '450W Input Power', '6.5mm Max Drilling Capacity', 'Lightweight'],
      price: 'Contact for Price',
    },
    {
      id: 23,
      model: 'ED50028',
      name: 'Electric Drill 500W',
      category: 'Electric Drills',
      image: '/powertools/JS57028 Jig saw.jpg',
      icon: '🔧',
      specs: ['220-240V~50/60Hz', '500W Input Power', '10mm Max Drilling Capacity', 'Variable Speed'],
      price: 'Contact for Price',
    },
    {
      id: 24,
      model: 'AG750282',
      name: 'Angle Grinder 750W (100mm)',
      category: 'Electric Angle Grinders',
      image: '/powertools/AG750282 Angle grinder.jpg',
      icon: '⚙️',
      specs: ['220-240V~50/60Hz', '750W Input Power', '100mm Disc Diameter', 'Compact Size'],
      price: 'Contact for Price',
    },
    {
      id: 25,
      model: 'AG75028',
      name: 'Angle Grinder 750W (115mm)',
      category: 'Electric Angle Grinders',
      image: '/powertools/AG95018 Angle grinder.jpg',
      icon: '⚙️',
      specs: ['220-240V~50/60Hz', '750W Input Power', '115mm Disc Diameter', 'Portable'],
      price: 'Contact for Price',
    },
    {
      id: 26,
      model: 'AG900282',
      name: 'Angle Grinder 900W (100mm)',
      category: 'Electric Angle Grinders',
      image: '/powertools/AG900282 Angle grinder.png',
      icon: '⚙️',
      specs: ['220-240V~50/60Hz', '900W Input Power', '100mm Disc Diameter', 'Efficient'],
      price: 'Contact for Price',
    },
    {
      id: 27,
      model: 'AG10108',
      name: 'Angle Grinder 1010W (125mm)',
      category: 'Electric Angle Grinders',
      image: '/powertools/AG750282 Angle grinder.jpg',
      icon: '⚙️',
      specs: ['220-240V~50/60Hz', '1010W Input Power', '125mm Disc Diameter', 'Heavy Duty'],
      price: 'Contact for Price',
    },
    {
      id: 28,
      model: 'CS18538',
      name: 'Circular Saw 1400W (185mm)',
      category: 'Electric Circular Saws',
      image: '/powertools/JS57028 Jig saw.jpg',
      icon: '✂️',
      specs: ['220-240V~50/60Hz', '1400W Input Power', '185x20mm Blade Diameter', 'Laser Guide'],
      price: 'Contact for Price',
    },
    {
      id: 29,
      model: 'CS2358',
      name: 'Circular Saw 2200W (235mm)',
      category: 'Electric Circular Saws',
      image: '/powertools/PBS12001 Belt sander.jpeg',
      icon: '✂️',
      specs: ['220-240V~50/60Hz', '2200W Input Power', '235x25.4mm Blade Size', 'Professional'],
      price: 'Contact for Price',
    },
    {
      id: 30,
      model: 'JS57028',
      name: 'Jig Saw 570W',
      category: 'Electric Jig Saws',
      image: '/powertools/JS57028 Jig saw.jpg',
      icon: '🪚',
      specs: ['220-240V~50/60Hz', '570W Input Power', '65mm Wood / 8mm Steel Cutting', 'Variable Speed'],
      price: 'Contact for Price',
    },
    {
      id: 31,
      model: 'JS80028',
      name: 'Jig Saw 800W',
      category: 'Electric Jig Saws',
      image: '/powertools/AP14008 Polisher.jpg',
      icon: '🪚',
      specs: ['220-240V~50/60Hz', '800W Input Power', '100mm Wood / 10mm Steel Cutting', 'Reliable'],
      price: 'Contact for Price',
    },
    {
      id: 32,
      model: 'RH9528',
      name: 'Rotary Hammer 950W',
      category: 'Electric Rotary Hammers',
      image: '/powertools/RH12008 Rotary hammer.jpeg',
      icon: '🔨',
      specs: ['220-240V~50/60Hz', '950W Input Power', '28mm Concrete / 13mm Steel', 'SDS Chuck'],
      price: 'Contact for Price',
    },
    {
      id: 33,
      model: 'RH12008',
      name: 'Rotary Hammer 1250W',
      category: 'Electric Rotary Hammers',
      image: '/powertools/RH12008 Rotary hammer.jpeg',
      icon: '🔨',
      specs: ['220-240V~50/60Hz', '1250W Input Power', '30mm Max Concrete Drilling', 'Professional'],
      price: 'Contact for Price',
    },
    {
      id: 34,
      model: 'RH150028',
      name: 'Rotary Hammer 1500W',
      category: 'Electric Rotary Hammers',
      image: '/powertools/RH12008 Rotary hammer.jpeg',
      icon: '🔨',
      specs: ['220-240V~50/60Hz', '1500W Input Power', '32mm Max Concrete Drilling', 'Heavy Duty'],
      price: 'Contact for Price',
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-slate-900 via-slate-900 to-slate-800 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-orange-500">Power Tools</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Professional INGCO Power Tools - Industrial Grade Performance
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Summary */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Available Products ({products.length})
            </h2>
            <p className="text-gray-600">Genuine INGCO power tools with warranty and technical support</p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Product Image */}
                <div className="relative w-full h-72 bg-linear-to-br from-orange-100 to-orange-50 overflow-hidden flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-6xl hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                </div>

                {/* Product Header */}
                <div className="bg-linear-to-r from-orange-50 to-orange-100 p-4 border-b">
                  <div className="font-mono text-xs font-bold text-orange-600 mb-1">
                    Model: {product.model}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 line-clamp-2">
                    {product.name}
                  </h3>
                  <span className="inline-block mt-2 bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">
                    {product.category}
                  </span>
                </div>

                {/* Specifications */}
                <div className="px-4 py-4 grow">
                  <ul className="space-y-2">
                    {product.specs.map((spec, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-orange-500 font-bold mt-0.5">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price */}
                <div className="px-4 py-3 bg-blue-50 border-t border-blue-100">
                  <p className="text-lg font-bold text-orange-600">{product.price}</p>
                </div>

                {/* CTA */}
                <div className="border-t bg-gray-50 p-4">
                  <a
                    href="https://wa.me/254701761622"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm"
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
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose <span className="text-orange-500">INGCO Power Tools?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-linear-to-br from-slate-50 to-slate-100 p-8 rounded-xl border border-slate-200">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Industrial Power</h3>
              <p className="text-slate-600">
                High-performance motors delivering consistent power for demanding professional applications
              </p>
            </div>

            <div className="bg-linear-to-br from-slate-50 to-slate-100 p-8 rounded-xl border border-slate-200">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Durability & Reliability</h3>
              <p className="text-slate-600">
                Built with premium materials and rigorous testing for long-lasting performance in tough conditions
              </p>
            </div>

            <div className="bg-linear-to-br from-slate-50 to-slate-100 p-8 rounded-xl border border-slate-200">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Professional Standard</h3>
              <p className="text-slate-600">
                Trusted by contractors and professionals worldwide for consistent, reliable results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-orange-500 to-red-600 text-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Industrial Power Tools?
          </h2>
          <p className="text-lg text-white/90 mb-8">
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
