import { PrincipleCard } from "./PrincipleCard";
import { Users, Shield, Info } from "lucide-react";

export function PillarTwoSection() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-knbs-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
          <Users size={24} />
        </div>
        <h1 className="text-3xl font-bold text-knbs-600">
          Pillar Two: Trustworthiness
        </h1>
      </div>

      {/* Trustworthiness Definition */}
      <div className="bg-gradient-to-r from-blue-50 to-knbs-50 border-l-4 border-knbs-500 rounded-r-lg p-6 mb-6">
        <div className="flex items-start gap-3">
          <Info className="text-knbs-600 flex-shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-knbs-700 mb-2">
              What is Trustworthiness?
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              This is <strong>trust in the institutions and people</strong> that
              produce statistics. It is demonstrated by the credibility of the
              processes and systems of the institutions that produce statistics.
            </p>
            <div className="bg-white border border-knbs-200 rounded-lg p-3">
              <p className="text-sm text-gray-700">
                The people working for the institutions need to be of{" "}
                <strong>high integrity</strong>, <strong>transparent</strong>{" "}
                and <strong>competent</strong> in the production of statistics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pillar Description */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r-lg">
        <p className="text-sm text-gray-700 leading-relaxed">
          Statistics are produced and disseminated according to guidelines,
          methods and procedures, respecting the scientific and technical
          independence of the statistical process without conflict of interest
          and undue influence.
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
          Trustworthiness is built on four core values that ensure credibility,
          independence, and integrity in the production and dissemination of
          official statistics.
        </p>
      </div>

      <div className="space-y-6">
        <PrincipleCard
          number={1}
          title="Impartiality and Equal Access"
          description="This is the professional independence of producers of official statistics, the scientific competence of their staff and impartiality. Statistics are produced and disseminated according to guidelines, methods and procedures, respecting the scientific and technical independence of the statistical process without conflict of interest and undue influence."
          commitments={[
            "Compile and present statistics objectively and ethically",
            "Ensure that the statistics are without any undue influence or interference",
            "Engage stakeholders in the production and validation of statistical information",
            "Disseminate statistics to all users at the same time using different media and technology to ensure wider coverage",
          ]}
        />

        <PrincipleCard
          number={2}
          title="Confidentiality"
          description="Protection of the statistical information against any unauthorised access and ensuring that it is used for statistical purposes only."
          commitments={[
            "Inform and assure data providers that information provided is secure and will not be disclosed or shared in a manner that will identify them",
            "Inform data providers of the main uses of the information they provide and restrictions to prevent unauthorised access to the information",
            "Ensure people with access to individual or confidential information must sign a declaration stating their commitment to confidentiality and taking note of the penalties for non-compliance as provided in the Statistics Act, 2006",
            "Anonymize and aggregate data to ensure that publication of statistics does not allow the individual identification of data providers",
            "Ensure protection and security of the information through encryption and giving access to only authorised persons",
            "Ensure that information is stored in accordance with the Statistics Act, 2006 and Data Protection Act, 2019",
          ]}
        />

        <div className="border-2 border-knbs-300 rounded-lg overflow-hidden">
          <div className="bg-knbs-100 px-6 py-3 border-b-2 border-knbs-300">
            <div className="flex items-center gap-3">
              <div className="bg-knbs-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Accountability and Transparency
              </h3>
            </div>
          </div>
          <div className="bg-white p-6">
            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700 leading-relaxed">
                  To facilitate a correct interpretation of the data, the
                  statistical units present information according to scientific
                  standards on the sources, methods and procedures of the
                  statistics.
                </p>
              </div>
              <div className="bg-knbs-50 border-l-4 border-knbs-400 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700 leading-relaxed">
                  To provide users access to necessary information and support
                  interpretation, the characteristics and quality of official
                  statistics by describing and making available policies and
                  practices surrounding statistical production and
                  dissemination.
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700 leading-relaxed">
                  To be open about the statistical procedures and processes used
                  in the production of statistics and disseminate statistics
                  that are accurate, clear, accessible, and released in a timely
                  and orderly manner.
                </p>
              </div>
            </div>

            <div className="ml-14">
              <h4 className="text-sm font-semibold text-knbs-600 mb-3">
                We commit to:
              </h4>
              <ul className="space-y-2">
                {[
                  "Document and enable access to methods, processes and procedures used in the production of statistics",
                  "Declare any methodological modifications made to the aspects of statistics that have been produced, before the publication of results",
                  "Allow for peer reviewing of statistical processes and procedures by stakeholders, subject matter specialists and regional and international agencies",
                  "Cite the source of data when disseminating statistics using data collected or originally produced by other institutions",
                  "Metadata and quality reports should be made readily available to users which will enable them to judge the fitness of use of the data",
                  "Provide guidelines and procedures for user access to data and detailed documentation such as metadata, concepts and definitions alongside the data",
                  "Correct and communicate errors discovered in published statistics in a timely manner",
                  "Routinely monitor and revise the statistical processes as required",
                  "Ensure that revisions follow standard, well-established and transparent procedures",
                  "Ensure that revisions are regularly analysed in order to improve source data, statistical processes and outputs",
                  "Present statistics in a clear format, to allow proper interpretation and use",
                  "Clarify statistics in the event of misuse or misinterpretations",
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
          number={4}
          title="Integrity and Credibility"
          description="Adherence to statistical ethics by demonstrating honesty truthfulness and reliability while maintaining a high level of expertise and competency."
          commitments={[
            "Engage competent personnel with the requisite expertise to manage the statistical processes",
            "Collect and manage statistics using recognized best practices and conform to international statistical standards",
            "Inculcate a culture of honesty and truthfulness in all individuals involved in the statistical value chain",
            "Be accountable for statistical products and ensure prudent use of resources",
          ]}
        />
      </div>

      {/* Summary Box */}
      <div className="mt-8 bg-gradient-to-br from-knbs-50 to-white border-2 border-knbs-200 rounded-lg p-6">
        <h3 className="font-bold text-knbs-700 mb-3 flex items-center gap-2">
          <Shield size={20} />
          Pillar Two Summary
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          Trustworthiness encompasses <strong>4 key values</strong> that build
          public confidence in official statistics. Through impartiality,
          confidentiality, transparency, and integrity, NSS members demonstrate
          their commitment to producing credible statistics that are free from
          undue influence. These values ensure that institutions and their
          personnel maintain high standards of professionalism, protect
          sensitive information, operate with transparency, and uphold ethical
          principles throughout the statistical production process.
        </p>
      </div>
    </div>
  );
}
