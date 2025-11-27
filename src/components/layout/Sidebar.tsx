import type { SectionKey } from "../../pages/metadata/quality-reports/QualityReport";

interface SidebarProps {
  expandedSections: Record<SectionKey, boolean>;
  onToggle: (id: SectionKey) => void;
}

const NAV_ITEMS: Array<{ id: SectionKey; label: string }> = [
  { id: "general", label: "A. General Information" },
  { id: "quality", label: "B. Quality Declaration" },
  { id: "relevance", label: "B.1 Relevance" },
  { id: "methodology", label: "B.2 Methodological Soundness" },
  { id: "accuracy", label: "B.3 Accuracy & Reliability" },
  { id: "timeliness", label: "B.4 Timeliness & Punctuality" },
  { id: "accessibility", label: "B.5 Accessibility & Clarity" },
  { id: "coherence", label: "B.6 Coherence & Comparability" },
  { id: "references", label: "References" },
];

export function Sidebar({ expandedSections, onToggle }: SidebarProps) {
  const handleNavClick = (id: SectionKey) => {
    // Toggle the section open
    onToggle(id);

    // Scroll to the section after a brief delay to allow the section to expand
    setTimeout(() => {
      const element = document.getElementById(`section-${id}`);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <div className="col-span-3">
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden sticky top-4">
        <div className="bg-knbs-500 text-white px-4 py-3">
          <h3 className="font-medium text-sm">Contents</h3>
        </div>
        <nav className="p-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2 text-xs rounded hover:bg-knbs-50 transition-colors ${
                expandedSections[item.id]
                  ? "bg-knbs-50 text-knbs-800 font-medium"
                  : "text-gray-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
