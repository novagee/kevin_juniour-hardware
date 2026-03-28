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

export default function MeasuringTools() {
  const products = [
    // Steel Measuring Tapes - Metric & Inch
    {
      id: 1,
      model: 'HSMT0803',
      name: 'Steel Measuring Tape 3m',
      category: 'Steel Tapes',
      image: '/measuring/HSMT0803Steel%20measuring%20tape.jpg',
      icon: '📏',
      specs: [
        'Length: 3m x Width: 16mm',
        'Metric & Inch Scale',
        'Self Lock Function',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
    {
      id: 2,
      model: 'HSMT08052',
      name: 'Steel Measuring Tape 5m (19mm)',
      category: 'Steel Tapes',
      image: '/measuring/HSMT0803%20measuring%20tape.jpg',
      icon: '📏',
      specs: [
        'Length: 5m x Width: 19mm',
        'Metric & Inch Scale',
        'Self Lock Function',
        'Durable',
      ],
      price: 'Contact for Price',
    },
    {
      id: 3,
      model: 'HSMT0805',
      name: 'Steel Measuring Tape 5m (25mm)',
      category: 'Steel Tapes',
      image: '/measuring/HSMT8805%20Steel%20measuring%20tape.jpg',
      icon: '📏',
      specs: [
        'Length: 5m x Width: 25mm',
        'Metric & Inch Scale',
        'Self Lock Function',
        'Heavy Duty',
      ],
      price: 'Contact for Price',
    },
    {
      id: 4,
      model: 'HSMT0808',
      name: 'Steel Measuring Tape 8m',
      category: 'Steel Tapes',
      image: '/measuring/HSMT0803%20measuring%20tape.jpg',
      icon: '📏',
      specs: [
        'Length: 8m x Width: 25mm',
        'Metric & Inch Scale',
        'Self Lock Function',
        'Professional Standard',
      ],
      price: 'Contact for Price',
    },
    {
      id: 5,
      model: 'HSMT0810',
      name: 'Steel Measuring Tape 10m',
      category: 'Steel Tapes',
      image: '/measuring/HSMT0803%20measuring%20tape.jpg',
      icon: '📏',
      specs: [
        'Length: 10m x Width: 25mm',
        'Metric & Inch Scale',
        'Self Lock Function',
        'Extra Long Range',
      ],
      price: 'Contact for Price',
    },

    // Steel Measuring Tapes - Metric Only
    {
      id: 6,
      model: 'HSMT0803.1',
      name: 'Steel Measuring Tape 3m (Metric)',
      category: 'Steel Tapes',
      image: '/measuring/HSMT0803Steel%20measuring%20tape.jpg',
      icon: '📏',
      specs: [
        'Length: 3m x Width: 16mm',
        'Metric Scale Only',
        'Self Lock Function',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
    {
      id: 7,
      model: 'HSMT08052.1',
      name: 'Steel Measuring Tape 5m (Metric, 19mm)',
      category: 'Steel Tapes',
      image: '/measuring/HSMT0803%20measuring%20tape.jpg',
      icon: '📏',
      specs: [
        'Length: 5m x Width: 19mm',
        'Metric Scale Only',
        'Self Lock Function',
        'Durable',
      ],
      price: 'Contact for Price',
    },
    {
      id: 8,
      model: 'HSMT0805.1',
      name: 'Steel Measuring Tape 5m (Metric, 25mm)',
      category: 'Steel Tapes',
      image: '/measuring/HSMT8805%20Steel%20measuring%20tape.jpg',
      icon: '📏',
      specs: [
        'Length: 5m x Width: 25mm',
        'Metric Scale Only',
        'Self Lock Function',
        'Heavy Duty',
      ],
      price: 'Contact for Price',
    },
    {
      id: 9,
      model: 'HSMT0808.1',
      name: 'Steel Measuring Tape 8m (Metric)',
      category: 'Steel Tapes',
      image: '/measuring/HSMT0803%20measuring%20tape.jpg',
      icon: '📏',
      specs: [
        'Length: 8m x Width: 25mm',
        'Metric Scale Only',
        'Self Lock Function',
        'Professional Standard',
      ],
      price: 'Contact for Price',
    },
    {
      id: 10,
      model: 'HSMT0810.1',
      name: 'Steel Measuring Tape 10m (Metric)',
      category: 'Steel Tapes',
      image: '/measuring/HSMT0803%20measuring%20tape.jpg',
      icon: '📏',
      specs: [
        'Length: 10m x Width: 25mm',
        'Metric Scale Only',
        'Self Lock Function',
        'Extra Long Range',
      ],
      price: 'Contact for Price',
    },

    // Nylon Blade Measuring Tapes
    {
      id: 11,
      model: 'HSMT8805',
      name: 'Nylon Blade Measuring Tape 5m',
      category: 'Nylon Blade Tapes',
      image: '/measuring/HSMT8805%20Steel%20measuring%20tape.jpg',
      icon: '📏',
      specs: [
        'Length: 5m x Width: 25mm',
        'Metric & Inch Scale',
        'Nylon Blade Coating',
        'Durable',
      ],
      price: 'Contact for Price',
    },
    {
      id: 12,
      model: 'HSMT8808',
      name: 'Nylon Blade Measuring Tape 8m',
      category: 'Nylon Blade Tapes',
      image: '/measuring/HSMT0803%20measuring%20tape.jpg',
      icon: '📏',
      specs: [
        'Length: 8m x Width: 25mm',
        'Metric & Inch Scale',
        'Nylon Blade Coating',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
    {
      id: 13,
      model: 'HSMT88052.1',
      name: 'Nylon Blade Measuring Tape 5m (Metric)',
      category: 'Nylon Blade Tapes',
      image: '/measuring/HSMT0803%20measuring%20tape.jpg',
      icon: '📏',
      specs: [
        'Length: 5m x Width: 19mm',
        'Metric Scale Only',
        'Nylon Blade Coating',
        'Durable',
      ],
      price: 'Contact for Price',
    },
    {
      id: 14,
      model: 'HSMT8805.1',
      name: 'Nylon Blade Measuring Tape 5m (Metric, 25mm)',
      category: 'Nylon Blade Tapes',
      image: '/measuring/HSMT8805%20Steel%20measuring%20tape.jpg',
      icon: '📏',
      specs: [
        'Length: 5m x Width: 25mm',
        'Metric Scale Only',
        'Nylon Blade Coating',
        'Heavy Duty',
      ],
      price: 'Contact for Price',
    },
    {
      id: 15,
      model: 'HSMT8808.1',
      name: 'Nylon Blade Measuring Tape 8m (Metric)',
      category: 'Nylon Blade Tapes',
      image: '/measuring/HSMT0803%20measuring%20tape.jpg',
      icon: '📏',
      specs: [
        'Length: 8m x Width: 25mm',
        'Metric Scale Only',
        'Nylon Blade Coating',
        'Professional Standard',
      ],
      price: 'Contact for Price',
    },

    // Fast Rewind Measuring Tapes
    {
      id: 16,
      model: 'HSMT8420',
      name: 'Fast Rewind Measuring Tape 20m',
      category: 'Fast Rewind Tapes',
      image: '/measuring/HSMT8420%20Steel%20measuring%20tape.jpg',
      icon: '📏',
      specs: [
        'Length: 20m x Width: 12.5mm',
        'Metric & Inch Scale',
        '3:1 Gear Ratio Fast Rewind',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
    {
      id: 17,
      model: 'HSMT8430',
      name: 'Fast Rewind Measuring Tape 30m',
      category: 'Fast Rewind Tapes',
      image: '/measuring/HSMT0803%20measuring%20tape.jpg',
      icon: '📏',
      specs: [
        'Length: 30m x Width: 12.5mm',
        'Metric & Inch Scale',
        '3:1 Gear Ratio Fast Rewind',
        'Heavy Duty',
      ],
      price: 'Contact for Price',
    },

    // Fibreglass Measuring Tapes
    {
      id: 18,
      model: 'HFMT8120',
      name: 'Fibreglass Measuring Tape 20m',
      category: 'Fibreglass Tapes',
      image: '/measuring/HFMT8130Fibreglass%20measuring%20tape.jpg',
      icon: '📏',
      specs: [
        'Length: 20m x Width: 12.5mm',
        'Metric & Inch Scale',
        'Durable Fibreglass Material',
        'Weather Resistant',
      ],
      price: 'Contact for Price',
    },
    {
      id: 19,
      model: 'HFMT8130',
      name: 'Fibreglass Measuring Tape 30m',
      category: 'Fibreglass Tapes',
      image: '/measuring/HFMT8130Fibreglass%20measuring%20tape.jpg',
      icon: '📏',
      specs: [
        'Length: 30m x Width: 12.5mm',
        'Metric & Inch Scale',
        'Durable Fibreglass Material',
        'Professional Standard',
      ],
      price: 'Contact for Price',
    },

    // Spirit Levels
    {
      id: 20,
      model: 'HSL08030',
      name: 'Spirit Level 30cm',
      category: 'Spirit Levels',
      image: '/measuring/HSMT0803Steel%20measuring%20tape.jpg',
      icon: '📐',
      specs: [
        'Length: 30cm',
        'Thickness: 1.5mm',
        '0.5mm/m Accurate Vials',
        'Compact',
      ],
      price: 'Contact for Price',
    },
    {
      id: 21,
      model: 'HSL08040',
      name: 'Spirit Level 40cm',
      category: 'Spirit Levels',
      image: '/measuring/HSMT0803Steel%20measuring%20tape.jpg',
      icon: '📐',
      specs: [
        'Length: 40cm',
        'Thickness: 1.5mm',
        '0.5mm/m Accurate Vials',
        'Standard Size',
      ],
      price: 'Contact for Price',
    },
    {
      id: 22,
      model: 'HSL08050',
      name: 'Spirit Level 50cm',
      category: 'Spirit Levels',
      image: '/measuring/HSMT0803Steel%20measuring%20tape.jpg',
      icon: '📐',
      specs: [
        'Length: 50cm',
        'Thickness: 1.5mm',
        '0.5mm/m Accurate Vials',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
    {
      id: 23,
      model: 'HSL08060',
      name: 'Spirit Level 60cm',
      category: 'Spirit Levels',
      image: '/measuring/HSMT0803Steel%20measuring%20tape.jpg',
      icon: '📐',
      specs: [
        'Length: 60cm',
        'Thickness: 1.5mm',
        '0.5mm/m Accurate Vials',
        'Heavy Duty',
      ],
      price: 'Contact for Price',
    },
    {
      id: 24,
      model: 'HSL08080',
      name: 'Spirit Level 80cm',
      category: 'Spirit Levels',
      image: '/measuring/HSMT0803Steel%20measuring%20tape.jpg',
      icon: '📐',
      specs: [
        'Length: 80cm',
        'Thickness: 1.5mm',
        '0.5mm/m Accurate Vials',
        'Professional Standard',
      ],
      price: 'Contact for Price',
    },
    {
      id: 25,
      model: 'HSL08100',
      name: 'Spirit Level 100cm',
      category: 'Spirit Levels',
      image: '/measuring/HSMT0803Steel%20measuring%20tape.jpg',
      icon: '📐',
      specs: [
        'Length: 100cm',
        'Thickness: 1.5mm',
        '0.5mm/m Accurate Vials',
        'Long Range',
      ],
      price: 'Contact for Price',
    },
    {
      id: 26,
      model: 'HSL08120',
      name: 'Spirit Level 120cm',
      category: 'Spirit Levels',
      image: '/measuring/HSMT0803Steel%20measuring%20tape.jpg',
      icon: '📐',
      specs: [
        'Length: 120cm',
        'Thickness: 1.5mm',
        '0.5mm/m Accurate Vials',
        'Extra Long',
      ],
      price: 'Contact for Price',
    },
    {
      id: 27,
      model: 'HSL08150',
      name: 'Spirit Level 150cm',
      category: 'Spirit Levels',
      image: '/measuring/HSMT0803Steel%20measuring%20tape.jpg',
      icon: '📐',
      specs: [
        'Length: 150cm',
        'Thickness: 1.5mm',
        '0.5mm/m Accurate Vials',
        'Heavy Duty',
      ],
      price: 'Contact for Price',
    },
    {
      id: 28,
      model: 'HSL08180',
      name: 'Spirit Level 180cm',
      category: 'Spirit Levels',
      image: '/measuring/HSMT0803Steel%20measuring%20tape.jpg',
      icon: '📐',
      specs: [
        'Length: 180cm',
        'Thickness: 1.5mm',
        '0.5mm/m Accurate Vials',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
    {
      id: 29,
      model: 'HSL08200',
      name: 'Spirit Level 200cm',
      category: 'Spirit Levels',
      image: '/measuring/HSMT0803Steel%20measuring%20tape.jpg',
      icon: '📐',
      specs: [
        'Length: 200cm',
        'Thickness: 1.5mm',
        '0.5mm/m Accurate Vials',
        'Extra Long Range',
      ],
      price: 'Contact for Price',
    },

    // Rulers & Scales
    {
      id: 30,
      model: 'HAR01060',
      name: 'Aluminum Ruler 60cm',
      category: 'Rulers & Scales',
      image: '/measuring/HSMT0803Steel%20measuring%20tape.jpg',
      icon: '📏',
      specs: [
        'Length: 60cm',
        'Material: Aluminum',
        'With Spirit Level Function',
        'Lightweight & Durable',
      ],
      price: 'Contact for Price',
    },

    // Electronic Scales
    {
      id: 31,
      model: 'HESA3303',
      name: 'Electronic Scale 30kg',
      category: 'Electronic Scales',
      image: '/measuring/HSMT0803Steel%20measuring%20tape.jpg',
      icon: '⚖️',
      specs: [
        'Charging Voltage: 220-240V 50/60Hz',
        'Max Weight: 30kg',
        'Graduation: 2g',
        'Digital Display',
      ],
      price: 'Contact for Price',
    },
    {
      id: 32,
      model: 'HESA31003',
      name: 'Electronic Scale 100kg',
      category: 'Electronic Scales',
      image: '/measuring/HSMT0803Steel%20measuring%20tape.jpg',
      icon: '⚖️',
      specs: [
        'Charging Voltage: 220-240V 50/60Hz',
        'Max Weight: 100kg',
        'Graduation: 20g',
        'Industrial Grade',
      ],
      price: 'Contact for Price',
    },
    {
      id: 33,
      model: 'HESA33003',
      name: 'Electronic Scale 300kg',
      category: 'Electronic Scales',
      image: '/measuring/HSMT0803Steel%20measuring%20tape.jpg',
      icon: '⚖️',
      specs: [
        'Charging Voltage: 220-240V 50/60Hz',
        'Max Weight: 300kg',
        'Graduation: 50g',
        'Heavy-duty Commercial',
      ],
      price: 'Contact for Price',
    },

    // Test Pencils
    {
      id: 34,
      model: 'HSDT1408',
      name: 'Test Pencil 3x140mm',
      category: 'Test Equipment',
      image: '/measuring/HSMT0803Steel%20measuring%20tape.jpg',
      icon: '✏️',
      specs: [
        'Test Voltage: AC 100-500V',
        'Slotted Size: 3x140mm',
        'Safety Rated',
        'Packed by plastic hanger',
      ],
      price: 'Contact for Price',
    },
    {
      id: 35,
      model: 'HSDT1908',
      name: 'Test Pencil 4x190mm',
      category: 'Test Equipment',
      image: '/measuring/HSMT0803Steel%20measuring%20tape.jpg',
      icon: '✏️',
      specs: [
        'Test Voltage: AC 100-500V',
        'Slotted Size: 4x190mm',
        'Safety Rated',
        'Packed by plastic hanger',
      ],
      price: 'Contact for Price',
    },

    // Voltage Detectors
    {
      id: 36,
      model: 'VD10003',
      name: 'AC Voltage Detector',
      category: 'Test Equipment',
      image: '/measuring/HSMT0803Steel%20measuring%20tape.jpg',
      icon: '⚡',
      specs: [
        'AC Voltage: 12V~1000V (High/Low Sensitivity)',
        'Alarm Mode: Sound & Light',
        'White LED Flashlight',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },

    // Vernier Calipers
    {
      id: 37,
      model: 'HVC01150',
      name: 'Vernier Caliper 150mm',
      category: 'Calipers',
      image: '/measuring/HVC01200Vernier%20caliper.jpeg',
      icon: '📏',
      specs: [
        'Range: 0-150mm',
        'Reading: 0.05mm',
        'Material: Carbon Steel',
        'Accuracy Grade: Professional',
      ],
      price: 'Contact for Price',
    },
    {
      id: 38,
      model: 'HVC01200',
      name: 'Vernier Caliper 200mm',
      category: 'Calipers',
      image: '/measuring/HVC01200Vernier%20caliper.jpeg',
      icon: '📏',
      specs: [
        'Range: 0-200mm',
        'Reading: 0.05mm',
        'Material: Carbon Steel',
        'Precision Instrument',
      ],
      price: 'Contact for Price',
    },

    // Digital Calipers
    {
      id: 39,
      model: 'HDCD01150',
      name: 'Digital Caliper 150mm',
      category: 'Calipers',
      image: '/measuring/HVC01200Vernier%20caliper.jpeg',
      icon: '📏',
      specs: [
        'Range: 0-150mm',
        'Reading: 0.01mm',
        'Metric/Inch Conversion',
        'Digital Display',
      ],
      price: 'Contact for Price',
    },

    // Laser Distance Detectors
    {
      id: 40,
      model: 'HLDD0608',
      name: 'Laser Distance Detector',
      category: 'Laser Detectors',
      image: '/measuring/HLDD0608Laser%20distance%20detector.jpg',
      icon: '🎯',
      specs: [
        'Measuring Range: 0.05-60m',
        'Measuring Accuracy: ±2.0mm',
        'Laser Type: 635nm',
        'Professional Grade',
      ],
      price: 'Contact for Price',
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-amber-900 via-yellow-900 to-amber-800 text-white py-8 sm:py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
              <span className="text-yellow-300">Measuring Tools & Instruments</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-yellow-100 max-w-2xl mx-auto leading-relaxed">
              Professional INGCO Measuring Tools - Precision Instruments for Every Project
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
            <p className="text-xs sm:text-sm text-gray-600">Genuine INGCO measuring instruments with precision and reliability</p>
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
                <div className="bg-linear-to-r from-yellow-50 to-amber-100 p-2.5 sm:p-4 border-b">
                  <div className="font-mono text-xs font-bold text-amber-600 mb-1">
                    Model: {product.model}
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-slate-900 line-clamp-2">
                    {product.name}
                  </h3>
                  <span className="inline-block mt-1.5 sm:mt-2 bg-yellow-100 text-amber-700 px-2 py-1 rounded text-xs font-semibold">
                    {product.category}
                  </span>
                </div>

                {/* Product Specs */}
                <div className="px-2.5 sm:px-4 py-3 sm:py-4 grow">
                  <ul className="space-y-1">
                    {product.specs.map((spec, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-gray-600 flex items-start gap-1.5">
                        <span className="text-amber-500 font-bold shrink-0">•</span>
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
            Why Choose INGCO Measuring Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-linear-to-br from-yellow-50 to-amber-100 p-4 sm:p-6 rounded-lg border border-yellow-200">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">🎯</div>
              <h3 className="font-bold text-sm sm:text-base mb-2 text-slate-900">High Precision</h3>
              <p className="text-xs sm:text-sm text-gray-700">Accurate measurements for professional results</p>
            </div>
            <div className="bg-linear-to-br from-orange-50 to-yellow-100 p-4 sm:p-6 rounded-lg border border-orange-200">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">🔧</div>
              <h3 className="font-bold text-sm sm:text-base mb-2 text-slate-900">Durable Build</h3>
              <p className="text-xs sm:text-sm text-gray-700">Built to withstand tough job site conditions</p>
            </div>
            <div className="bg-linear-to-br from-green-50 to-emerald-100 p-4 sm:p-6 rounded-lg border border-green-200">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">✓</div>
              <h3 className="font-bold text-sm sm:text-base mb-2 text-slate-900">Quality Assured</h3>
              <p className="text-xs sm:text-sm text-gray-700">Full warranty and quality certification</p>
            </div>
            <div className="bg-linear-to-br from-purple-50 to-indigo-100 p-4 sm:p-6 rounded-lg border border-purple-200">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">📦</div>
              <h3 className="font-bold text-sm sm:text-base mb-2 text-slate-900">Quick Delivery</h3>
              <p className="text-xs sm:text-sm text-gray-700">Fast and reliable delivery services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-amber-500 to-yellow-500 text-white py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Need Measuring Tools?
          </h2>
          <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8 text-yellow-100 max-w-2xl mx-auto leading-relaxed">
            Contact us for bulk orders, special requests, and technical support
          </p>
          <a
            href="https://wa.me/254701761622"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
