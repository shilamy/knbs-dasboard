import { useState } from "react";
import {
  BookOpen,
  ChevronRight,
  FileText,
  Settings,
  Building2,
  Repeat,
  BarChart3,
  Rocket,
  Target,
  Menu,
  X,
} from "lucide-react";
import { IntroSection } from "./kesqaf/IntroSection";
import { ContextSection } from "./kesqaf/ContextSection";
import { SystemSection } from "./kesqaf/SystemSection";
import { LevelASection } from "./kesqaf/LevelASection";
import { LevelBSection } from "./kesqaf/LevelBSection";
import { LevelCSection } from "./kesqaf/LevelCSection";
import { LevelDSection } from "./kesqaf/LevelDSection";
import { ImplementationSection } from "./kesqaf/ImplementationSection";

export function Kesqaf() {
  const [activeSection, setActiveSection] = useState("intro");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: "intro", title: "Introduction & Key Terms", icon: FileText },
    { id: "context", title: "1. Quality Context and Concepts", icon: Target },
    { id: "system", title: "2. Statistical System in Kenya", icon: Building2 },
    { id: "level-a", title: "3A. Managing Statistical System", icon: Settings },
    {
      id: "level-b",
      title: "3B. Managing Institutional Environment",
      icon: Building2,
    },
    {
      id: "level-c",
      title: "3C. Managing Statistical Processes",
      icon: Repeat,
    },
    {
      id: "level-d",
      title: "3D. Managing Statistical Outputs",
      icon: BarChart3,
    },
    { id: "implementation", title: "4. Implementation", icon: Rocket },
  ];

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu after selection
  };

  const renderContent = () => {
    switch (activeSection) {
      case "intro":
        return <IntroSection />;
      case "context":
        return <ContextSection />;
      case "system":
        return <SystemSection />;
      case "level-a":
        return <LevelASection />;
      case "level-b":
        return <LevelBSection />;
      case "level-c":
        return <LevelCSection />;
      case "level-d":
        return <LevelDSection />;
      case "implementation":
        return <ImplementationSection />;
      default:
        return <IntroSection />;
    }
  };

  const currentSectionTitle = sections
    .find((s) => s.id === activeSection)
    ?.title.toUpperCase();

  return (
    <div className="relative">
      {/* Mobile Header - Only visible on small screens */}
      <div className="lg:hidden bg-white border-b shadow-sm sticky top-0 z-20">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <BookOpen className="text-knbs-600" size={20} />
            <div>
              <h3 className="font-bold text-knbs-600 text-sm">KeSQAF</h3>
              <p className="text-xs text-gray-600">{currentSectionTitle}</p>
            </div>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="text-gray-700" size={24} />
            ) : (
              <Menu className="text-gray-700" size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar Navigation */}
        <div
          className={`
            lg:col-span-3
            fixed lg:static
            inset-y-0 left-0
            w-72 lg:w-auto
            bg-white
            z-40 lg:z-0
            transform transition-transform duration-300 ease-in-out
            ${
              isMobileMenuOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
            overflow-y-auto
          `}
        >
          <div className="lg:rounded-lg lg:shadow-sm lg:border p-4 lg:sticky lg:top-4 h-full lg:h-auto">
            {/* Desktop Header - Only visible on large screens */}
            <div className="hidden lg:flex items-center gap-2 mb-4 pb-4 border-b">
              <BookOpen className="text-knbs-600" size={24} />
              <div>
                <h3 className="font-bold text-knbs-600 text-sm">KeSQAF</h3>
                <p className="text-xs text-gray-600">Quality Framework</p>
              </div>
            </div>

            {/* Mobile Header inside sidebar */}
            <div className="lg:hidden flex items-center justify-between mb-4 pb-4 border-b">
              <div className="flex items-center gap-2">
                <BookOpen className="text-knbs-600" size={24} />
                <div>
                  <h3 className="font-bold text-knbs-600 text-sm">KeSQAF</h3>
                  <p className="text-xs text-gray-600">Quality Framework</p>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="text-gray-700" size={20} />
              </button>
            </div>

            <nav className="space-y-1">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => handleSectionChange(section.id)}
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
        <div className="lg:col-span-9 px-4 lg:px-0">
          <div className="bg-white rounded-lg shadow-sm border">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
