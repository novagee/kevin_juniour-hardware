export default function LoadingSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 animate-pulse">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
          <div className="h-10 bg-gray-200 rounded w-32"></div>
        </div>
        <div className="h-12 bg-gray-200 rounded-lg w-12"></div>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-4 bg-gray-200 rounded w-16"></div>
        <div className="h-4 bg-gray-200 rounded w-32"></div>
      </div>
    </div>
  );
}
