import type { SectionKey } from "../QualityReport";
import { SectionHeader } from "../common/SectionHeader";
import { SubSection } from "../common/SubSection";

interface CoherenceProps {
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

export function Coherence({ isOpen, onToggle }: CoherenceProps) {
  return (
    <div
      id="section-coherence"
      className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden scroll-mt-6"
    >
      <SectionHeader
        id="coherence"
        number="B.6"
        title="Coherence and Comparability"
        isOpen={isOpen}
        onToggle={onToggle}
      />
      {isOpen && (
        <div>
          <SubSection code="B.6.1" title="Geographic Reporting Levels">
            <div className="space-y-4">
              <p className="leading-relaxed text-gray-700">
                Statistics are usually reported at the following geographic
                levels:
              </p>

              <div className="bg-knbs-50 border border-knbs-200 rounded-lg p-4">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-knbs-500 mt-1">•</span>
                    <span>
                      <strong>National level</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-knbs-500 mt-1">•</span>
                    <span>
                      <strong>Residence:</strong> Rural & Urban
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-knbs-500 mt-1">•</span>
                    <span>
                      <strong>Counties</strong>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4">
                <h5 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <span>⚠️</span> Comparability Note
                </h5>
                <p className="text-sm text-amber-800 leading-relaxed mb-3">
                  In <strong>2015/2016</strong>, reporting was done in{" "}
                  <strong>3 categories</strong> for the residence domain:
                </p>
                <ul className="text-sm text-amber-800 space-y-1 ml-4">
                  <li className="flex items-start gap-2">
                    <span>1.</span>
                    <span>Rural</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>2.</span>
                    <span>Core-urban</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>3.</span>
                    <span>Peri-urban</span>
                  </li>
                </ul>
                <div className="mt-3 pt-3 border-t border-amber-200">
                  <p className="text-sm text-amber-900 leading-relaxed">
                    <strong>Important:</strong> Residence estimate statistics
                    may <strong>not be comparable</strong> with{" "}
                    <strong>2021 reports</strong> which adopted only{" "}
                    <strong>2 categories</strong>: <em>urban</em> and{" "}
                    <em>rural</em>.
                  </p>
                </div>
              </div>
            </div>
          </SubSection>
        </div>
      )}
    </div>
  );
}
