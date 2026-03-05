'use client';

import Link from 'next/link';
import { Navbar, Footer } from '@/components/index';
import {
  Zap,
  MessageSquare,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: 'Instant Payment Confirmation',
      description:
        'Get real-time confirmation of M-Pesa transactions directly to your dashboard',
    },
    {
      icon: MessageSquare,
      title: 'Automatic SMS Appreciation',
      description:
        'Customers receive instant SMS appreciation messages after successful payments',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Revenue Dashboard',
      description:
        'Monitor sales and revenue with comprehensive analytics in real-time',
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-slate-900 via-slate-900 to-slate-800 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Smart Payment System for{' '}
                <span className="text-orange-500"> new Junior plumbers and  Hardware</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Fast. Automated. Reliable.
              </p>
              <p className="text-gray-400 text-lg mb-8">
                Accept M-Pesa payments effortlessly with automatic SMS
                notifications and real-time revenue tracking.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/pay"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  How to Pay
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/admin/login"
                  className="inline-flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Admin Login
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            {/* Right - Illustration */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-red-500 rounded-3xl blur-3xl opacity-20"></div>
                <div className="relative bg-linear-to-br from-orange-400 to-red-500 rounded-3xl p-12 w-full max-w-md">
                  <div className="space-y-4">
                    <div className="bg-white/20 rounded-lg p-4 backdrop-blur">
                      <div className="bg-white/30 h-10 rounded w-24 mb-2"></div>
                      <div className="bg-white/30 h-8 rounded w-32"></div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 backdrop-blur">
                      <div className="bg-white/30 h-10 rounded w-28 mb-2"></div>
                      <div className="bg-white/30 h-8 rounded w-36"></div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 backdrop-blur">
                      <div className="bg-white/30 h-10 rounded w-24 mb-2"></div>
                      <div className="bg-white/30 h-8 rounded w-32"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Payment System?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Streamline your payment process with our intelligent, automated
              solution designed for hardware businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-slate-200"
                >
                  <div className="bg-orange-500 text-white p-4 rounded-xl w-fit mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-linear-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Payments?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us today and start accepting M-Pesa payments with automatic
            notifications and real-time insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pay"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+254712345678"
              className="inline-flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Call Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

