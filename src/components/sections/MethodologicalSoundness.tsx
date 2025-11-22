import type { SectionKey } from "../QualityReport";
import { SectionHeader } from "./SectionHeader";
import { SubSection } from "./SubSection";

interface SectionProps {
  isOpen: boolean;
  onToggle: (id: SectionKey) => void;
}

export function MethodologicalSoundness({ isOpen, onToggle }: SectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border mb-4 overflow-hidden">
      <SectionHeader
        id="methodology"
        number="B.2"
        title="Methodological Soundness"
        isOpen={isOpen}
        onToggle={onToggle}
      />
      {isOpen && (
        <div>
          <SubSection code="B.2.1" title="Concepts and Definitions">
            <p className="mb-4 leading-relaxed">
              <strong>Methodological Soundness</strong> is the extent to which
              the methodology used to compile statistics complies with the
              relevant international standards or guidelines.
            </p>

            <p className="mb-4 leading-relaxed">
              To ensure the statistics produced are methodologically sound, the
              Bureau uses various guidelines produced by the World Bank group:
            </p>

            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li className="leading-relaxed">
                Guidelines for constructing consumption aggregates for welfare
                analysis{" "}
                <span className="text-gray-600"> (Deaton & Zaidi, 2002)</span>
              </li>
              <li className="leading-relaxed">
                "On construction of a consumption aggregate for Inequality and
                Poverty Analysis"{" "}
                <span className="text-gray-600"> (Mancini & Vecchi, 2022)</span>
              </li>
              <li className="leading-relaxed">
                East Africa Community guidelines on poverty statistics
              </li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-4">
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Note:</strong> The EAC guidelines state that
                dissemination of poverty statistics should be done within six
                months after completion of data collection. While the quality
                remains good for most purposes, time-sensitive applications may
                be affected by delays in the decision-making process.
              </p>
            </div>
          </SubSection>
        </div>
      )}
    </div>
  );
}
