import type { ReactNode } from "react";
import { SubSection } from "./SubSection";
import { TableRow } from "./TableRow";
import { SectionHeader } from "./SectionHeader";
import type { SectionKey } from "../QualityReport";

interface RelevanceProps {
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

export function Relevance({ isOpen, onToggle }: RelevanceProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden">
      <SectionHeader
        id="relevance"
        number="B.1"
        title="Relevance"
        isOpen={isOpen}
        onToggle={onToggle}
      />
      {isOpen && (
        <div className="p-4">
          <SubSection code="B.1" title="User Needs">
            {/* Add your relevance content here */}
            <p className="mb-3">Relevance content goes here...</p>
            <table className="w-full border border-gray-200 rounded">
              <tbody>
                <TableRow label="User Category" value="Government agencies" />
                <TableRow label="Frequency of Use" value="Quarterly" />
              </tbody>
            </table>
          </SubSection>
          {/* Add more SubSections as needed */}
        </div>
      )}
    </div>
  );
}
