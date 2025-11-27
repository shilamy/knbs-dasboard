import type { ReactNode } from "react";

interface SubSectionProps {
  code: string;
  title: string;
  children: ReactNode;
}

export function SubSection({ code, title, children }: SubSectionProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <div className="grid grid-cols-12 min-h-12">
        <div className="col-span-3 bg-gray-50 px-4 py-3 border-r border-gray-200">
          <span className="text-xs text-knbs-700 font-medium">{code}</span>
          <p className="text-sm font-medium text-gray-700">{title}</p>
        </div>
        <div className="col-span-9 px-4 py-3 text-sm text-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
}
