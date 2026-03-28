import Link from 'next/link';
import { Navbar } from '@/components';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Hardware Supply',
      description: 'Quality hardware products and materials for all your plumbing needs.',
      icon: '🔧',
      color: 'from-blue-500 to-blue-600',
      details: ['Premium quality', 'Competitive pricing', 'Wide selection'],
    },
    {
      title: 'Expert Consultation',
      description: 'Professional advice and consultation from experienced hardware specialists.',
      icon: '💡',
      color: 'from-yellow-500 to-yellow-600',
      details: ['Expert advice', 'Personalized solutions', 'Technical support'],
    },
    {
      title: 'Quick Delivery',
      description: 'Fast and reliable delivery service to get your supplies on time.',
      icon: '📦',
      color: 'from-green-500 to-green-600',
      details: ['Same-day delivery', 'Nationwide shipping', 'Tracking available'],
    },
    {
      title: 'Bulk Orders',
      description: 'Special pricing and handling for large bulk orders and wholesale customers.',
      icon: '📊',
      color: 'from-purple-500 to-purple-600',
      details: ['Wholesale pricing', 'Flexible terms', 'Dedicated support'],
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist with your inquiries.',
      icon: '📞',
      color: 'from-red-500 to-red-600',
      details: ['Always available', 'Quick response', 'Multiple channels'],
    },
    {
      title: 'Product Warranty',
      description: 'Comprehensive warranty coverage on all our premium hardware products.',
      icon: '✅',
      color: 'from-emerald-500 to-emerald-600',
      details: ['Extended coverage', 'Easy claims', 'Peace of mind'],
    },
    {
      title: 'Plumbing Services',
      description: 'Professional plumbing installation and repair services for residential and commercial properties.',
      icon: '🚿',
      color: 'from-cyan-500 to-cyan-600',
      details: ['Licensed plumbers', 'Emergency service', 'All property types'],
    },
    {
      title: 'Fundi Services',
      description: 'Expert skilled worker services for hardware installation, repairs, and maintenance.',
      icon: '👨‍🔧',
      color: 'from-orange-500 to-orange-600',
      details: ['Certified workers', 'Quality workmanship', 'Timely completion'],
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
    { number: '100%', label: 'Quality Guarantee' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-linear-to-br from-slate-900 via-slate-800 to-orange-600 text-white py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-block mb-6 px-4 py-2 bg-orange-500/20 rounded-full border border-orange-400/30">
              <p className="text-orange-200 text-sm font-semibold">Premium Services</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professional <span className="text-orange-400">Services</span> for Your Hardware Needs
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions designed to provide excellence in every aspect of hardware supply, installation, and support services.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Products
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-slate-50 to-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">{stat.number}</div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section Header */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Complete <span className="text-orange-600">Service Portfolio</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From hardware supply to professional installation and 24/7 support, we offer everything you need for your projects.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
                >
                  {/* Icon Background */}
                  <div className={`bg-linear-to-br ${service.color} p-6 text-center`}>
                    <div className="text-5xl">{service.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-5 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      {service.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-orange-500 shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Why Choose <span className="text-orange-500">New Junior?</span>
                </h2>
                <div className="space-y-4">
                  {[
                    'Over 15 years of industry experience and expertise',
                    'Professionally trained and certified team members',
                    'Commitment to quality and customer satisfaction',
                    'Competitive pricing with transparent billing',
                    'Quick response time and reliable service delivery',
                    'Comprehensive warranties and guarantees',
                  ].map((reason, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-100">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-linear-to-br from-orange-500 to-red-600 rounded-xl p-8 shadow-2xl">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-6">Ready to Experience the Difference?</h3>
                  <p className="mb-8 text-orange-50">
                    Join hundreds of satisfied customers who trust us for their hardware and installation needs.
                  </p>
                  <Link
                    href="https://wa.me/254701761622"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
                  >
                    Contact Us Now
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-orange-50 to-amber-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Get Professional Service Today</h2>
            <p className="text-lg text-gray-700 mb-10">
              Our team is ready to assist you with any hardware needs or service inquiries. Reach out now!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/products"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                Browse All Products
                <ArrowRight size={20} />
              </Link>
              <Link
                href="https://wa.me/254701761622"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                WhatsApp Us
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

