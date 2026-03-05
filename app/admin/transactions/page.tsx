'use client';

import { Sidebar, TransactionsTable } from '@/components';
import {
  Search,
  Filter,
  Download,
  Loader2,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
  Plus,
} from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Transaction {
  id: number;
  date: string;
  phone: string;
  amount: number;
  mpesaCode: string;
  status: 'completed' | 'pending' | 'failed';
}

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'completed' | 'pending' | 'failed'>('all');
  const [dateFilter, setDateFilter] = useState('');
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const router = useRouter();

  // Auth check
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    const name = localStorage.getItem('adminName');
    if (name) setUserName(name);
  }, [router]);

  const fetchTransactions = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filterStatus !== 'all') params.set('status', filterStatus);
      if (dateFilter) params.set('date', dateFilter);
      if (searchTerm) params.set('search', searchTerm);

      const res = await fetch(`/api/transactions?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setTransactions(data);
      }
    } catch (err) {
      console.error('Failed to fetch transactions:', err);
    } finally {
      setLoading(false);
    }
  }, [filterStatus, dateFilter, searchTerm]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchTransactions();
    }, 300);
    return () => clearTimeout(timeout);
  }, [fetchTransactions]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminName');
  };

  // ── Mutation handlers ─────────────────────────────────
  const handleUpdate = (updated: Transaction) => {
    setTransactions((prev) =>
      prev.map((t) => (t.id === updated.id ? { ...t, ...updated } : t))
    );
  };

  const handleDelete = (id: number | string) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const handleCreate = (created: Transaction) => {
    setTransactions((prev) => [created, ...prev]);
  };

  const handleExport = () => {
    const headers = ['Date', 'Phone', 'Amount', 'M-Pesa Code', 'Status'];
    const rows = transactions.map((t) => [
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

  // ── Derived stats ─────────────────────────────────────
  const completed = transactions.filter((t) => t.status === 'completed');
  const totalAmount = completed.reduce((sum, t) => sum + t.amount, 0);
  const successRate =
    transactions.length > 0
      ? Math.round((completed.length / transactions.length) * 100)
      : 0;
  const pending = transactions.filter((t) => t.status === 'pending').length;

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 md:ml-0">
        {/* Top Navbar */}
        <nav className="bg-white shadow-sm sticky top-0 z-40 border-b border-slate-100">
          <div className="px-6 py-4 flex items-center justify-between md:ml-64">
            <div>
              <h1 className="text-xl font-bold text-slate-900">Transactions</h1>
              <p className="text-xs text-slate-400 mt-0.5">
                {transactions.length} record{transactions.length !== 1 ? 's' : ''} loaded
              </p>
            </div>
            <div className="flex items-center gap-3">
              {/* Add Transaction Button */}
              <button
                onClick={() => setShowCreateModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl text-sm font-semibold shadow-md shadow-emerald-200 transition-all"
              >
                <Plus size={16} />
                Add Transaction
              </button>
              <span className="text-slate-700 font-medium text-sm hidden sm:block">{userName}</span>
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

        <div className="p-6 md:ml-64 md:p-8 space-y-8">

          {/* Page header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-1">
                Payment Transactions
              </h2>
              <p className="text-slate-500 text-sm">
                View, create, edit, and manage all M-Pesa payment records
              </p>
            </div>
            {/* Secondary Add button in content area */}
            <button
              onClick={() => setShowCreateModal(true)}
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl text-sm font-semibold shadow-md shadow-emerald-200 transition-all"
            >
              <Plus size={16} />
              New Transaction
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Total Records</p>
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Filter size={14} className="text-blue-600" />
                </div>
              </div>
              <p className="text-3xl font-extrabold text-slate-900">{transactions.length}</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Completed Revenue</p>
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <TrendingUp size={14} className="text-emerald-600" />
                </div>
              </div>
              <p className="text-2xl font-extrabold text-slate-900">KES {new Intl.NumberFormat('en-KE').format(totalAmount)}</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Success Rate</p>
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <ArrowUpRight size={14} className="text-orange-600" />
                </div>
              </div>
              <p className="text-3xl font-extrabold text-slate-900">{successRate}%</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Pending</p>
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <CheckCircle2 size={14} className="text-amber-600" />
                </div>
              </div>
              <p className="text-3xl font-extrabold text-slate-900">{pending}</p>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">
                <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wide">Search</label>
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-3 text-slate-400" />
                  <input type="text" placeholder="Phone, M-Pesa code, or amount…" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wide">Status</label>
                <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value as typeof filterStatus)} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm transition-all">
                  <option value="all">All Statuses</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                  <option value="failed">Failed</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wide">Date</label>
                <input type="date" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} className="w-full px-4 py-2.5 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wide">&nbsp;</label>
                <button onClick={handleExport} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-sm">
                  <Download size={15} /> Export CSV
                </button>
              </div>
            </div>

            {(searchTerm || filterStatus !== 'all' || dateFilter) && (
              <div className="mt-4 flex flex-wrap gap-2">
                {searchTerm && (
                  <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-xs font-semibold">
                    Search: {searchTerm}
                    <button onClick={() => setSearchTerm('')} className="hover:text-blue-900">✕</button>
                  </span>
                )}
                {filterStatus !== 'all' && (
                  <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                    Status: {filterStatus}
                    <button onClick={() => setFilterStatus('all')} className="hover:text-orange-900">✕</button>
                  </span>
                )}
                {dateFilter && (
                  <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-xs font-semibold">
                    Date: {dateFilter}
                    <button onClick={() => setDateFilter('')} className="hover:text-emerald-900">✕</button>
                  </span>
                )}
                <button onClick={() => { setSearchTerm(''); setFilterStatus('all'); setDateFilter(''); }} className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline underline-offset-2 transition-colors">
                  Clear all
                </button>
              </div>
            )}
          </div>

          {/* Table / Loading / Empty */}
          {loading ? (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-16 flex flex-col items-center justify-center gap-3">
              <Loader2 size={40} className="animate-spin text-orange-500" />
              <p className="text-sm text-slate-500 font-medium">Loading transactions…</p>
            </div>
          ) : transactions.length > 0 ? (
            <TransactionsTable
              transactions={transactions}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              onCreate={handleCreate}
              showCreateModal={showCreateModal}
              onCloseCreateModal={() => setShowCreateModal(false)}
            />
          ) : (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-16 text-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                <Filter size={28} className="text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                No transactions found
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                {searchTerm || filterStatus !== 'all' || dateFilter
                  ? 'Try adjusting your search or filter criteria'
                  : 'Click the button below to add your first transaction'}
              </p>
              <div className="flex items-center justify-center gap-3">
                {(searchTerm || filterStatus !== 'all' || dateFilter) && (
                  <button
                    onClick={() => { setSearchTerm(''); setFilterStatus('all'); setDateFilter(''); }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 border border-slate-200 text-slate-700 rounded-xl font-semibold text-sm hover:bg-slate-50 transition-all"
                  >
                    Clear All Filters
                  </button>
                )}
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl font-semibold text-sm shadow-md shadow-emerald-200 transition-all"
                >
                  <Plus size={16} />
                  Add First Transaction
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
