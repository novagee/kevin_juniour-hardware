import { ReactNode } from 'react';

interface DashboardCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  color?: 'blue' | 'orange' | 'green' | 'purple';
}

export default function DashboardCard({
  title,
  value,
  icon,
  color = 'blue',
}: DashboardCardProps) {
  const colorStyles = {
    blue: 'bg-blue-50 text-blue-600',
    orange: 'bg-orange-50 text-orange-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-slate-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${colorStyles[color]}`}>
          {icon}
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <span className="text-green-600 font-semibold">↑ 12%</span>
        <span>from last month</span>
      </div>
    </div>
  );
}
