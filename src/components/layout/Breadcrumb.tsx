import { Home, ChevronRight } from "lucide-react";

export function Breadcrumb() {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <a href="/" className="flex items-center hover:text-knbs-600">
            <Home size={14} className="text-knbs-500" />
          </a>
          <ChevronRight size={14} />
          <span className="text-gray-500">Quality Reports</span>
        </div>
      </div>
    </div>
  );
}