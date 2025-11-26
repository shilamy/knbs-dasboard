import { BarChart3, Shield, Users, TrendingUp } from "lucide-react";

export function AnnexSection() {
  const indicators = {
    quality: [
      "Increased scope of data sources and increased response rates",
      "Increased uptake of statistical products e.g., number of data requests, number of downloads, website hits, sale of publications etc",
      "Regular and scheduled statistical audits on quality",
      "Feedback from TWGs",
      "Feedback trends from users on compliments, enquiries and complaints",
      "Feedback from reviewers and peers",
    ],
    trustworthiness: [
      "Feedback from providers and users",
      "The demand for statistical products",
      "Available microdata and the corresponding metadata to users",
      "Increased downloads of statistical products",
      "Increased data requests",
      "Customer satisfaction levels",
      "Use of data in various policy documents, reports, research and media analysis",
      "Increased response rates in various surveys",
      "Feedback from stakeholder engagement",
      "Level of adherence to established guidelines, methods and procedures",
    ],
    progressiveness: [
      "Increased uptake of statistics",
      "The proportion of funds allocated for statistics against the total costed annual plan",
      "The number of new/emerging methodologies in statistics adopted across the NSS",
      "Frameworks for use of alternative data sources used in official statistics",
      "The number of collaborations with partners and stakeholders",
      "Minimized duplications in statistics production",
      "The number of user-focused statistical products",
      "The number of international forums attended by NSS members",
      "Timely release of statistical products arising from emerging needs",
    ],
  };

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-knbs-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
          <BarChart3 size={24} />
        </div>
        <h1 className="text-3xl font-bold text-knbs-600">
          Annex 1: Indicators/Measures of Success
        </h1>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-knbs-50 border-l-4 border-knbs-500 rounded-r-lg p-6 mb-8">
        <p className="text-sm text-gray-700 leading-relaxed">
          The following indicators provide measurable outcomes to assess the
          successful implementation of KeSCoP across the three pillars. These
          metrics enable NSS members to track progress, identify areas for
          improvement, and demonstrate accountability to stakeholders.
        </p>
      </div>

      <div className="space-y-6">
        {/* Quality Pillar */}
        <div className="border-2 border-knbs-300 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-knbs-500 to-knbs-600 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <Shield size={24} />
              <h2 className="text-xl font-bold">Pillar 1: Quality</h2>
            </div>
          </div>
          <div className="bg-white p-6">
            <div className="grid gap-3">
              {indicators.quality.map((indicator, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-knbs-50 border border-knbs-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="bg-knbs-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed flex-1">
                    {indicator}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trustworthiness Pillar */}
        <div className="border-2 border-knbs-400 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-knbs-600 to-knbs-700 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <Users size={24} />
              <h2 className="text-xl font-bold">Pillar 2: Trustworthiness</h2>
            </div>
          </div>
          <div className="bg-white p-6">
            <div className="grid gap-3">
              {indicators.trustworthiness.map((indicator, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-knbs-50 border border-knbs-300 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="bg-knbs-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed flex-1">
                    {indicator}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progressiveness Pillar */}
        <div className="border-2 border-knbs-500 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-knbs-700 to-knbs-800 px-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <TrendingUp size={24} />
              <h2 className="text-xl font-bold">Pillar 3: Progressiveness</h2>
            </div>
          </div>
          <div className="bg-white p-6">
            <div className="grid gap-3">
              {indicators.progressiveness.map((indicator, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-knbs-50 border border-knbs-400 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="bg-knbs-700 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed flex-1">
                    {indicator}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Summary Box */}
      <div className="mt-8 bg-gradient-to-br from-knbs-50 to-white border-2 border-knbs-200 rounded-lg p-6">
        <h3 className="font-bold text-knbs-700 mb-3 flex items-center gap-2">
          <BarChart3 size={20} />
          Using These Indicators
        </h3>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white border border-knbs-200 rounded-lg p-4">
            <p className="font-semibold text-knbs-600 mb-2 text-sm">
              Measurement
            </p>
            <p className="text-xs text-gray-700">
              Regularly collect and analyze data on these indicators to track
              progress
            </p>
          </div>
          <div className="bg-white border border-knbs-200 rounded-lg p-4">
            <p className="font-semibold text-knbs-600 mb-2 text-sm">
              Reporting
            </p>
            <p className="text-xs text-gray-700">
              Include indicator results in annual reports and quality
              assessments
            </p>
          </div>
          <div className="bg-white border border-knbs-200 rounded-lg p-4">
            <p className="font-semibold text-knbs-600 mb-2 text-sm">
              Improvement
            </p>
            <p className="text-xs text-gray-700">
              Use findings to identify gaps and develop targeted improvement
              plans
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">
          These indicators provide a comprehensive framework for evaluating the
          effectiveness of KeSCoP implementation. NSS members should establish
          baseline measurements, set targets, and regularly monitor progress
          against these metrics to ensure continuous improvement in statistical
          quality, trustworthiness, and progressiveness.
        </p>
      </div>
    </div>
  );
}
