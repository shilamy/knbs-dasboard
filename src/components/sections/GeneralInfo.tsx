import type { ReactNode } from "react";
import { SubSection } from "./SubSection";
import { TableRow } from "./TableRow";
import { SectionHeader } from "./SectionHeader";
import type { SectionKey } from "../QualityReport";

interface GeneralInfoProps {
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

export function GeneralInfo({ isOpen, onToggle }: GeneralInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden">
      <SectionHeader
        id="general"
        number="A"
        title="General Information"
        isOpen={isOpen}
        onToggle={onToggle}
      />
      {isOpen && (
        <div>
          <SubSection code="A.1" title="Statistical Classification">
            <p className="mb-3">
              Classification based on the Classification of Statistical
              Activities, Version 2.0 (CSA 2.0)
            </p>
            <table className="w-full border border-gray-200 rounded">
              <tbody>
                <TableRow
                  label="Statistical Product"
                  value="Poverty and Inequality Statistics"
                />
                <TableRow
                  label="Subject Area (Subdomain)"
                  value="Living conditions and poverty"
                />
                <TableRow
                  label="Statistical Area (Domain)"
                  value="Income and Consumption Cross-cutting statistics"
                />
              </tbody>
            </table>
          </SubSection>
        </div>
      )}
    </div>
  );
}
