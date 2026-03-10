'use client';

import Link from 'next/link';
import { Navbar, Footer } from '@/components';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function PayPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const steps = [
    {
      number: 1,
      title: 'Open M-Pesa',
      description: 'Launch the M-Pesa app on your phone',
    },
    {
      number: 2,
      title: 'Select Lipa na M-Pesa',
      description: 'Choose "Lipa na M-Pesa Online" option',
    },
    {
      number: 3,
      title: 'Select Paybill',
      description: 'Choose Paybill as your payment method',
    },
    {
      number: 4,
      title: 'Enter Business Number',
      description: 'Enter Business Number: 522522',
    },
    {
      number: 5,
      title: 'Enter Account Number',
      description: 'Account Number: Your Phone Number',
    },
    {
      number: 6,
      title: 'Enter Amount',
      description: 'Enter the amount you want to pay',
    },
    {
      number: 7,
      title: 'Enter PIN',
      description: 'Enter your M-Pesa PIN and confirm',
    },
    {
      number: 8,
      title: 'Payment Complete',
      description: 'You will receive an SMS confirmation',
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-slate-900 to-slate-800 text-white py-8 sm:py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
            How to Pay via M-Pesa
          </h1>
          <p className="text-base sm:text-xl text-gray-300">
            Simple steps to complete your payment
          </p>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-10 sm:py-16 md:py-24 bg-linear-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-orange-500 text-white font-bold text-base sm:text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Details Card */}
          <div className="mt-10 sm:mt-12 bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 border border-blue-200">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">
              Payment Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-2">
                  Business Number (Paybill)
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900 font-mono">
                  522522
                </p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mb-2">
                  Account Number
                </p>
                <p className="text-base sm:text-lg text-slate-900">Your Phone Number</p>
                <p className="text-xs text-slate-600 mt-1">
                  Example: 254712345678
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-10 sm:mt-16">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  q: 'How long does it take to confirm payment?',
                  a: 'Payments are confirmed instantly. You will receive an SMS notification within seconds.',
                },
                {
                  q: 'What if I enter the wrong amount?',
                  a: 'Contact our support team immediately at +254 712 345 678 and we will assist you.',
                },
                {
                  q: 'Why am I getting an error?',
                  a: 'Ensure you have sufficient M-Pesa balance and that you are using the correct Paybill number.',
                },
                {
                  q: 'Is my payment information secure?',
                  a: 'Yes, all payments are encrypted and processed through Safaricom M-Pesa secure channels.',
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-slate-200 cursor-pointer group"
                >
                  <summary className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-sm sm:text-base text-slate-900 flex items-center justify-between select-none">
                    {faq.q}
                    <span className="transform group-open:rotate-180 transition-transform">
                      ↓
                    </span>
                  </summary>
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-sm sm:text-base text-slate-600 border-t border-slate-100">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Message Banner */}
      {showSuccess && (
        <div className="fixed top-20 left-4 right-4 md:left-auto md:right-4 md:top-20 bg-green-500 text-white rounded-lg shadow-lg p-4 flex items-center gap-3 animate-pulse z-50 text-sm sm:text-base">
          <CheckCircle size={20} className="shrink-0 sm:size-24" />
          <div>
            <p className="font-semibold">Payment Successful!</p>
            <p className="text-xs sm:text-sm">You will receive an SMS confirmation shortly</p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-10 sm:py-16 md:py-24 bg-linear-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Need Help with Your Payment?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Our support team is available to assist you with any payment-related
            queries.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="tel:+254712345678"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-sm sm:text-base"
            >
              Call Support
              <ArrowRight size={18} className="hidden sm:block" />
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-sm sm:text-base"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
