export function ReportTitleCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-xs text-gray-500 uppercase">Product</p>
          <p className="text-lg font-semibold text-gray-800">
            Poverty and Inequality Statistics
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase">Status</p>
          <p className="text-lg font-semibold text-knbs-700">Published</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase">Reference Period</p>
          <p className="text-lg font-semibold text-gray-800">2025M2</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase">Last Updated</p>
          <p className="text-lg font-semibold text-gray-800">18/03/2025</p>
        </div>
      </div>
    </div>
  );
}
