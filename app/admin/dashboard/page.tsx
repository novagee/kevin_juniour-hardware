'use client';

import { Sidebar, DashboardCard, RevenueChart } from '@/components';
import { DollarSign, TrendingUp, ShoppingCart, Users, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface DashboardStats {
  todayRevenue: number;
  monthlyRevenue: number;
  transactionsToday: number;
  totalCustomers: number;
  avgTransaction: number;
  successRate: number;
  pendingPayments: number;
}

export default function DashboardPage() {
  const [userName, setUserName] = useState('');
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check auth
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    const name = localStorage.getItem('adminName');
    if (name) setUserName(name);

    // Fetch stats
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/transactions/stats');
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (err) {
        console.error('Failed to fetch stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [router]);

  const formatCurrency = (amount: number) => {
    return `KES ${new Intl.NumberFormat('en-KE').format(amount)}`;
  };

  const dashboardMetrics = stats ? [
    {
      title: "Today's Revenue",
      value: formatCurrency(stats.todayRevenue),
      icon: <DollarSign size={24} />,
      color: 'orange' as const,
    },
    {
      title: 'Monthly Revenue',
      value: formatCurrency(stats.monthlyRevenue),
      icon: <TrendingUp size={24} />,
      color: 'green' as const,
    },
    {
      title: 'Transactions Today',
      value: stats.transactionsToday.toString(),
      icon: <ShoppingCart size={24} />,
      color: 'blue' as const,
    },
    {
      title: 'Total Customers',
      value: stats.totalCustomers.toString(),
      icon: <Users size={24} />,
      color: 'purple' as const,
    },
  ] : [];

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminName');
  };

  if (loading || !stats) {
    return (
      <div className="flex min-h-screen bg-slate-50 items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-orange-500" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 md:ml-0">
        {/* Top Navbar */}
        <nav className="bg-white shadow-sm sticky top-0 z-40">
          <div className="px-6 py-4 flex items-center justify-between md:ml-64">
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-slate-700 font-medium">{userName}</span>
              <Link
                href="/admin/login"
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
              >
                Logout
              </Link>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="p-6 md:ml-64 md:p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Welcome back, {userName}!
            </h2>
            <p className="text-slate-600">
              Here's what's happening with your business today.
            </p>
          </div>

          {/* Dashboard Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardMetrics.map((metric, index) => (
              <DashboardCard
                key={index}
                title={metric.title}
                value={metric.value}
                icon={metric.icon}
                color={metric.color}
              />
            ))}
          </div>

          {/* Charts and Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <RevenueChart />

            {/* Stats Card */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-6">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: 'Avg Transaction',
                    value: `KES ${new Intl.NumberFormat('en-KE').format(stats.avgTransaction)}`,
                    color: 'text-green-600',
                  },
                  {
                    label: 'Success Rate',
                    value: `${stats.successRate}%`,
                    color: 'text-green-600',
                  },
                  {
                    label: 'Pending Payments',
                    value: stats.pendingPayments.toString(),
                    color: stats.pendingPayments > 0 ? 'text-yellow-600' : 'text-green-600',
                  },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-600">{stat.label}</p>
                      <p className="text-lg font-bold text-slate-900">
                        {stat.value}
                      </p>
                    </div>
                    <span className={`font-semibold text-sm ${stat.color}`}>
                      Live
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                View All Transactions
              </h3>
              <p className="text-slate-600 mb-6">
                Check detailed payment history and export reports
              </p>
              <Link
                href="/admin/transactions"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Transactions →
              </Link>
            </div>

            <div className="bg-linear-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Download Report
              </h3>
              <p className="text-slate-600 mb-6">
                Export this month's payment data as CSV
              </p>
              <button className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium">
                Export Report →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
