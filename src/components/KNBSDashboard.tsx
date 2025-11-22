import { useState, type JSX } from "react";
import { Eye, Edit, Calendar, ChevronDown, Search, Plus } from "lucide-react";

interface Report {
  id: number;
  product: string;
  status: string;
  subjectArea: string;
  referencePeriod: string;
  version: string;
}

export default function KNBSDashboard(): JSX.Element {
  // Sample data for the table
  const [reports] = useState<Report[]>([
    {
      id: 1,
      product: "CPI Consumer price index",
      status: "Published",
      subjectArea: "Prices",
      referencePeriod: "2025M1",
      version: "1.0",
    },
    {
      id: 2,
      product: "CPI Consumer price index",
      status: "Published",
      subjectArea: "Prices",
      referencePeriod: "2025M2",
      version: "1.2",
    },
    {
      id: 3,
      product: "CPI Consumer price index",
      status: "Published",
      subjectArea: "Prices",
      referencePeriod: "2025M3",
      version: "1.0",
    },
    {
      id: 4,
      product: "CPI Consumer price index",
      status: "Published",
      subjectArea: "Prices",
      referencePeriod: "2025M4",
      version: "1.0",
    },
  ]);

  // State for filters
  const [selectedProduct, setSelectedProduct] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("In progress");
  const [selectedFramework] = useState<string>("KeSQAF");
  const [fromDate, setFromDate] = useState<string>("31/03/2025");
  const [selectedRow, setSelectedRow] = useState<number>(2);

  // Dropdown open states
  const [productOpen, setProductOpen] = useState<boolean>(false);
  const [statusOpen, setStatusOpen] = useState<boolean>(false);

  const products: string[] = [
    "All",
    "CPI (Consumer price index)",
    "LFS (Labour force survey)",
    "HBS (Household budget survey)",
  ];
  const statuses: string[] = [
    "In progress",
    "Under review",
    "Published",
    "Removed",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-gray-500 text-white text-center py-2 mb-0 rounded-t-lg">
        <h1 className="text-lg font-medium">KNBS Qualitydeclaration admin</h1>
      </div>

      {/* Browser-like address bar */}
      <div className="bg-gray-300 px-4 py-2 flex items-center gap-2 border-b border-gray-400">
        <div className="flex gap-1">
          <button className="text-gray-600 hover:text-gray-800">◁</button>
          <button className="text-gray-600 hover:text-gray-800">▷</button>
          <button className="text-gray-600 hover:text-gray-800">✕</button>
          <button className="text-gray-600 hover:text-gray-800">⌂</button>
        </div>
        <div className="flex-1 bg-white px-3 py-1 rounded border border-gray-400">
          <span className="text-gray-600 text-sm">
            https://knbs/qualitydeclarations
          </span>
        </div>
        <button className="bg-white px-3 py-1 rounded-full border border-gray-400">
          <Search size={14} />
        </button>
      </div>

      {/* Main Content */}
      <div className="bg-white p-6 rounded-b-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          KNBS Quality report admin
        </h2>

        <div className="flex gap-6">
          {/* Left Sidebar - Search Filters */}
          <div className="w-64 border border-gray-300 rounded p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-4 border-b pb-2">
              Search
            </h3>

            {/* Product Dropdown */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product
              </label>
              <div className="relative">
                <button
                  onClick={() => setProductOpen(!productOpen)}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-left text-sm bg-white flex justify-between items-center"
                >
                  {selectedProduct}
                  <ChevronDown size={16} />
                </button>
                {productOpen && (
                  <div className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 shadow-lg">
                    {products.map((product) => (
                      <div
                        key={product}
                        className="px-3 py-2 text-sm hover:bg-blue-100 cursor-pointer"
                        onClick={() => {
                          setSelectedProduct(product);
                          setProductOpen(false);
                        }}
                      >
                        {product}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Status Dropdown */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <div className="relative">
                <button
                  onClick={() => setStatusOpen(!statusOpen)}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-left text-sm bg-white flex justify-between items-center"
                >
                  {selectedStatus}
                  <ChevronDown size={16} />
                </button>
                {statusOpen && (
                  <div className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 shadow-lg">
                    {statuses.map((status) => (
                      <div
                        key={status}
                        className="px-3 py-2 text-sm hover:bg-blue-100 cursor-pointer"
                        onClick={() => {
                          setSelectedStatus(status);
                          setStatusOpen(false);
                        }}
                      >
                        {status}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Quality Framework */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-blue-600 mb-1 underline cursor-pointer">
                Qualityframework
              </label>
              <div className="border border-gray-300 rounded px-3 py-2 text-sm bg-gray-50 text-gray-600">
                {selectedFramework}
              </div>
            </div>

            {/* From Date */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                From date
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
                <Calendar
                  size={16}
                  className="absolute right-3 top-2.5 text-gray-500"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50 flex items-center gap-1">
                <Plus size={14} /> Add
              </button>
              <button className="px-4 py-2 bg-gray-800 text-white rounded text-sm hover:bg-gray-700 flex items-center gap-1">
                <Search size={14} /> Search
              </button>
            </div>
          </div>

          {/* Right Side - Data Table */}
          <div className="flex-1">
            <div className="border border-gray-300 rounded overflow-hidden">
              {/* Table Header */}
              <div className="bg-gray-200 grid grid-cols-7 text-sm font-medium text-gray-700">
                <div className="col-span-2 px-4 py-2 border-r border-gray-300">
                  Product
                </div>
                <div className="px-4 py-2 border-r border-gray-300">Status</div>
                <div className="px-4 py-2 border-r border-gray-300">
                  Subject Area
                </div>
                <div className="px-4 py-2 border-r border-gray-300">
                  Reference period
                </div>
                <div className="px-4 py-2 border-r border-gray-300">
                  Version
                </div>
                <div className="px-4 py-2">Actions</div>
              </div>

              {/* Table Body */}
              {reports.map((report, index) => (
                <div
                  key={report.id}
                  className={`grid grid-cols-7 text-sm border-t border-gray-300 cursor-pointer ${
                    selectedRow === report.id
                      ? "bg-blue-200"
                      : index % 2 === 0
                      ? "bg-white"
                      : "bg-gray-50"
                  } hover:bg-blue-100`}
                  onClick={() => setSelectedRow(report.id)}
                >
                  <div className="col-span-2 px-4 py-2 border-r border-gray-200">
                    {report.product}
                  </div>
                  <div className="px-4 py-2 border-r border-gray-200">
                    {report.status}
                  </div>
                  <div className="px-4 py-2 border-r border-gray-200">
                    {report.subjectArea}
                  </div>
                  <div className="px-4 py-2 border-r border-gray-200 text-center">
                    {report.referencePeriod}
                  </div>
                  <div className="px-4 py-2 border-r border-gray-200">
                    {report.version}
                  </div>
                  <div className="px-4 py-2 flex gap-2">
                    <button
                      className="p-1 hover:bg-gray-200 rounded"
                      title="View"
                    >
                      <Eye size={16} className="text-blue-600" />
                    </button>
                    <button
                      className="p-1 hover:bg-gray-200 rounded"
                      title="Edit"
                    >
                      <Edit size={16} className="text-green-600" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Empty rows to match the wireframe */}
              {[...Array(8)].map((_, index) => (
                <div
                  key={`empty-${index}`}
                  className={`grid grid-cols-7 text-sm border-t border-gray-300 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <div className="col-span-2 px-4 py-2 border-r border-gray-200">
                    &nbsp;
                  </div>
                  <div className="px-4 py-2 border-r border-gray-200">
                    &nbsp;
                  </div>
                  <div className="px-4 py-2 border-r border-gray-200">
                    &nbsp;
                  </div>
                  <div className="px-4 py-2 border-r border-gray-200">
                    &nbsp;
                  </div>
                  <div className="px-4 py-2 border-r border-gray-200">
                    &nbsp;
                  </div>
                  <div className="px-4 py-2">&nbsp;</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
