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

export default function ProductAccessories() {
  const products = [
    // Diamond Discs & Grinding
    {
      id: 1,
      model: 'DMD011101',
      name: 'Dry Diamond Disc 110mm',
      category: 'Diamond Discs',
      image: '/accessories/DMD011101Dry diamond disc.jpeg',
      icon: '💎',
      specs: ['110mm (4-3/8") Diameter', '20mm Center', '12mm Blade Width', 'Double Blister Pack'],
      price: 'Contact for Price',
    },
    {
      id: 2,
      model: 'CGW011151',
      name: 'Diamond Cup Wheels 115mm',
      category: 'Diamond Wheels',
      image: '/accessories/CGW011151Diamond cup wheels.jpg',
      icon: '⚙️',
      specs: ['115mm (4-1/2") Diameter', '22.2mm Center', '20mm Blade Width', 'Double Blister Pack'],
      price: 'Contact for Price',
    },
    {
      id: 3,
      model: 'CGW011251',
      name: 'Diamond Cup Wheels 125mm',
      category: 'Diamond Wheels',
      image: '/accessories/CGW011251Diamond cup wheels.jpg',
      icon: '⚙️',
      specs: ['125mm (5") Diameter', '22.2mm Center', '20mm Blade Width', 'Double Blister Pack'],
      price: 'Contact for Price',
    },
    {
      id: 4,
      model: 'CGW021251',
      name: 'Diamond Cup Wheels 125mm (Multi-blade)',
      category: 'Diamond Wheels',
      image: '/accessories/CGW021251Diamond cup wheels.jpg',
      icon: '⚙️',
      specs: ['125mm (5") Diameter', '22.2mm Center', '20 Blade Segments', 'Double Blister Pack'],
      price: 'Contact for Price',
    },
    // Drill Bits Sets
    {
      id: 5,
      model: 'AKSD0071',
      name: '9 Pcs Screwdriver Bits Set',
      category: 'Screwdriver Sets',
      image: '/accessories/AKSD00719 Pcs screwdriver bits set.jpg',
      icon: '🔩',
      specs: ['PH1, PH2, PH3, SL4.0, SL5.5, SL6.5, PZ1, PZ2', '9 Pieces Per Set', 'Sliding Card Pack', 'Professional Grade'],
      price: 'Contact for Price',
    },
    {
      id: 6,
      model: 'AKRT1201',
      name: '12 Pcs Router Bits Set (6mm)',
      category: 'Router Bits',
      image: '/accessories/AKRT120112 Pcs router bits set.jpg',
      icon: '🔧',
      specs: ['6mm Shank Diameter', '12 Pieces Per Set', 'Suitable for Wood Cutting', 'Plywood Case Pack'],
      price: 'Contact for Price',
    },
    {
      id: 7,
      model: 'HKTWC0401',
      name: '4 Pcs Wood Chisel Set',
      category: 'Chisels',
      image: '/accessories/HKTWC0401Wood chisel.jpg',
      icon: '🪵',
      specs: ['6mm, 12mm, 19mm, 25mm Widths', 'Cr-V Material', '140mm Length', 'Professional Quality'],
      price: 'Contact for Price',
    },
    // Screwdriver & Bits
    {
      id: 8,
      model: 'SDB11PZ213',
      name: 'Screwdriver Bits PZ2',
      category: 'Screwdriver Bits',
      image: '/accessories/SDB11PZ213Screwdriver bits.jpg',
      icon: '🔩',
      specs: ['PZ2 Type', '25mm Length', '20 Pieces Per Set', 'Plastic Box Pack'],
      price: 'Contact for Price',
    },
    {
      id: 9,
      model: 'ABH10601',
      name: 'Screwdriver Bit Holder',
      category: 'Bit Holders',
      image: '/accessories/ABH10601Screwdriver bit holder.jpeg',
      icon: '🔧',
      specs: ['60mm Length', '2 Pieces Per Set', 'Steel + Cr-V Material', 'Double Blister Pack'],
      price: 'Contact for Price',
    },
    // Chucks & Keys
    {
      id: 10,
      model: 'KC1001',
      name: '10mm Key Chuck',
      category: 'Chucks',
      image: '/accessories/KC100110mm Key chuck.png',
      icon: '🔩',
      specs: ['0.8-10mm Capacity', '3/8" Connection Size', 'Drill Chuck', 'Double Blister Pack'],
      price: 'Contact for Price',
    },
    {
      id: 11,
      model: 'KC1301',
      name: '13mm Key Chuck',
      category: 'Chucks',
      image: '/accessories/KC130113mm Key chuck.jpg',
      icon: '🔩',
      specs: ['1.5-13mm Capacity', '1/2" Connection Size', 'Drill Chuck', 'Double Blister Pack'],
      price: 'Contact for Price',
    },
    {
      id: 12,
      model: 'KC1601',
      name: '16mm Key Chuck',
      category: 'Chucks',
      image: '/accessories/KC160116mm Key chuck.jpg',
      icon: '🔩',
      specs: ['3-16mm Capacity', '1/2" Connection Size', 'Drill Chuck', 'Double Blister Pack'],
      price: 'Contact for Price',
    },
    {
      id: 13,
      model: 'CK1301',
      name: 'Chuck Key',
      category: 'Chuck Keys',
      image: '/accessories/CK1301Chuck key.jpg',
      icon: '🔑',
      specs: ['For 13mm Key Chuck', '80mm Length', 'Sliding Card Pack', 'Professional Grade'],
      price: 'Contact for Price',
    },
    // Saw Blades
    {
      id: 14,
      model: 'TSB111015',
      name: 'TCT Saw Blade 110mm',
      category: 'Saw Blades',
      image: '/accessories/TSB111015TCT saw blade.jpg',
      icon: '⚔️',
      specs: ['110mm (4-3/8") Diameter', '20mm Arbor', '40T for Wood', 'Double Blister Pack'],
      price: 'Contact for Price',
    },
    {
      id: 15,
      model: 'JBT244D',
      name: 'Jig Saw Blade for Wood',
      category: 'Jig Saw Blades',
      image: '/accessories/JBT244DJig saw blade for wood.jpg',
      icon: '🪚',
      specs: ['6 TPI Speed for Wood', '74mm Tooth Length', '5 Pieces Per Set', 'Professional Grade'],
      price: 'Contact for Price',
    },
    {
      id: 16,
      model: 'JBT101D',
      name: 'Jig Saw Blade Clean for Wood',
      category: 'Jig Saw Blades',
      image: '/accessories/JBT101DJig saw blade for wood.jpg',
      icon: '🪚',
      specs: ['Clean Cut for Wood', '74mm Tooth Length', 'Professional Quality', 'Single Piece'],
      price: 'Contact for Price',
    },
    // Hole Core Bits
    {
      id: 17,
      model: 'HCB0501',
      name: 'Hole Core Bit 50mm',
      category: 'Hole Core Bits',
      image: '/accessories/HCB0501Hole core bit.jpg',
      icon: '⚙️',
      specs: ['50mm Diameter', '5 TCT Blades', 'Color Box Pack', 'Professional Grade'],
      price: 'Contact for Price',
    },
    {
      id: 18,
      model: 'HCB0801',
      name: 'Hole Core Bit 80mm',
      category: 'Hole Core Bits',
      image: '/accessories/HCB0801Hole core bit.jpg',
      icon: '⚙️',
      specs: ['80mm Diameter', '8 TCT Blades', 'Color Box Pack', 'Professional Grade'],
      price: 'Contact for Price',
    },
    // Wire Wheels & Brushes
    {
      id: 19,
      model: 'WB10752',
      name: 'Wire Cup Brush 75mm',
      category: 'Wire Brushes',
      image: '/accessories/WB10752Wire cup brush.jpeg',
      icon: '🧹',
      specs: ['75mm (3") Diameter', 'M10x1.5 Thread', '0.3mm Wire Diameter', 'Professional Quality'],
      price: 'Contact for Price',
    },
    {
      id: 20,
      model: 'WB20752',
      name: 'Wire Cup Brush 75mm (0.5mm)',
      category: 'Wire Brushes',
      image: '/accessories/WB20752Wire cup brush.jpeg',
      icon: '🧹',
      specs: ['75mm (3") Diameter', 'M10x1.5 Thread', '0.5mm Wire Diameter', 'Heavy Duty'],
      price: 'Contact for Price',
    },
    {
      id: 21,
      model: 'WB30751',
      name: 'Wire Cup Brush 75mm (1/4")',
      category: 'Wire Brushes',
      image: '/accessories/WB30751Wire cup brush.jpeg',
      icon: '🧹',
      specs: ['75mm (3") Diameter', '1/4" Shank Diameter', '0.3mm Wire Diameter', 'Professional Grade'],
      price: 'Contact for Price',
    },
    {
      id: 22,
      model: 'WB41001',
      name: 'Wire Wheels 100mm',
      category: 'Wire Wheels',
      image: '/accessories/WB41001Wire wheels.jpeg',
      icon: '🔄',
      specs: ['100mm (4") Diameter', '1/4" Shank Diameter', '0.3mm Wire Diameter', 'Wheel Type'],
      price: 'Contact for Price',
    },
    // Polishing
    {
      id: 23,
      model: 'APB0111801',
      name: 'Wool Polishing Bonnet 180mm',
      category: 'Polishing Pads',
      image: '/accessories/APB0111801Wool polishing bonnet.jpeg',
      icon: '✨',
      specs: ['180mm Diameter', 'Real Wool Bonnet', 'Drawstring Design', 'For Polishing'],
      price: 'Contact for Price',
    },
    {
      id: 24,
      model: 'APP0201801',
      name: 'Polishing Pad with Flange 180mm (Rubber)',
      category: 'Polishing Pads',
      image: '/accessories/APP0201801Polishing pad with flange.jpeg',
      icon: '✨',
      specs: ['180mm Diameter', 'Rubber Material', 'M14x2 Nut', 'For Wool Polishing Bonnet'],
      price: 'Contact for Price',
    },
    // Chisel
    {
      id: 25,
      model: 'HCCL082412',
      name: 'Cold Chisel 25mm',
      category: 'Chisels',
      image: '/accessories/HCCL082412Cold chisel.jpg',
      icon: '🪓',
      specs: ['25mm x 18mm x 300mm', '45# Carbon Steel', 'Unique Design Handle', 'Professional Grade'],
      price: 'Contact for Price',
    },
    {
      id: 26,
      model: 'HWC0806',
      name: 'Wood Chisel 6mm',
      category: 'Chisels',
      image: '/accessories/HWC0806Wood chisel.jpg',
      icon: '🪵',
      specs: ['6mm (1/4") Width', '140mm Length', 'Cr-V Material', 'Professional Chisel'],
      price: 'Contact for Price',
    },
    // Sanding
    {
      id: 27,
      model: 'AKFS140102',
      name: 'Sanding Sheet Set 145x114mm',
      category: 'Sanding Sheets',
      image: '/accessories/AKFS140102Sanding sheet set.jpeg',
      icon: '💨',
      specs: ['145x114mm Size', '3pcs P80, 2pcs P120', 'Label Pack', 'Professional Grade'],
      price: 'Contact for Price',
    },
    {
      id: 28,
      model: 'AKFS264115',
      name: 'Sanding Sheet Set 264x115mm',
      category: 'Sanding Sheets',
      image: '/accessories/AKFS264115Sanding sheet set.jpeg',
      icon: '💨',
      specs: ['264x115mm Size', '5pcs P120', 'Label Pack', 'Professional Quality'],
      price: 'Contact for Price',
    },
    {
      id: 29,
      model: 'AKRS150051',
      name: 'Sanding Sheet Random Orbital 150mm',
      category: 'Sanding Sheets',
      image: '/accessories/AKRS150051Sanding sheet for random orbital sander.jpeg',
      icon: '💨',
      specs: ['150mm Diameter', '5 Pieces Per Set', '3pcs P80, 2pcs P120', 'Label Pack'],
      price: 'Contact for Price',
    },
    // Tools Accessories
    {
      id: 30,
      model: 'EPB820301',
      name: 'Planer Blade HSS',
      category: 'Planer Blades',
      image: '/accessories/EPB820301Planer blade.jpeg',
      icon: '🪚',
      specs: ['82mm x 29mm x 3.0mm', 'HSS Material', '2 Pieces Per Set', 'Professional Grade'],
      price: 'Contact for Price',
    },
    {
      id: 31,
      model: 'MP1120',
      name: 'Mix Paddle 120mm',
      category: 'Mixing Tools',
      image: '/accessories/MP1120Mix paddle.jpg',
      icon: '🔧',
      specs: ['120mm Diameter', '600mm Total Length', 'M14x2 Fitting', 'Professional Grade'],
      price: 'Contact for Price',
    },
    // Impact Nuts
    {
      id: 32,
      model: 'AMN1231',
      name: '3 Pcs Impact Magnetic Nut Set 12mm',
      category: 'Magnetic Nut Sets',
      image: '/accessories/AMN12313 Pcs impact magnetic nut set.jpeg',
      icon: '🧲',
      specs: ['12mm Nuts', '3 Pieces Per Set', '1/4" Hex Shank', '65mm Length'],
      price: 'Contact for Price',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-linear-to-br from-orange-600 to-orange-800 text-white py-8 sm:py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">Product Accessories</h1>
          <p className="text-xs sm:text-sm md:text-base text-orange-100 max-w-2xl leading-relaxed">
            Premium INGCO accessories for all your power tools - from drill bits to saw blades, chisels to brushes.
            Everything you need for professional-grade results.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="grow w-full py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative h-60 sm:h-64 lg:h-72 bg-linear-to-br from-orange-100 to-orange-50 overflow-hidden flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={224}
                    unoptimized
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {product.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="grow p-2.5 sm:p-4">
                  <div className="mb-2 text-xs text-white bg-orange-600 inline-block px-2 py-1 rounded">
                    {product.category}
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">Model: {product.model}</p>

                  {/* Specs */}
                  <ul className="mb-2 sm:mb-4 space-y-0.5">
                    {product.specs.map((spec, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start gap-1.5">
                        <span className="shrink-0">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <p className="text-base sm:text-lg font-bold text-orange-600 mb-3 sm:mb-4">{product.price}</p>

                  {/* CTA Button */}
                  <a
                    href="https://wa.me/254701761622?text=Hi,%20I%20am%20interested%20in%20the%20product%20accessory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold py-2 px-3 sm:px-4 rounded-lg transition-colors duration-300 text-xs sm:text-sm gap-1.5"
                  >
                    <WhatsAppIcon />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose INGCO */}
      <section className="w-full bg-white py-8 sm:py-12 md:py-16 border-t">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-gray-800">Why Choose INGCO Accessories?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🏆</div>
              <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800">Premium Quality</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                All accessories are manufactured to the highest quality standards with precision engineering.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">⚙️</div>
              <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800">Professional Grade</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Perfect for professionals and DIY enthusiasts alike, designed for durability and performance.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">✨</div>
              <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-800">Wide Selection</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Comprehensive range of bits, blades, brushes, and tools to meet all your project needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-linear-to-r from-orange-600 to-orange-700 text-white py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Need Bulk Orders?</h2>
          <p className="text-xs sm:text-base text-orange-100 mb-4 sm:mb-8 leading-relaxed">Contact us for competitive wholesale pricing and special discounts</p>
          <a
            href="https://wa.me/254701761622"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-lg transition-colors duration-300 gap-2 text-xs sm:text-base"
          >
            <WhatsAppIcon />
            <span>Contact for Bulk Orders</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
