'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Transaction {
  id: string;
  date: string;
  phone: string;
  amount: number;
  mpesaCode: string;
  status: 'completed' | 'pending' | 'failed';
}

interface TransactionsTableProps {
  transactions: Transaction[];
}

export default function TransactionsTable({
  transactions,
}: TransactionsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedData = transactions.slice(startIdx, endIdx);

  const statusStyles = {
    completed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    failed: 'bg-red-100 text-red-800',
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Date
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Phone
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Amount
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                M-Pesa Code
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((transaction, index) => (
              <tr
                key={transaction.id}
                className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                  index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                }`}
              >
                <td className="px-6 py-4 text-sm text-slate-900">
                  {formatDate(transaction.date)}
                </td>
                <td className="px-6 py-4 text-sm text-slate-900 font-mono">
                  {transaction.phone}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                  {formatAmount(transaction.amount)}
                </td>
                <td className="px-6 py-4 text-sm font-mono text-orange-600">
                  {transaction.mpesaCode}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                      statusStyles[transaction.status]
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bg-white px-6 py-4 border-t border-slate-200 flex items-center justify-between">
        <div className="text-sm text-slate-600">
          Showing {startIdx + 1} to {Math.min(endIdx, transactions.length)} of{' '}
          {transactions.length} transactions
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed text-slate-700"
          >
            <ChevronLeft size={18} />
            Previous
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-orange-500 text-white'
                    : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed text-slate-700"
          >
            Next
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
