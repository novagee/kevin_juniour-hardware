import { ReactNode } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  icon?: ReactNode;
}

export default function Toast({ message, type, icon }: ToastProps) {
  const typeStyles = {
    success: 'bg-green-50 text-green-800 border border-green-200',
    error: 'bg-red-50 text-red-800 border border-red-200',
    info: 'bg-blue-50 text-blue-800 border border-blue-200',
  };

  return (
    <div
      className={`fixed bottom-4 right-4 px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 ${typeStyles[type]} animate-fade-in z-50`}
    >
      {icon && <span>{icon}</span>}
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
