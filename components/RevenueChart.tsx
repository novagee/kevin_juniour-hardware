'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { MONTHLY_REVENUE_DATA } from '@/lib/constants';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function RevenueChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#F97316',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(203, 213, 225, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: '#64748B',
          font: {
            size: 12,
          },
          callback: (value: any) => {
            if (value >= 1000000) return (value / 1000000).toFixed(0) + 'M';
            if (value >= 1000) return (value / 1000).toFixed(0) + 'K';
            return value;
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#64748B',
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 col-span-1 lg:col-span-2">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900">Revenue Trend</h3>
        <p className="text-sm text-slate-500">Monthly revenue for the last 6 months</p>
      </div>
      <div className="h-80">
        <Line data={MONTHLY_REVENUE_DATA} options={options} />
      </div>
    </div>
  );
}
