'use client';

import Image from 'next/image';
import { Navbar, Footer } from '@/components/index';
import { ShoppingCart, ArrowRight } from 'lucide-react';

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
  const products = [
    {
      id: 1,
      name: 'Pipes',
      description: 'High-quality durable pipes for all plumbing needs',
      image: '/pipe.jpeg',
      price: 'Starting from KES 5,000',
      features: ['Durable', 'Weather-resistant', 'Long-lasting'],
    },
    {
      id: 2,
      name: 'Tanks',
      description: 'Premium water storage tanks for residential and commercial use',
      image: '/tank.jpeg',
      price: 'Starting from KES 15,000',
      features: ['Large capacity', 'Leak-proof', 'Easy installation'],
    },
    {
      id: 3,
      name: 'Ceramic Fixtures',
      description: 'Premium ceramic bathroom and kitchen fixtures',
      image: '/cera.jpeg',
      price: 'Starting from KES 3,500',
      features: ['Modern design', 'Easy to clean', 'Durable finish'],
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
              Our <span className="text-orange-500">Products</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Premium quality hardware and plumbing fixtures for professionals and homeowners
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="mt-6 pt-6 border-t space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-slate-900">
                        {product.price}
                      </span>
                    </div>
                    <a
                      href="https://wa.me/254701761622"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <WhatsAppIcon />
                      Order via WhatsApp
                    </a>
                  </div>
                </div>
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
