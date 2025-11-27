import { useState, useEffect } from "react";
import { Sidebar } from "../../../components/layout/Sidebar";
import { ReportTitleCard } from "./common/ReportTitleCard";
import { GeneralInfo } from "./poverty-inequality/GeneralInfo";
import { Relevance } from "./poverty-inequality/Relevance";
import { MethodologicalSoundness } from "./poverty-inequality/MethodologicalSoundness";
import { Accuracy } from "./poverty-inequality/Accuracy";
import { Timeliness } from "./poverty-inequality/Timeliness";
import { Accessibility } from "./poverty-inequality/Accessibility";
import { Coherence } from "./poverty-inequality/Coherence";
import { References } from "./poverty-inequality/References";
import { CPIContent } from "../../../components/products/CPIContent";

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

interface QualityReportProps {
  initialProductId?: string;
  onProductChange?: (productId: string) => void;
}

export default function QualityReport({
  initialProductId = "poverty-inequality",
  onProductChange,
}: QualityReportProps) {
  const [selectedProduct, setSelectedProduct] = useState(initialProductId);
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

  const handleProductChange = (productId: string) => {
    setSelectedProduct(productId);
    // Notify parent component about the change
    if (onProductChange) {
      onProductChange(productId);
    }
  };

  // Update when initialProductId changes (from navigation)
  useEffect(() => {
    setSelectedProduct(initialProductId);
  }, [initialProductId]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          <Sidebar
            expandedSections={expandedSections}
            onToggle={toggleSection}
          />

          <div className="col-span-9">
            <ReportTitleCard
              onProductChange={handleProductChange}
              selectedProductId={selectedProduct}
            />

            {selectedProduct === "poverty-inequality" ? (
              <>
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
                <Timeliness
                  isOpen={expandedSections.timeliness}
                  onToggle={toggleSection}
                />
                <Accessibility
                  isOpen={expandedSections.accessibility}
                  onToggle={toggleSection}
                />
                <Coherence
                  isOpen={expandedSections.coherence}
                  onToggle={toggleSection}
                />
                <References
                  isOpen={expandedSections.references}
                  onToggle={toggleSection}
                />
              </>
            ) : selectedProduct === "cpi" ? (
              <CPIContent
                expandedSections={expandedSections}
                onToggle={toggleSection}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
