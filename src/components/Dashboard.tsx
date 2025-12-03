import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Breadcrumb } from "./layout/Breadcrumb";
import { TopHeader } from "./layout/TopHeader";
import { MainHeader } from "./layout/MainHeader";
import { MainNavigation } from "./layout/MainNavigation";

import { CodeOfPractice } from "../pages/quality/CodeOfPractice";
import { Kesqaf } from "../pages/quality/Kesqaf";
import { Kspm } from "../pages/quality/Kspm";
import { QualityReports } from "../pages/metadata/QualityReports";
import { ClassificationNational } from "../pages/metadata/ClassificationNational";
import { ClassificationInternational } from "../pages/metadata/ClassificationInternational";
import { Codelists } from "../pages/metadata/Codelists";
import { Dictionary } from "../pages/metadata/Dictionary";
import Footer from "./layout/Footer";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // Shrink navigation for specific pages
  const isCompactView =
    currentPath === "/dashboard/metadata/quality-reports" ||
    currentPath === "/dashboard/metadata/dictionary" ||
    currentPath === "/dashboard/quality/kesqaf";

  return (
    <div className="min-h-screen bg-gray-100">
      <TopHeader />
      <MainHeader />
      <Breadcrumb />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          <div className={isCompactView ? "col-span-2" : "col-span-3"}>
            <MainNavigation
              onNavigate={(path) => navigate(path)}
              currentPath={currentPath.replace("/dashboard", "")}
              isCompact={isCompactView}
            />
          </div>

          <div className={isCompactView ? "col-span-10" : "col-span-9"}>
            <Routes>
              {/* Quality pages */}
              <Route path="quality/code-of-practice" element={<CodeOfPractice />} />
              <Route path="quality/kesqaf" element={<Kesqaf />} />
              <Route path="quality/kspm" element={<Kspm />} />

              {/* Metadata pages */}
              <Route path="metadata/quality-reports" element={<QualityReports />} />
              <Route path="metadata/classification/national" element={<ClassificationNational />} />
              <Route path="metadata/classification/international" element={<ClassificationInternational />} />
              <Route path="metadata/codelists" element={<Codelists />} />
              <Route path="metadata/dictionary" element={<Dictionary />} />

              {/* Default fallback */}
              <Route path="*" element={<QualityReports />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
      
    </div>
  );
}
