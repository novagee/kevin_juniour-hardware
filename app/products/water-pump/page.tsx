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

export default function WaterPumps() {
  const products = [
    // Gasoline Water Pumps
    {
      id: 1,
      model: 'GWP102',
      name: 'Gasoline Water Pump 25mm',
      category: 'Gasoline Pumps',
      image: '/waterpump/GWP102Gasoline%20water%20pump.jpg',
      icon: '💧',
      specs: [
        'Suction & Discharge Port Diameter: 25mm',
        'Max Flow: 100L/min',
        'Max Head Lift: 16m',
        'Gasoline Powered',
      ],
      price: 'Contact for Price',
    },
    {
      id: 2,
      model: 'GWP202',
      name: 'Gasoline Water Pump 50mm',
      category: 'Gasoline Pumps',
      image: '/waterpump/GWP202Gasoline%20water%20pump.jpg',
      icon: '💧',
      specs: [
        'Suction & Discharge Port Diameter: 50mm',
        'Max Flow: 550L/min',
        'Max Head Lift: 32m',
        'Gasoline Powered',
      ],
      price: 'Contact for Price',
    },
    {
      id: 3,
      model: 'GWP302',
      name: 'Gasoline Water Pump 80mm',
      category: 'Gasoline Pumps',
      image: '/waterpump/GWP102Gasoline%20water%20pump.jpg',
      icon: '💧',
      specs: [
        'Suction & Discharge Port Diameter: 80mm',
        'Max Flow: 1000L/min',
        'Max Head Lift: 32m',
        'Gasoline Powered',
      ],
      price: 'Contact for Price',
    },
    {
      id: 4,
      model: 'GWP402',
      name: 'Gasoline Water Pump 100mm',
      category: 'Gasoline Pumps',
      image: '/waterpump/GWP102Gasoline%20water%20pump.jpg',
      icon: '💧',
      specs: [
        'Suction & Discharge Port Diameter: 100mm',
        'Max Flow: 1500L/min',
        'Max Head Lift: 30m',
        'Gasoline Powered',
      ],
      price: 'Contact for Price',
    },

    // Diesel Water Pumps
    {
      id: 5,
      model: 'GEP201',
      name: 'Diesel Water Pump 50mm',
      category: 'Diesel Pumps',
      image: '/waterpump/GEP201Diesel%20water%20pump.jpg',
      icon: '💧',
      specs: [
        'Suction & Discharge Port Diameter: 50mm',
        'Max Flow: 533L/min',
        'Max Head Lift: 30m',
        'Diesel Powered',
      ],
      price: 'Contact for Price',
    },
    {
      id: 6,
      model: 'GEP301',
      name: 'Diesel Water Pump 80mm',
      category: 'Diesel Pumps',
      image: '/waterpump/GEP301Diesel%20water%20pump.jpg',
      icon: '💧',
      specs: [
        'Suction & Discharge Port Diameter: 80mm',
        'Max Flow: 1000L/min',
        'Max Head Lift: 28m',
        'Diesel Powered',
      ],
      price: 'Contact for Price',
    },
    {
      id: 7,
      model: 'GEP401',
      name: 'Diesel Water Pump 100mm',
      category: 'Diesel Pumps',
      image: '/waterpump/GEP201Diesel%20water%20pump.jpg',
      icon: '💧',
      specs: [
        'Suction & Discharge Port Diameter: 100mm',
        'Max Flow: 1420L/min',
        'Max Head Lift: 25m',
        'Diesel Powered',
      ],
      price: 'Contact for Price',
    },

    // Electric Centrifugal Pumps - VPM Series
    {
      id: 8,
      model: 'VPM37018',
      name: 'Electric Water Pump 0.5HP (30L/min)',
      category: 'Electric Centrifugal',
      image: '/waterpump/VPM37018Water%20pump.jpg',
      icon: '⚡',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 370W (0.5HP)',
        'Max Head: 30m',
        'Max Flow: 30L/min',
      ],
      price: 'Contact for Price',
    },
    {
      id: 9,
      model: 'VPM3708',
      name: 'Electric Water Pump 0.5HP (35L/min)',
      category: 'Electric Centrifugal',
      image: '/waterpump/VPM37018Water%20pump.jpg',
      icon: '⚡',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 370W (0.5HP)',
        'Max Head: 35m',
        'Max Flow: 35L/min',
      ],
      price: 'Contact for Price',
    },
    {
      id: 10,
      model: 'VPM5508',
      name: 'Electric Water Pump 0.75HP',
      category: 'Electric Centrifugal',
      image: '/waterpump/VPM5508Water%20pump.jpeg',
      icon: '⚡',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 550W (0.75HP)',
        'Max Head: 45m',
        'Max Flow: 45L/min',
      ],
      price: 'Contact for Price',
    },
    {
      id: 11,
      model: 'VPM7508',
      name: 'Electric Water Pump 1.0HP',
      category: 'Electric Centrifugal',
      image: '/waterpump/VPM7508Water%20pump.jpeg',
      icon: '⚡',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 750W (1.0HP)',
        'Max Head: 52m',
        'Max Flow: 50L/min',
      ],
      price: 'Contact for Price',
    },

    // Electric Centrifugal Pumps - CPM Series
    {
      id: 12,
      model: 'CPM7508',
      name: 'Electric Water Pump High Flow 1.0HP',
      category: 'Electric Centrifugal',
      image: '/waterpump/CPM7508Water%20pump.jpeg',
      icon: '⚡',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 750W (1.0HP)',
        'Max Head: 30m',
        'Max Flow: 110L/min',
      ],
      price: 'Contact for Price',
    },
    {
      id: 13,
      model: 'CPM15008',
      name: 'Electric Water Pump High Flow 2HP',
      category: 'Electric Centrifugal',
      image: '/waterpump/VPM37018Water%20pump.jpg',
      icon: '⚡',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 1500W (2HP)',
        'Max Head: 45m',
        'Max Flow: 140L/min',
      ],
      price: 'Contact for Price',
    },

    // Automatic Pump Controls
    {
      id: 14,
      model: 'WAPS001',
      name: 'Automatic Pump Control 220-240V',
      category: 'Pump Controls',
      image: '/waterpump/WAPS001Automatic%20pump%20control.jpg',
      icon: '🔌',
      specs: [
        'Rated Voltage: 220-240V',
        'Frequency: 50/60Hz',
        'Starting Pressure: 1.5bar',
        'Max Current: 10A',
      ],
      price: 'Contact for Price',
    },
    {
      id: 15,
      model: 'WAPS002',
      name: 'Automatic Pump Control 220-240V',
      category: 'Pump Controls',
      image: '/waterpump/WAPS002Automatic%20pump%20control.jpeg',
      icon: '🔌',
      specs: [
        'Rated Voltage: 220-240V',
        'Frequency: 50/60Hz',
        'Starting Pressure: 1.5bar',
        'Max Current: 10A',
      ],
      price: 'Contact for Price',
    },

    // Electric Pumps - Clean Water (JP Series)
    {
      id: 16,
      model: 'JP07508',
      name: 'Clean Water Pump 1.0HP',
      category: 'Clean Water Pumps',
      image: '/waterpump/JP07508Water%20pump.jpeg',
      icon: '💧',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 750W (1HP)',
        'Max Head: 51m',
        'Max Flow: 55L/min',
      ],
      price: 'Contact for Price',
    },
    {
      id: 17,
      model: 'JP11008',
      name: 'Clean Water Pump 0.5HP High Head',
      category: 'Clean Water Pumps',
      image: '/waterpump/JP11008Water%20pump.jpeg',
      icon: '💧',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 370W (0.5HP)',
        'Max Head: 60m',
        'Max Flow: 70L/min',
      ],
      price: 'Contact for Price',
    },
    {
      id: 18,
      model: 'JP15008',
      name: 'Clean Water Pump 2.0HP High Head',
      category: 'Clean Water Pumps',
      image: '/waterpump/VPM37018Water%20pump.jpg',
      icon: '💧',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 1500W (2.0HP)',
        'Max Head: 60m',
        'Max Flow: 125L/min',
      ],
      price: 'Contact for Price',
    },

    // Electric Pumps - High Flow Series
    {
      id: 19,
      model: 'MHF15001',
      name: 'High Flow Water Pump 2.0HP',
      category: 'High Flow Pumps',
      image: '/waterpump/MHF15001Water%20pump.jpeg',
      icon: '💧',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 1500W (2.0HP)',
        'Max Head: 18m',
        'Max Flow: 450L/min',
      ],
      price: 'Contact for Price',
    },
    {
      id: 20,
      model: 'JPT07508',
      name: 'Tankless Pump 1.0HP',
      category: 'High Flow Pumps',
      image: '/waterpump/JPT07508Water%20pump.jpeg',
      icon: '💧',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 750W (1.0HP)',
        'Max Head: 45m',
        'Max Flow: 60L/min',
      ],
      price: 'Contact for Price',
    },

    // Submersible Pumps - Clean Water
    {
      id: 21,
      model: 'SPC3708',
      name: 'Submersible Pump 0.5HP',
      category: 'Submersible Pumps',
      image: '/waterpump/SPC7508Submersible%20pump.jpg',
      icon: '🌊',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 370W (0.5HP)',
        'Max Head: 17m',
        'Max Flow: 100L/min',
      ],
      price: 'Contact for Price',
    },
    {
      id: 22,
      model: 'SPC5508',
      name: 'Submersible Pump 0.75HP',
      category: 'Submersible Pumps',
      image: '/waterpump/SPC7508Submersible%20pump.jpg',
      icon: '🌊',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 550W (0.75HP)',
        'Max Head: 25m',
        'Max Flow: 117L/min',
      ],
      price: 'Contact for Price',
    },
    {
      id: 23,
      model: 'SPC7508',
      name: 'Submersible Pump 1.0HP',
      category: 'Submersible Pumps',
      image: '/waterpump/SPC7508Submersible%20pump.jpg',
      icon: '🌊',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 750W (1.0HP)',
        'Max Head: 32m',
        'Max Flow: 120L/min',
      ],
      price: 'Contact for Price',
    },
    {
      id: 24,
      model: 'SPC4001',
      name: 'Submersible Pump 400W',
      category: 'Submersible Pumps',
      image: '/waterpump/SPC7508Submersible%20pump.jpg',
      icon: '🌊',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 400W',
        'Max Head: 8m',
        'Max Flow: 117L/min',
      ],
      price: 'Contact for Price',
    },

    // Sewage Submersible Pumps
    {
      id: 25,
      model: 'SPD7501',
      name: 'Sewage Submersible Pump 1.0HP',
      category: 'Sewage Pumps',
      image: '/waterpump/SPD7501Sewage%20submersible%20pump.jpg',
      icon: '💨',
      specs: [
        'Voltage: 220V-240 ~50Hz',
        'Rated Power: 750W (1.0HP)',
        'Max Head: 8m',
        'Max Flow: 217L/min',
      ],
      price: 'Contact for Price',
    },
    {
      id: 26,
      model: 'SPD10001',
      name: 'Sewage Submersible Pump 1000W',
      category: 'Sewage Pumps',
      image: '/waterpump/SPD10001Sewage%20submersible%20pump.jpg',
      icon: '💨',
      specs: [
        'Voltage: 220V-240 ~50Hz',
        'Rated Power: 1000W',
        'Max Head: 9m',
        'Max Flow: 333L/min',
      ],
      price: 'Contact for Price',
    },
    {
      id: 27,
      model: 'SPDS7508',
      name: 'Sewage Submersible Pump 1.0HP (300L/min)',
      category: 'Sewage Pumps',
      image: '/waterpump/SPD7501Sewage%20submersible%20pump.jpg',
      icon: '💨',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 750W (1.0HP)',
        'Max Head: 13m',
        'Max Flow: 300L/min',
      ],
      price: 'Contact for Price',
    },
    {
      id: 28,
      model: 'SPDS11008',
      name: 'Sewage Submersible Pump 1.5HP',
      category: 'Sewage Pumps',
      image: '/waterpump/SPDS11008Submersible%20pump.jpg',
      icon: '💨',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 1100W (1.5HP)',
        'Max Head: 15m',
        'Max Flow: 366L/min',
      ],
      price: 'Contact for Price',
    },
    {
      id: 29,
      model: 'SPDB15008',
      name: 'Sewage Submersible Pump 2.0HP',
      category: 'Sewage Pumps',
      image: '/waterpump/SPD10001Sewage%20submersible%20pump.jpg',
      icon: '💨',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 1500W (2.0HP)',
        'Max Head: 14.5m',
        'Max Flow: 350L/min',
      ],
      price: 'Contact for Price',
    },
    {
      id: 30,
      model: 'SPDB22008',
      name: 'Sewage Submersible Pump 3.0HP',
      category: 'Sewage Pumps',
      image: '/waterpump/SPD10001Sewage%20submersible%20pump.jpg',
      icon: '💨',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 2200W (3.0HP)',
        'Max Head: 13m',
        'Max Flow: 633L/min',
      ],
      price: 'Contact for Price',
    },

    // Fountain Pump
    {
      id: 31,
      model: 'FPM501',
      name: 'Fountain Pump 50W',
      category: 'Fountain Pumps',
      image: '/waterpump/FPM501Fountain%20pump.jpg',
      icon: '⛲',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 50W',
        'Max Head: 2.5m',
        'Max Flow: 33L/min',
      ],
      price: 'Contact for Price',
    },

    // Deep Well Pumps
    {
      id: 32,
      model: 'DWP3701',
      name: '4" Deep Well Pump 0.5HP',
      category: 'Deep Well Pumps',
      image: '/waterpump/VPM37018Water%20pump.jpg',
      icon: '⛰️',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 370W (0.5HP)',
        'Max Head: 48m',
        'Max Flow: 6.0m³/h',
      ],
      price: 'Contact for Price',
    },
    {
      id: 33,
      model: 'DWP5501',
      name: '4" Deep Well Pump 0.75HP',
      category: 'Deep Well Pumps',
      image: '/waterpump/VPM37018Water%20pump.jpg',
      icon: '⛰️',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 550W (0.75HP)',
        'Max Head: 64m',
        'Max Flow: 6.0m³/h',
      ],
      price: 'Contact for Price',
    },
    {
      id: 34,
      model: 'DWP7501',
      name: '4" Deep Well Pump 1.0HP',
      category: 'Deep Well Pumps',
      image: '/waterpump/VPM37018Water%20pump.jpg',
      icon: '⛰️',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 750W (1.0HP)',
        'Max Head: 80m',
        'Max Flow: 6.0m³/h',
      ],
      price: 'Contact for Price',
    },
    {
      id: 35,
      model: 'DWP11001',
      name: '4" Deep Well Pump 1.5HP',
      category: 'Deep Well Pumps',
      image: '/waterpump/VPM37018Water%20pump.jpg',
      icon: '⛰️',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 1100W (1.5HP)',
        'Max Head: 112m',
        'Max Flow: 6.0m³/h',
      ],
      price: 'Contact for Price',
    },
    {
      id: 36,
      model: 'DWP15001',
      name: '4" Deep Well Pump 2.0HP',
      category: 'Deep Well Pumps',
      image: '/waterpump/VPM37018Water%20pump.jpg',
      icon: '⛰️',
      specs: [
        'Voltage: 220-240V ~50Hz',
        'Rated Power: 1500W (2.0HP)',
        'Max Head: 135m',
        'Max Flow: 6.0m³/h',
      ],
      price: 'Contact for Price',
    },

    // Control Boxes for Deep Well Pumps
    {
      id: 37,
      model: 'DWP3701-SB',
      name: 'Control Box for DWP3701',
      category: 'Pump Accessories',
      image: '/waterpump/DWP3701-SBControl%20box%20for%20deep%20well%20pump.jpg',
      icon: '🔌',
      specs: [
        'Rated Power: 220-240V ~50Hz',
        'Over-current Protection',
        'For DWP3701 Pump',
        'Packed by carton box',
      ],
      price: 'Contact for Price',
    },
    {
      id: 38,
      model: 'DWP5501-SB',
      name: 'Control Box for DWP5501',
      category: 'Pump Accessories',
      image: '/waterpump/DWP3701-SBControl%20box%20for%20deep%20well%20pump.jpg',
      icon: '🔌',
      specs: [
        'Rated Power: 220-240V ~50Hz',
        'Over-current Protection',
        'For DWP5501 Pump',
        'Packed by carton box',
      ],
      price: 'Contact for Price',
    },
    {
      id: 39,
      model: 'DWP7501-SB',
      name: 'Control Box for DWP7501',
      category: 'Pump Accessories',
      image: '/waterpump/DWP3701-SBControl%20box%20for%20deep%20well%20pump.jpg',
      icon: '🔌',
      specs: [
        'Rated Power: 220-240V ~50Hz',
        'Over-current Protection',
        'For DWP7501 Pump',
        'Packed by carton box',
      ],
      price: 'Contact for Price',
    },
    {
      id: 40,
      model: 'DWP11001-SB',
      name: 'Control Box for DWP11001',
      category: 'Pump Accessories',
      image: '/waterpump/DWP3701-SBControl%20box%20for%20deep%20well%20pump.jpg',
      icon: '🔌',
      specs: [
        'Rated Power: 220-240V ~50Hz',
        'Over-current Protection',
        'For DWP11001 Pump',
        'Packed by carton box',
      ],
      price: 'Contact for Price',
    },
    {
      id: 41,
      model: 'DWP15001-SB',
      name: 'Control Box for DWP15001',
      category: 'Pump Accessories',
      image: '/waterpump/DWP3701-SBControl%20box%20for%20deep%20well%20pump.jpg',
      icon: '🔌',
      specs: [
        'Rated Power: 220-240V ~50Hz',
        'Over-current Protection',
        'For DWP15001 Pump',
        'Packed by carton box',
      ],
      price: 'Contact for Price',
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-8 sm:py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
              <span className="text-cyan-300">Water Pumps & Accessories</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Professional INGCO Water Pumps - Gasoline, Diesel, Electric & Submersible Solutions
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
            <p className="text-xs sm:text-sm text-gray-600">Genuine INGCO water pumps with full warranty and technical support</p>
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
                <div className="bg-linear-to-r from-blue-50 to-blue-100 p-2.5 sm:p-4 border-b">
                  <div className="font-mono text-xs font-bold text-blue-600 mb-1">
                    Model: {product.model}
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-slate-900 line-clamp-2">
                    {product.name}
                  </h3>
                  <span className="inline-block mt-1.5 sm:mt-2 bg-cyan-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">
                    {product.category}
                  </span>
                </div>

                {/* Product Specs */}
                <div className="px-2.5 sm:px-4 py-3 sm:py-4 grow">
                  <ul className="space-y-1">
                    {product.specs.map((spec, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-gray-600 flex items-start gap-1.5">
                        <span className="text-blue-500 font-bold shrink-0">•</span>
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
            Why Choose INGCO Water Pumps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-linear-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-lg border border-blue-200">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">💧</div>
              <h3 className="font-bold text-sm sm:text-base mb-2 text-slate-900">High Efficiency</h3>
              <p className="text-xs sm:text-sm text-gray-700">Energy-efficient pumps designed for maximum performance</p>
            </div>
            <div className="bg-linear-to-br from-cyan-50 to-cyan-100 p-4 sm:p-6 rounded-lg border border-cyan-200">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">🔧</div>
              <h3 className="font-bold text-sm sm:text-base mb-2 text-slate-900">Durable Design</h3>
              <p className="text-xs sm:text-sm text-gray-700">Built to last with premium materials and construction</p>
            </div>
            <div className="bg-linear-to-br from-green-50 to-green-100 p-4 sm:p-6 rounded-lg border border-green-200">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">✓</div>
              <h3 className="font-bold text-sm sm:text-base mb-2 text-slate-900">Warranty</h3>
              <p className="text-xs sm:text-sm text-gray-700">Full warranty coverage with technical support</p>
            </div>
            <div className="bg-linear-to-br from-purple-50 to-purple-100 p-4 sm:p-6 rounded-lg border border-purple-200">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">📦</div>
              <h3 className="font-bold text-sm sm:text-base mb-2 text-slate-900">Fast Delivery</h3>
              <p className="text-xs sm:text-sm text-gray-700">Quick and secure delivery across the region</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-blue-600 to-cyan-500 text-white py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Need a Water Pump Solution?
          </h2>
          <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Contact us for bulk orders, technical consultation, and wholesale pricing
          </p>
          <a
            href="https://wa.me/254701761622"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
