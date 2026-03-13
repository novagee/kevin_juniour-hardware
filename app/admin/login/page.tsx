'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate login validation
    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        // Save token and info
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('adminName', data.name);
        // Redirect to dashboard
        router.push('/admin/dashboard');
      } else {
        setError(data.detail || 'Invalid email or password');
        setLoading(false);
      }
    } catch (err) {
      setError('Connection error. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto w-full max-w-md mb-6 sm:mb-8">
        <Link href="/" className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-bold text-xl sm:text-2xl">
            JH
          </div>
        </Link>
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-white mb-2">
          Admin Login
        </h2>
        <p className="text-center text-sm sm:text-base text-gray-300">
          Access your dashboard and manage payments
        </p>
      </div>

      {/* Login Card */}
      <div className="mx-auto w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl px-4 sm:px-6 md:px-8 py-6 sm:py-8">
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle size={18} className="text-red-600 shrink-0 mt-0.5 sm:size-20" />
              <div>
                <p className="font-semibold text-red-900 text-sm sm:text-base">Login Failed</p>
                <p className="text-xs sm:text-sm text-red-700">{error}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-slate-900 mb-1.5 sm:mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3 top-3 sm:top-3.5 text-slate-400"
                />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@junior.com"
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-xs sm:text-sm font-semibold text-slate-900 mb-1.5 sm:mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-3 top-3 sm:top-3.5 text-slate-400"
                />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-2.5 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 sm:top-3.5 text-slate-400 hover:text-slate-600"
                  disabled={loading}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between gap-2">
              <label className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                  disabled={loading}
                />
                <span className="hidden sm:inline">Remember me</span>
              </label>
              <a href="#" className="text-xs sm:text-sm text-orange-600 hover:text-orange-700">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:from-slate-800 hover:to-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Logging in...
                </span>
              ) : (
                'Login to Dashboard'
              )}
            </button>

            {/* Divider */}
            <div className="relative my-4 sm:my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300"></div>
              </div>
              <div className="relative flex justify-center text-xs sm:text-sm">
                <span className="px-2 bg-white text-slate-600">
                  or continue with
                </span>
              </div>
            </div>

            {/* Additional Help */}
            <div className="text-center">
              <p className="text-xs sm:text-sm text-slate-600">
                Having trouble logging in?{' '}
                <a href="tel:+254713095009" className="text-orange-600 hover:text-orange-700 font-semibold">
                  Contact Support
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Return to Home */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-white hover:text-orange-400 transition-colors inline-flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {[
          {
            title: 'Real-Time Dashboard',
            description: 'Monitor transactions and revenue in real-time',
          },
          {
            title: 'Secure Access',
            description: 'Bank-level security for your admin account',
          },
          {
            title: 'Detailed Reports',
            description: 'Export and analyze payment data easily',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-white hover:bg-white/20 transition-all"
          >
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
