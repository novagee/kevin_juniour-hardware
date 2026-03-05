'use client';

import { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Pencil,
  Trash2,
  X,
  Check,
  AlertTriangle,
  Loader2,
  Plus,
} from 'lucide-react';

interface Transaction {
  id: number | string;
  date: string;
  phone: string;
  amount: number;
  mpesaCode: string;
  status: 'completed' | 'pending' | 'failed';
}

interface TransactionsTableProps {
  transactions: Transaction[];
  onUpdate?: (updated: Transaction) => void;
  onDelete?: (id: number | string) => void;
  onCreate?: (created: Transaction) => void;
  showCreateModal?: boolean;
  onCloseCreateModal?: () => void;
}

type ToastType = 'success' | 'error';

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

const STATUS_OPTIONS = ['completed', 'pending', 'failed'] as const;

const statusStyles: Record<string, string> = {
  completed: 'bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300',
  pending: 'bg-amber-100 text-amber-800 ring-1 ring-amber-300',
  failed: 'bg-red-100 text-red-800 ring-1 ring-red-300',
};

const statusDot: Record<string, string> = {
  completed: 'bg-emerald-500',
  pending: 'bg-amber-400',
  failed: 'bg-red-500',
};

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

const formatAmount = (amount: number) =>
  new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 0,
  }).format(amount);

const inputClass =
  'w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-900 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all';

// ─── Toast Component ─────────────────────────────────────
function ToastBanner({ toasts, remove }: { toasts: Toast[]; remove: (id: number) => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`pointer-events-auto flex items-center gap-3 px-5 py-3 rounded-xl shadow-2xl text-white text-sm font-medium transition-all animate-slide-up ${t.type === 'success' ? 'bg-emerald-600' : 'bg-red-600'
            }`}
        >
          {t.type === 'success' ? <Check size={16} className="shrink-0" /> : <AlertTriangle size={16} className="shrink-0" />}
          <span>{t.message}</span>
          <button onClick={() => remove(t.id)} className="ml-auto opacity-70 hover:opacity-100">
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}

// ─── Delete Confirm Modal ─────────────────────────────────
function DeleteModal({
  transaction,
  onConfirm,
  onCancel,
  loading,
}: {
  transaction: Transaction;
  onConfirm: () => void;
  onCancel: () => void;
  loading: boolean;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onCancel} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-scale-in">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-5">
            <Trash2 size={28} className="text-red-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Delete Transaction</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-1">
            Are you sure you want to permanently delete this transaction?
          </p>
          <div className="mt-3 mb-6 bg-slate-50 rounded-xl px-5 py-3 text-sm text-slate-700 w-full text-left space-y-1">
            <div className="flex justify-between">
              <span className="font-medium text-slate-500">M-Pesa Code</span>
              <span className="font-mono font-semibold text-orange-600">{transaction.mpesaCode}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-slate-500">Amount</span>
              <span className="font-semibold">{formatAmount(transaction.amount)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-slate-500">Phone</span>
              <span className="font-mono">{transaction.phone}</span>
            </div>
          </div>
          <div className="flex gap-3 w-full">
            <button onClick={onCancel} disabled={loading} className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors disabled:opacity-50">
              Cancel
            </button>
            <button onClick={onConfirm} disabled={loading} className="flex-1 px-4 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
              {loading ? 'Deleting…' : 'Delete'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Edit Modal ───────────────────────────────────────────
function EditModal({
  transaction,
  onSave,
  onClose,
  loading,
}: {
  transaction: Transaction;
  onSave: (data: Partial<Transaction>) => Promise<void>;
  onClose: () => void;
  loading: boolean;
}) {
  const [form, setForm] = useState({
    date: transaction.date,
    phone: transaction.phone,
    amount: transaction.amount.toString(),
    mpesaCode: transaction.mpesaCode,
    status: transaction.status,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSave({
      date: form.date,
      phone: form.phone,
      amount: parseFloat(form.amount),
      mpesaCode: form.mpesaCode,
      status: form.status as Transaction['status'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg animate-scale-in overflow-hidden">
        <div className="flex items-center justify-between px-7 py-5 border-b border-slate-100 bg-gradient-to-r from-orange-500 to-amber-500">
          <div>
            <h3 className="text-lg font-bold text-white">Edit Transaction</h3>
            <p className="text-orange-100 text-xs mt-0.5">ID #{transaction.id} · {transaction.mpesaCode}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
            <X size={16} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-7 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Date</label>
              <input type="date" value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} className={inputClass} required />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Phone</label>
              <input type="text" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} className={inputClass} placeholder="07XXXXXXXX" required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Amount (KES)</label>
              <input type="number" step="0.01" min="0" value={form.amount} onChange={(e) => setForm((f) => ({ ...f, amount: e.target.value }))} className={inputClass} required />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Status</label>
              <select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as Transaction['status'] }))} className={inputClass}>
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">M-Pesa Code</label>
            <input type="text" value={form.mpesaCode} onChange={(e) => setForm((f) => ({ ...f, mpesaCode: e.target.value }))} className={inputClass} placeholder="e.g. QK12345678" required />
          </div>
          <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3">
            <span className="text-xs text-slate-500 font-medium">Status preview:</span>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold capitalize ${statusStyles[form.status]}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${statusDot[form.status]}`} />
              {form.status}
            </span>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} disabled={loading} className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors disabled:opacity-50">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold transition-all shadow-md shadow-orange-200 disabled:opacity-50 flex items-center justify-center gap-2">
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Check size={16} />}
              {loading ? 'Saving…' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── Create Transaction Modal ─────────────────────────────
function CreateModal({
  onSave,
  onClose,
  loading,
}: {
  onSave: (data: { date: string; phone: string; amount: number; mpesaCode: string; status: string }) => Promise<void>;
  onClose: () => void;
  loading: boolean;
}) {
  const today = new Date().toISOString().split('T')[0];
  const [form, setForm] = useState({
    date: today,
    phone: '',
    amount: '',
    mpesaCode: '',
    status: 'pending' as string,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSave({
      date: form.date,
      phone: form.phone,
      amount: parseFloat(form.amount),
      mpesaCode: form.mpesaCode,
      status: form.status,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg animate-scale-in overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-slate-100 bg-gradient-to-r from-emerald-500 to-teal-500">
          <div>
            <h3 className="text-lg font-bold text-white">Add New Transaction</h3>
            <p className="text-emerald-100 text-xs mt-0.5">Create a new payment record</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
            <X size={16} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-7 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Date</label>
              <input type="date" value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} className={inputClass} required />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Phone</label>
              <input type="text" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} className={inputClass} placeholder="07XXXXXXXX" required />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Amount (KES)</label>
              <input type="number" step="0.01" min="0" value={form.amount} onChange={(e) => setForm((f) => ({ ...f, amount: e.target.value }))} className={inputClass} placeholder="e.g. 5000" required />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Status</label>
              <select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))} className={inputClass}>
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">M-Pesa Code</label>
            <input type="text" value={form.mpesaCode} onChange={(e) => setForm((f) => ({ ...f, mpesaCode: e.target.value.toUpperCase() }))} className={inputClass} placeholder="e.g. QK12345678" required />
          </div>

          {/* Status preview */}
          <div className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3">
            <span className="text-xs text-slate-500 font-medium">Status preview:</span>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold capitalize ${statusStyles[form.status]}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${statusDot[form.status]}`} />
              {form.status}
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} disabled={loading} className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors disabled:opacity-50">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold transition-all shadow-md shadow-emerald-200 disabled:opacity-50 flex items-center justify-center gap-2">
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
              {loading ? 'Creating…' : 'Create Transaction'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── Main Table Component ─────────────────────────────────
export default function TransactionsTable({
  transactions,
  onUpdate,
  onDelete,
  onCreate,
  showCreateModal,
  onCloseCreateModal,
}: TransactionsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [editTarget, setEditTarget] = useState<Transaction | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Transaction | null>(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const nextToastId = useRef(0);

  useEffect(() => {
    setCurrentPage(1);
  }, [transactions.length]);

  const addToast = (message: string, type: ToastType) => {
    const id = nextToastId.current++;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id: number) =>
    setToasts((prev) => prev.filter((t) => t.id !== id));

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedData = transactions.slice(startIdx, endIdx);

  // ── Edit save ──────────────────────────────────────────
  const handleSave = async (data: Partial<Transaction>) => {
    if (!editTarget) return;
    setActionLoading(true);
    try {
      const res = await fetch(`/api/transactions/${editTarget.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: data.date,
          phone: data.phone,
          amount: data.amount,
          mpesaCode: data.mpesaCode,
          status: data.status,
        }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || 'Failed to update');
      }
      const updated: Transaction = await res.json();
      onUpdate?.(updated);
      addToast('Transaction updated successfully', 'success');
      setEditTarget(null);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Update failed';
      addToast(msg, 'error');
    } finally {
      setActionLoading(false);
    }
  };

  // ── Delete confirm ─────────────────────────────────────
  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return;
    setActionLoading(true);
    try {
      const res = await fetch(`/api/transactions/${deleteTarget.id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || 'Failed to delete');
      }
      onDelete?.(deleteTarget.id);
      addToast('Transaction deleted successfully', 'success');
      setDeleteTarget(null);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Delete failed';
      addToast(msg, 'error');
    } finally {
      setActionLoading(false);
    }
  };

  // ── Create save ────────────────────────────────────────
  const handleCreate = async (data: { date: string; phone: string; amount: number; mpesaCode: string; status: string }) => {
    setActionLoading(true);
    try {
      const res = await fetch('/api/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || 'Failed to create transaction');
      }
      const created: Transaction = await res.json();
      onCreate?.(created);
      addToast('Transaction created successfully!', 'success');
      onCloseCreateModal?.();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Create failed';
      addToast(msg, 'error');
    } finally {
      setActionLoading(false);
    }
  };

  // Pagination page numbers (max 7 visible)
  const getPageNumbers = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages: (number | '…')[] = [1];
    if (currentPage > 3) pages.push('…');
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) pages.push(i);
    if (currentPage < totalPages - 2) pages.push('…');
    pages.push(totalPages);
    return pages;
  };

  return (
    <>
      <ToastBanner toasts={toasts} remove={removeToast} />

      {/* Modals */}
      {editTarget && (
        <EditModal transaction={editTarget} onSave={handleSave} onClose={() => !actionLoading && setEditTarget(null)} loading={actionLoading} />
      )}
      {deleteTarget && (
        <DeleteModal transaction={deleteTarget} onConfirm={handleDeleteConfirm} onCancel={() => !actionLoading && setDeleteTarget(null)} loading={actionLoading} />
      )}
      {showCreateModal && (
        <CreateModal onSave={handleCreate} onClose={() => !actionLoading && onCloseCreateModal?.()} loading={actionLoading} />
      )}

      <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">M-Pesa Code</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedData.map((transaction) => (
                <tr key={transaction.id} className="group hover:bg-orange-50/40 transition-colors duration-150">
                  <td className="px-6 py-4 text-sm text-slate-700 whitespace-nowrap">{formatDate(transaction.date)}</td>
                  <td className="px-6 py-4 text-sm font-mono text-slate-800 whitespace-nowrap">{transaction.phone}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">{formatAmount(transaction.amount)}</td>
                  <td className="px-6 py-4 text-sm font-mono text-orange-600 whitespace-nowrap">{transaction.mpesaCode}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold capitalize ${statusStyles[transaction.status]}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${statusDot[transaction.status]}`} />
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                      <button onClick={() => setEditTarget(transaction)} title="Edit transaction" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-600 hover:text-orange-700 text-xs font-semibold transition-colors border border-orange-200">
                        <Pencil size={13} /> Edit
                      </button>
                      <button onClick={() => setDeleteTarget(transaction)} title="Delete transaction" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 text-xs font-semibold transition-colors border border-red-200">
                        <Trash2 size={13} /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/60">
          <p className="text-sm text-slate-500">
            Showing <span className="font-semibold text-slate-800">{startIdx + 1}–{Math.min(endIdx, transactions.length)}</span> of{' '}
            <span className="font-semibold text-slate-800">{transactions.length}</span> transactions
          </p>
          <div className="flex items-center gap-1">
            <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1} className="flex items-center gap-1 px-3 py-2 rounded-lg border border-slate-200 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed text-slate-600 text-sm font-medium transition-all">
              <ChevronLeft size={15} /> Prev
            </button>
            {getPageNumbers().map((page, i) =>
              page === '…' ? (
                <span key={`ellipsis-${i}`} className="w-9 text-center text-slate-400 text-sm">…</span>
              ) : (
                <button key={page} onClick={() => setCurrentPage(page as number)} className={`w-9 h-9 rounded-lg text-sm font-semibold transition-all ${currentPage === page ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-md shadow-orange-200' : 'border border-slate-200 text-slate-600 hover:bg-white hover:border-orange-300'}`}>
                  {page}
                </button>
              )
            )}
            <button onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages || totalPages === 0} className="flex items-center gap-1 px-3 py-2 rounded-lg border border-slate-200 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed text-slate-600 text-sm font-medium transition-all">
              Next <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
        .animate-slide-up  { animation: slide-up  0.25s ease both; }
        .animate-scale-in  { animation: scale-in  0.2s ease both; }
      `}</style>
    </>
  );
}
