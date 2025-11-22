import { useState } from "react";
import {
  ArrowLeft,
  Download,
  Printer,
  Share2,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  Clock,
} from "lucide-react";

type Section =
  | "overview"
  | "relevance"
  | "accuracy"
  | "timeliness"
  | "accessibility"
  | "comparability"
  | "coherence";
type StatusType = "good" | "moderate" | "poor";

export default function UserDashboard() {
  const [expandedSections, setExpandedSections] = useState<
    Record<Section, boolean>
  >({
    overview: true,
    relevance: true,
    accuracy: false,
    timeliness: false,
    accessibility: false,
    comparability: false,
    coherence: false,
  });

  const toggleSection = (section: Section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const reportData = {
    product: "CPI Consumer Price Index",
    referencePeriod: "2025M2",
    version: "1.2",
    status: "Published",
    subjectArea: "Prices",
    publishDate: "15/03/2025",
    lastUpdated: "18/03/2025",
    framework: "KeSQAF",
  };

  const qualityIndicators: Array<{
    name: string;
    score: number;
    status: StatusType;
  }> = [
    { name: "Relevance", score: 95, status: "good" },
    { name: "Accuracy", score: 88, status: "good" },
    { name: "Timeliness", score: 92, status: "good" },
    { name: "Accessibility", score: 78, status: "moderate" },
    { name: "Comparability", score: 85, status: "good" },
    { name: "Coherence", score: 90, status: "good" },
  ];

  const getStatusColor = (status: StatusType) => {
    switch (status) {
      case "good":
        return "text-green-600 bg-green-100";
      case "moderate":
        return "text-yellow-600 bg-yellow-100";
      case "poor":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getScoreBar = (score: number) => {
    let color = "bg-green-500";
    if (score < 70) color = "bg-red-500";
    else if (score < 85) color = "bg-yellow-500";
    return (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${color} h-2 rounded-full`}
          style={{ width: `${score}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold">KNBS Quality Reports</h1>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span>Welcome, User</span>
              <button className="bg-blue-700 px-3 py-1 rounded hover:bg-blue-600">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb & Actions */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
                <ArrowLeft size={16} />
                Back to Reports
              </button>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">{reportData.product}</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-800 font-medium">
                {reportData.referencePeriod}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 px-3 py-1.5 border rounded text-sm hover:bg-gray-50">
                <Download size={14} /> Download PDF
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 border rounded text-sm hover:bg-gray-50">
                <Printer size={14} /> Print
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 border rounded text-sm hover:bg-gray-50">
                <Share2 size={14} /> Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Report Details */}
          <div className="col-span-2 space-y-6">
            {/* Report Header Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {reportData.product}
                  </h2>
                  <p className="text-gray-600">Quality Declaration Report</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium flex items-center gap-1">
                  <CheckCircle size={14} /> {reportData.status}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Reference Period</p>
                  <p className="font-medium">{reportData.referencePeriod}</p>
                </div>
                <div>
                  <p className="text-gray-500">Version</p>
                  <p className="font-medium">{reportData.version}</p>
                </div>
                <div>
                  <p className="text-gray-500">Published</p>
                  <p className="font-medium">{reportData.publishDate}</p>
                </div>
                <div>
                  <p className="text-gray-500">Framework</p>
                  <p className="font-medium">{reportData.framework}</p>
                </div>
              </div>
            </div>

            {/* Quality Sections */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b">
                <h3 className="font-bold text-gray-800">
                  Quality Declaration Details
                </h3>
              </div>

              {/* Overview Section */}
              <div className="border-b">
                <button
                  onClick={() => toggleSection("overview")}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
                >
                  <span className="font-medium">1. Overview</span>
                  {expandedSections.overview ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </button>
                {expandedSections.overview && (
                  <div className="px-4 pb-4 text-sm text-gray-700 space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Description
                      </h4>
                      <p>
                        The Consumer Price Index (CPI) measures the average
                        change over time in the prices paid by urban consumers
                        for a market basket of consumer goods and services. This
                        index is crucial for monitoring inflation and cost of
                        living adjustments.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Statistical Concept
                      </h4>
                      <p>
                        The CPI is calculated using the Laspeyres formula with
                        base period weights derived from the Household Budget
                        Survey.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Data Source
                      </h4>
                      <p>
                        Price data collected from 5,400 retail outlets across 32
                        urban centers in Kenya.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Relevance Section */}
              <div className="border-b">
                <button
                  onClick={() => toggleSection("relevance")}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
                >
                  <span className="font-medium">2. Relevance</span>
                  {expandedSections.relevance ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </button>
                {expandedSections.relevance && (
                  <div className="px-4 pb-4 text-sm text-gray-700 space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        User Needs
                      </h4>
                      <p>
                        Primary users include the Central Bank of Kenya,
                        Ministry of Finance, researchers, and the general public
                        for inflation monitoring and economic planning.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        User Satisfaction
                      </h4>
                      <p>
                        User satisfaction survey conducted annually with 92%
                        satisfaction rate in 2024.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Accuracy Section */}
              <div className="border-b">
                <button
                  onClick={() => toggleSection("accuracy")}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
                >
                  <span className="font-medium">
                    3. Accuracy and Reliability
                  </span>
                  {expandedSections.accuracy ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </button>
                {expandedSections.accuracy && (
                  <div className="px-4 pb-4 text-sm text-gray-700 space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Sampling Error
                      </h4>
                      <p>
                        Standard error of 0.15% at 95% confidence level for
                        national CPI estimates.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Non-sampling Error
                      </h4>
                      <p>
                        Quality control procedures include double data entry
                        verification and automated outlier detection.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Data Revision
                      </h4>
                      <p>
                        Provisional data released within 15 days; final data
                        published within 30 days of reference month.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Timeliness Section */}
              <div className="border-b">
                <button
                  onClick={() => toggleSection("timeliness")}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
                >
                  <span className="font-medium">
                    4. Timeliness and Punctuality
                  </span>
                  {expandedSections.timeliness ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </button>
                {expandedSections.timeliness && (
                  <div className="px-4 pb-4 text-sm text-gray-700 space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Release Calendar
                      </h4>
                      <p>
                        CPI is released on the last working day of each month
                        following the reference month.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Punctuality
                      </h4>
                      <p>
                        100% adherence to release schedule in 2024. No delays
                        recorded.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Accessibility Section */}
              <div className="border-b">
                <button
                  onClick={() => toggleSection("accessibility")}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
                >
                  <span className="font-medium">
                    5. Accessibility and Clarity
                  </span>
                  {expandedSections.accessibility ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </button>
                {expandedSections.accessibility && (
                  <div className="px-4 pb-4 text-sm text-gray-700 space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Dissemination Format
                      </h4>
                      <p>
                        Available in PDF, Excel, and API formats through the
                        KNBS website and data portal.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Documentation
                      </h4>
                      <p>
                        Comprehensive metadata and methodology documents
                        available online.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Comparability Section */}
              <div className="border-b">
                <button
                  onClick={() => toggleSection("comparability")}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
                >
                  <span className="font-medium">6. Comparability</span>
                  {expandedSections.comparability ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </button>
                {expandedSections.comparability && (
                  <div className="px-4 pb-4 text-sm text-gray-700 space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Geographic Comparability
                      </h4>
                      <p>
                        CPI methodology consistent across all 47 counties with
                        urban/rural breakdowns.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Temporal Comparability
                      </h4>
                      <p>
                        Current series comparable from 2019. Historical linking
                        coefficients available for earlier periods.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Coherence Section */}
              <div>
                <button
                  onClick={() => toggleSection("coherence")}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
                >
                  <span className="font-medium">7. Coherence</span>
                  {expandedSections.coherence ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </button>
                {expandedSections.coherence && (
                  <div className="px-4 pb-4 text-sm text-gray-700 space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        Internal Coherence
                      </h4>
                      <p>
                        CPI components (food, housing, transport) are consistent
                        with aggregate index.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        External Coherence
                      </h4>
                      <p>
                        Aligned with IMF SDDS standards and harmonized with EAC
                        regional price indices.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Quality Summary */}
          <div className="space-y-6">
            {/* Quality Score Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-gray-800 mb-4">
                Quality Score Summary
              </h3>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 text-green-700">
                  <span className="text-3xl font-bold">88%</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Overall Quality Score
                </p>
              </div>

              <div className="space-y-4">
                {qualityIndicators.map((indicator) => (
                  <div key={indicator.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{indicator.name}</span>
                      <span
                        className={`px-2 py-0.5 rounded text-xs ${getStatusColor(
                          indicator.status
                        )}`}
                      >
                        {indicator.score}%
                      </span>
                    </div>
                    {getScoreBar(indicator.score)}
                  </div>
                ))}
              </div>
            </div>

            {/* Version History */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-gray-800 mb-4">Version History</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 pb-3 border-b">
                  <Clock size={16} className="text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Version 1.2</p>
                    <p className="text-gray-500">18/03/2025 - Current</p>
                    <p className="text-gray-600 text-xs mt-1">
                      Updated accuracy metrics
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-3 border-b">
                  <Clock size={16} className="text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-600">Version 1.1</p>
                    <p className="text-gray-500">10/03/2025</p>
                    <p className="text-gray-600 text-xs mt-1">
                      Added comparability section
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-600">Version 1.0</p>
                    <p className="text-gray-500">01/03/2025</p>
                    <p className="text-gray-600 text-xs mt-1">
                      Initial publication
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-gray-800 mb-4">
                Contact Information
              </h3>
              <div className="text-sm space-y-2">
                <p>
                  <span className="text-gray-500">Department:</span> Production
                  Statistics
                </p>
                <p>
                  <span className="text-gray-500">Contact:</span>{" "}
                  info@knbs.or.ke
                </p>
                <p>
                  <span className="text-gray-500">Phone:</span> +254 20 317 583
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
