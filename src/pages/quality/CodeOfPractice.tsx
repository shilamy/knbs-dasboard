import { useState } from "react";
import {
  BookOpen,
  ChevronRight,
  FileText,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { IntroSection } from "./code-of-practice/IntroSection";
import { PillarOneSection } from "./code-of-practice/PillarOneSection";
import { PillarTwoSection } from "./code-of-practice/PillarTwoSection";
import { PillarThreeSection } from "./code-of-practice/PillarThreeSection";
import { ReferencesSection } from "./code-of-practice/ReferencesSection";
import { AnnexSection } from "./code-of-practice/AnnexSection";

export function CodeOfPractice() {
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    { id: "intro", title: "Introduction", icon: FileText },
    { id: "pillar-one", title: "Pillar 1: Quality", icon: ShieldCheck },
    { id: "pillar-two", title: "Pillar 2: Trustworthiness", icon: Users },
    { id: "pillar-three", title: "Pillar 3: Progressiveness", icon: Zap },
    { id: "references", title: "References", icon: BookOpen },
    {
      id: "annex",
      title: "Annex: Indicators/Measures of Success",
      icon: BookOpen,
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "intro":
        return <IntroSection />;
      case "pillar-one":
        return <PillarOneSection />;
      case "pillar-two":
        return <PillarTwoSection />;
      case "pillar-three":
        return <PillarThreeSection />;
      case "references":
        return <ReferencesSection />;
      case "annex":
        return <AnnexSection />;
      default:
        return <IntroSection />;
    }
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Sidebar Navigation */}
      <div className="col-span-3">
        <div className="bg-white rounded-lg shadow-sm border p-4 sticky top-4">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b">
            <BookOpen className="text-knbs-600" size={24} />
            <div>
              <h3 className="font-bold text-knbs-600 text-sm">KeSCoP</h3>
              <p className="text-xs text-gray-600">Code of Practice</p>
            </div>
          </div>

          <nav className="space-y-1">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm ${
                    activeSection === section.id
                      ? "bg-knbs-500 text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <Icon size={16} className="flex-shrink-0" />
                  <span className="flex-1 text-xs leading-tight">
                    {section.title}
                  </span>
                  <ChevronRight size={14} className="flex-shrink-0" />
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content Area */}
      <div className="col-span-9">
        <div className="bg-white rounded-lg shadow-sm border">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
