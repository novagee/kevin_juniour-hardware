// Design System Colors
export const COLORS = {
  primary: '#0F172A', // Deep Blue
  accent: '#F97316', // Orange
  background: '#F8FAFC', // Light gray
  white: '#FFFFFF',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
  },
  success: '#10B981',
  error: '#EF4444',
  warning: '#FBBF24',
};

// Types
export interface Transaction {
  id: string;
  date: string;
  phone: string;
  amount: number;
  mpesaCode: string;
  status: 'completed' | 'pending' | 'failed';
}

// Dummy Data
export const DUMMY_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    date: '2026-02-28',
    phone: '+254701234567',
    amount: 5000,
    mpesaCode: 'MFL2XY9U1',
    status: 'completed',
  },
  {
    id: '2',
    date: '2026-02-28',
    phone: '+254712345678',
    amount: 10000,
    mpesaCode: 'MFL2XY9U2',
    status: 'completed',
  },
  {
    id: '3',
    date: '2026-02-28',
    phone: '+254723456789',
    amount: 7500,
    mpesaCode: 'MFL2XY9U3',
    status: 'pending',
  },
  {
    id: '4',
    date: '2026-02-27',
    phone: '+254734567890',
    amount: 3000,
    mpesaCode: 'MFL2XY9U4',
    status: 'completed',
  },
  {
    id: '5',
    date: '2026-02-27',
    phone: '+254745678901',
    amount: 12000,
    mpesaCode: 'MFL2XY9U5',
    status: 'completed',
  },
  {
    id: '6',
    date: '2026-02-27',
    phone: '+254756789012',
    amount: 8500,
    mpesaCode: 'MFL2XY9U6',
    status: 'completed',
  },
  {
    id: '7',
    date: '2026-02-26',
    phone: '+254767890123',
    amount: 4500,
    mpesaCode: 'MFL2XY9U7',
    status: 'completed',
  },
  {
    id: '8',
    date: '2026-02-26',
    phone: '+254778901234',
    amount: 15000,
    mpesaCode: 'MFL2XY9U8',
    status: 'completed',
  },
];

export const MONTHLY_REVENUE_DATA = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue (KES)',
      data: [580000, 620000, 700000, 760000, 820000, 890000],
      borderColor: '#F97316',
      backgroundColor: 'rgba(249, 115, 22, 0.1)',
      borderWidth: 2,
      tension: 0.4,
      fill: true,
      pointRadius: 5,
      pointBackgroundColor: '#F97316',
      pointBorderColor: '#FFFFFF',
      pointBorderWidth: 2,
    },
  ],
};
