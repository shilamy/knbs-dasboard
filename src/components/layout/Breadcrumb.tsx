export function Breadcrumb() {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-2 text-sm text-gray-600">
        <a href="#" className="text-teal-700 hover:underline">
          Home
        </a>
        <span className="mx-2">/</span>
        <a href="#" className="text-teal-700 hover:underline">
          Reports
        </a>
        <span className="mx-2">/</span>
        <span>Quality Report</span>
      </div>
    </div>
  );
}
