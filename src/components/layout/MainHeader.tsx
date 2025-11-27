import { FileText } from "lucide-react";

export function MainHeader() {
  return (
    <div className="bg-white border-b shadow-sm">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-knbs-500 rounded-lg flex items-center justify-center">
            <FileText className="text-white" size={32} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-knbs-600">
              {" "}
              Statistical Quality & Metadata
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
