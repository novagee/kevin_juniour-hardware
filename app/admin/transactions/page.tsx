'use client';

import { Sidebar, TransactionsTable } from '@/components';
import { DUMMY_TRANSACTIONS } from '@/lib/constants';
import { Search, Filter, Download } from 'lucide-react';
import { useState, useMemo } from 'react';
import Link from 'next/link';

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'completed' | 'pending' | 'failed'>('all');
  const [dateFilter, setDateFilter] = useState('');
  const [userName] = useState('John Doe');

  // Filter transactions based on search and filters
  const filteredTransactions = useMemo(() => {
    return DUMMY_TRANSACTIONS.filter((transaction) => {
      const matchesSearch =
        transaction.phone
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        transaction.mpesaCode
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        transaction.amount.toString().includes(searchTerm);

      const matchesStatus =
        filterStatus === 'all' || transaction.status === filterStatus;

      const matchesDate =
        !dateFilter || transaction.date === dateFilter;

      return matchesSearch && matchesStatus && matchesDate;
    });
  }, [searchTerm, filterStatus, dateFilter]);

  const handleExport = () => {
    // Create CSV content
    const headers = ['Date', 'Phone', 'Amount', 'M-Pesa Code', 'Status'];
    const rows = filteredTransactions.map((t) => [
      t.date,
      t.phone,
      t.amount,
      t.mpesaCode,
      t.status,
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.join(',')),
    ].join('\n');

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transactions-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 md:ml-0">
        {/* Top Navbar */}
        <nav className="bg-white shadow-sm sticky top-0 z-40">
          <div className="px-6 py-4 flex items-center justify-between md:ml-64">
            <h1 className="text-2xl font-bold text-slate-900">Transactions</h1>
            <div className="flex items-center gap-4">
              <span className="text-slate-700 font-medium">{userName}</span>
              <Link
                href="/admin/login"
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
              >
                Logout
              </Link>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="p-6 md:ml-64 md:p-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Payment Transactions
            </h2>
            <p className="text-slate-600">
              View and manage all M-Pesa transactions
            </p>
          </div>

          {/* Filters Section */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search
                    size={18}
                    className="absolute left-3 top-3.5 text-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Phone, M-Pesa code, or amount"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Filter by Status */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Status
                </label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as any)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="failed">Failed</option>
                </select>
              </div>

              {/* Filter by Date */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Actions */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  &nbsp;
                </label>
                <button
                  onClick={handleExport}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  <Download size={18} />
                  Export CSV
                </button>
              </div>
            </div>

            {/* Active Filters Display */}
            {(searchTerm || filterStatus !== 'all' || dateFilter) && (
              <div className="mt-4 flex flex-wrap gap-2">
                {searchTerm && (
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    Search: {searchTerm}
                    <button
                      onClick={() => setSearchTerm('')}
                      className="hover:text-blue-900"
                    >
                      ✕
                    </button>
                  </div>
                )}
                {filterStatus !== 'all' && (
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    Status: {filterStatus}
                    <button
                      onClick={() => setFilterStatus('all')}
                      className="hover:text-orange-900"
                    >
                      ✕
                    </button>
                  </div>
                )}
                {dateFilter && (
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    Date: {dateFilter}
                    <button
                      onClick={() => setDateFilter('')}
                      className="hover:text-green-900"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <p className="text-sm text-slate-600 font-medium mb-2">
                Total Transactions
              </p>
              <p className="text-3xl font-bold text-slate-900">
                {filteredTransactions.length}
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <p className="text-sm text-slate-600 font-medium mb-2">
                Total Amount
              </p>
              <p className="text-3xl font-bold text-slate-900">
                KES{' '}
                {new Intl.NumberFormat('en-KE').format(
                  filteredTransactions.reduce((sum, t) => sum + t.amount, 0)
                )}
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <p className="text-sm text-slate-600 font-medium mb-2">
                Success Rate
              </p>
              <p className="text-3xl font-bold text-slate-900">
                {filteredTransactions.length > 0
                  ? Math.round(
                      (filteredTransactions.filter((t) => t.status === 'completed')
                        .length /
                        filteredTransactions.length) *
                        100
                    )
                  : 0}
                %
              </p>
            </div>
          </div>

          {/* Transactions Table */}
          {filteredTransactions.length > 0 ? (
            <TransactionsTable transactions={filteredTransactions} />
          ) : (
            <div className="bg-white rounded-2xl shadow-md p-12 text-center">
              <Filter size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                No transactions found
              </h3>
              <p className="text-slate-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilterStatus('all');
                  setDateFilter('');
                }}
                className="inline-flex items-center gap-2 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
