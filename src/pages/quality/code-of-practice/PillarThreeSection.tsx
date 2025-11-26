import { PrincipleCard } from "./PrincipleCard";
import { TrendingUp, Info, Shield } from "lucide-react";

export function PillarThreeSection() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-knbs-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
          <TrendingUp size={24} />
        </div>
        <h1 className="text-3xl font-bold text-knbs-600">
          Pillar Three: Progressiveness
        </h1>
      </div>

      {/* Progressiveness Definition */}
      <div className="bg-gradient-to-r from-blue-50 to-knbs-50 border-l-4 border-knbs-500 rounded-r-lg p-6 mb-6">
        <div className="flex items-start gap-3">
          <Info className="text-knbs-600 flex-shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-knbs-700 mb-2">
              What is Progressiveness?
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Producers of official statistics are{" "}
              <strong>innovative and creative</strong> to improve the quality of
              statistics and build resilience to deal with uncertainties. Modern
              practices are used in the production and dissemination of official
              statistics to enable producers of statistics to respond to the
              emerging needs of the users and the changing statistical
              environment.
            </p>
            <div className="bg-white border border-knbs-200 rounded-lg p-3">
              <p className="text-sm text-gray-700">
                Producers of statistics also{" "}
                <strong>embrace technological advances</strong> in the
                statistics value chain.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pillar Description */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r-lg">
        <p className="text-sm text-gray-700 leading-relaxed">
          Modern practices are used in the production and dissemination of
          official statistics to enable producers of statistics to respond to
          the emerging needs of the users and the changing statistical
          environment. Producers of statistics also embrace technological
          advances in the statistics value chain.
        </p>
      </div>

      {/* Values/Principles */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-1 w-12 bg-knbs-500 rounded"></div>
          <h2 className="text-xl font-bold text-gray-900">
            Values and Commitments
          </h2>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          Progressiveness is demonstrated through four interconnected values
          that foster innovation, continuous improvement, user-centricity, and
          sustainable funding for statistical operations.
        </p>
      </div>

      <div className="space-y-6">
        <PrincipleCard
          number={1}
          title="Innovation"
          description="Creativity in the development of new ideas to increase efficiency and optimize the use of resources. This also entails the use of modern technology and approaches in the production and dissemination of statistics."
          commitments={[
            "Adopt modern technology in data capture, processing, and dissemination of statistics",
            "Regularly review and update ICT architecture and hardware infrastructure and identify possibilities for innovation and modernization",
            "Continuously research and implement new and emerging methodologies in statistics",
            "Promote, organize, and support competition on different thematic areas in statistics",
            "Cooperate with the scientific community to improve methods and promote innovation in the development, production and dissemination of statistics",
            "Regularly identify alternative sources of data and validate the data using appropriate quality frameworks developed and/or adopted by KNBS for official reporting",
          ]}
        />

        <div className="border-2 border-knbs-300 rounded-lg overflow-hidden">
          <div className="bg-knbs-100 px-6 py-3 border-b-2 border-knbs-300">
            <div className="flex items-center gap-3">
              <div className="bg-knbs-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Continuous Improvement
              </h3>
            </div>
          </div>
          <div className="bg-white p-6">
            <div className="space-y-3 mb-6">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Develop processes, skills and output that conform to emerging
                  data needs within the statistical environment. Efforts are
                  made to take advantage of opportunities to undertake
                  incremental improvements in services, products, and processes.
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Members continuously identify new areas of collaboration and
                  partnerships both within and outside the NSS to build value in
                  statistics.
                </p>
              </div>
            </div>

            <div className="ml-14">
              <h4 className="text-sm font-semibold text-knbs-600 mb-3">
                We commit to:
              </h4>
              <ul className="space-y-2">
                {[
                  "Collaborate with stakeholders to develop and improve integrated systems of sharing administrative data",
                  "Regularly review alternative sources of data to fill existing data gaps",
                  "Build capacity on new methods of production, dissemination and use of statistics",
                  "Undertake peer reviews and benchmarking on best practices in statistics",
                  "Regularly analyse user feedback to improve on statistical products",
                  "Conduct monitoring and evaluation programs in statistical production",
                  "Promote a culture of continuous improvement",
                  "Adopt and use risk-based statistical planning",
                  "Put in place appropriate business continuity plans to minimize impact of disruptions and keep statistical production processes running smoothly",
                ].map((commitment, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-knbs-500 flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-700">{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <PrincipleCard
          number={3}
          title="User Focus"
          description="Members of the NSS continuously engage users to customize statistical products to meet their needs in the changing data ecosystem."
          commitments={[
            "Continuously review and update platforms for engagement with users",
            "Put in place and regularly update processes to monitor and consult with both new and existing stakeholders on the relevance and practical utility of existing statistics",
            "Put in place procedures to prioritize various user needs in the strategic goals and annual statistical plan",
            "Engage users in the development of statistical tools aligned to their needs",
            "Produce regular user-focused statistical products",
          ]}
        />

        <div className="border-2 border-knbs-300 rounded-lg overflow-hidden">
          <div className="bg-knbs-100 px-6 py-3 border-b-2 border-knbs-300">
            <div className="flex items-center gap-3">
              <div className="bg-knbs-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Adequate Funding
              </h3>
            </div>
          </div>
          <div className="bg-white p-6">
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                The producers of statistics allocate adequate financial
                resources or have mechanisms in place to ensure the statistics
                plans are funded for each implementation period. Mechanisms to
                build resilience in funding for statistics are entrenched in the
                statistics plans to ensure continuity in the face of crisis,
                which may interfere with the production of statistics.
              </p>
            </div>

            <div className="ml-14">
              <h4 className="text-sm font-semibold text-knbs-600 mb-3">
                We commit to:
              </h4>
              <ul className="space-y-2">
                {[
                  "Develop a costed annual statistical plan aligned to the Kenya Strategy for the Development of Statistics (KSDS)",
                  "Develop a resource mobilization strategy that is regularly reviewed and implemented",
                  "Allocate an adequate budget for statistics in each implementation period",
                  "Adopt and use risk-based statistical planning",
                  "Efficiently utilize resources",
                ].map((commitment, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-knbs-500 flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-700">{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Box */}
      <div className="mt-8 bg-gradient-to-br from-knbs-50 to-white border-2 border-knbs-200 rounded-lg p-6">
        <h3 className="font-bold text-knbs-700 mb-3 flex items-center gap-2">
          <Shield size={20} />
          Pillar Three Summary
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          Progressiveness encompasses <strong>4 key values</strong> that ensure
          the NSS remains relevant, efficient, and responsive to evolving needs.
          Through innovation, continuous improvement, user focus, and adequate
          funding, NSS members demonstrate their commitment to modernization and
          excellence.
        </p>
        <div className="grid md:grid-cols-2 gap-3 mt-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-xs font-semibold text-blue-700 mb-1">
              Innovation & Technology
            </p>
            <p className="text-xs text-gray-700">
              Embracing modern technology and creative approaches to enhance
              statistical production
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-xs font-semibold text-green-700 mb-1">
              Continuous Improvement
            </p>
            <p className="text-xs text-gray-700">
              Building partnerships and implementing incremental enhancements to
              services
            </p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
            <p className="text-xs font-semibold text-purple-700 mb-1">
              User-Centricity
            </p>
            <p className="text-xs text-gray-700">
              Engaging stakeholders to customize products that meet evolving
              needs
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
            <p className="text-xs font-semibold text-amber-700 mb-1">
              Sustainable Funding
            </p>
            <p className="text-xs text-gray-700">
              Ensuring adequate resources and resilience in the face of
              uncertainties
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
