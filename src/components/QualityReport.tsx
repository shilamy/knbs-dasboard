import { useState } from "react";
import { TopHeader } from "./layout/TopHeader";
import { MainHeader } from "./layout/MainHeader";
import { Breadcrumb } from "./layout/Breadcrumb";
import { Sidebar } from "./layout/Sidebar";
import { Footer } from "./layout/Footer";
import { ReportTitleCard } from "./common/ReportTitleCard";
import { GeneralInfo } from "./sections/GeneralInfo";
import { Relevance } from "./sections/Relevance";
import { MethodologicalSoundness } from "./sections/MethodologicalSoundness";
import { Accuracy } from "./sections/Accuracy";

export type SectionKey =
  | "general"
  | "quality"
  | "relevance"
  | "methodology"
  | "accuracy"
  | "timeliness"
  | "accessibility"
  | "coherence"
  | "references";

export default function KNBSQualityReport() {
  const [expandedSections, setExpandedSections] = useState<
    Record<SectionKey, boolean>
  >({
    general: true,
    quality: true,
    relevance: false,
    methodology: false,
    accuracy: false,
    timeliness: false,
    accessibility: false,
    coherence: false,
    references: false,
  });

  const toggleSection = (id: SectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <TopHeader />
      <MainHeader />
      <Breadcrumb />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          <Sidebar
            expandedSections={expandedSections}
            onToggle={toggleSection}
          />

          <div className="col-span-9">
            <ReportTitleCard />

            <GeneralInfo
              isOpen={expandedSections.general}
              onToggle={toggleSection}
            />
            <Relevance
              isOpen={expandedSections.relevance}
              onToggle={toggleSection}
            />
            <MethodologicalSoundness
              isOpen={expandedSections.methodology}
              onToggle={toggleSection}
            />
            <Accuracy
              isOpen={expandedSections.accuracy}
              onToggle={toggleSection}
            />
            {/* ...other sections... */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
