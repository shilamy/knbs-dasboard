import type { SectionKey } from "../QualityReport";
import { SectionHeader } from "../common/SectionHeader";
import { ExternalLink } from "lucide-react";

interface ReferencesProps {
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

export function References({ isOpen, onToggle }: ReferencesProps) {
  return (
    <div
      id="section-references"
      className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden scroll-mt-6"
    >
      <SectionHeader
        id="references"
        number=""
        title="References"
        isOpen={isOpen}
        onToggle={onToggle}
      />
      {isOpen && (
        <div className="p-6">
          <div className="space-y-4">
            <div className="border-l-4 border-knbs-500 pl-4 py-2">
              <p className="text-sm text-gray-700 leading-relaxed">
                Deaton, A. & Zaidi, S. (2002).{" "}
                <em>
                  Guidelines for Constructing Consumption Aggregates for Welfare
                  Analysis.
                </em>{" "}
                World Bank Publications. Working Paper no. 135.
              </p>
            </div>

            <div className="border-l-4 border-knbs-500 pl-4 py-2">
              <p className="text-sm text-gray-700 leading-relaxed">
                Kenya National Bureau of Statistics. (2022).{" "}
                <em>Kenya Statistical Quality Assurance Framework (KeSQAF).</em>{" "}
                Nairobi: Kenya
              </p>
            </div>

            <div className="border-l-4 border-knbs-500 pl-4 py-2">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                Mancini, G. & Vecchi, G. (2022).{" "}
                <em>
                  On the Construction of a Consumption Aggregate for Inequality
                  and Poverty Analysis.
                </em>{" "}
                Washington, D.C.: World Bank Group.
              </p>
              <a
                href="http://documents.worldbank.org/curated/en/099225003092220001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-knbs-600 hover:text-knbs-700 text-xs flex items-center gap-1 hover:underline"
              >
                <ExternalLink size={12} />
                http://documents.worldbank.org/curated/en/099225003092220001
              </a>
            </div>

            <div className="border-l-4 border-knbs-500 pl-4 py-2">
              <p className="text-sm text-gray-700 leading-relaxed">
                National Council for Law Reporting. (2019).{" "}
                <em>Data Protection Act, 2019.</em> Government Printer: Kenya
              </p>
            </div>

            <div className="border-l-4 border-knbs-500 pl-4 py-2">
              <p className="text-sm text-gray-700 leading-relaxed">
                National Council for Law Reporting. (2006).{" "}
                <em>Statistics Act, CAP 112.</em> Government Printer: Kenya
              </p>
            </div>

            <div className="border-l-4 border-knbs-500 pl-4 py-2">
              <p className="text-sm text-gray-700 leading-relaxed">
                United Nations Statistics Division. (2024).{" "}
                <em>
                  Classification of Statistical Activities (CSA), version 2
                </em>
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">7 | Page</p>
          </div>
        </div>
      )}
    </div>
  );
}
