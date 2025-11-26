import { PrincipleCard } from "./PrincipleCard";
import { Shield, Info } from "lucide-react";

export function PillarOneSection() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-knbs-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
          <Shield size={24} />
        </div>
        <h1 className="text-3xl font-bold text-knbs-600">
          Pillar One: Quality
        </h1>
      </div>

      {/* Quality Definition */}
      <div className="bg-gradient-to-r from-blue-50 to-knbs-50 border-l-4 border-knbs-500 rounded-r-lg p-6 mb-6">
        <div className="flex items-start gap-3">
          <Info className="text-knbs-600 flex-shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-knbs-700 mb-2">What is Quality?</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Quality is a <strong>multidimensional concept</strong> that
              measures the degree to which a set of inherent characteristics
              fulfils requirements. It encompasses statistical outputs, the
              statistical process and the institutional environment housing the
              process.
            </p>
            <div className="bg-white border border-knbs-200 rounded-lg p-3">
              <p className="text-sm text-gray-700">
                <strong>Quality statistics are:</strong> relevant, timely,
                accurate, comprehensive, based on appropriate data and methods
                and are accessible.
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
          The following values define quality in statistical production, with
          specific commitments that NSS members must uphold.
        </p>
      </div>

      <div className="space-y-6">
        <PrincipleCard
          number={1}
          title="Relevance"
          description="The needs of users are central in the production of statistics. The NSS produces statistical information that meets the current and emerging needs of various users."
          commitments={[
            "Identify users and their needs and consult them about the content of the statistical work programme",
            "Monitor the relevance and value of existing statistics in meeting user needs, consider and anticipate emerging needs and priorities",
            "Establish and maintain stakeholder engagement",
            "Regularly carry out and analyze various feedback mechanisms e.g., user satisfaction survey",
            "Fill existing data gaps as far as possible",
            "Continuously present data in user-friendly and readable formats including the use of infographics, interactive platforms and microdata",
            "Provide easy access to statistical information and data",
            "Continuously improve statistical outputs in terms of frequency, range of products, and level of disaggregation among others",
            "Support the users in the interpretation and use of statistics",
            "Adopt modern technology in the production of statistics",
          ]}
        />

        <PrincipleCard
          number={2}
          title="Timeliness and Punctuality"
          description="Availing statistics on a timely basis for the stated reference period."
          commitments={[
            "Develop, publish and adhere to advance release calendars and service charters in the dissemination of statistical products and provision of services",
            "Adhere to the predetermined timeliness (length of time between the end of a reference period and the dissemination of the statistics) and punctuality in the periodicity (rate of statistics published when announced) as set out in the advance release calendar",
            "Communicate anticipated delays in the release of scheduled products",
          ]}
        />

        <PrincipleCard
          number={3}
          title="Accuracy"
          description="Statistics produced accurately reflect the true value of the phenomena they are intended to measure."
          commitments={[
            "Ensure applicable accuracy checks and controls in the various stages of statistical production",
            "Identify and/or compute and document sampling and non-sampling errors",
            "Carry out data editing, cleaning, validation and consistency checks",
            "Ensure reliability of produced statistics",
          ]}
        />

        <PrincipleCard
          number={4}
          title="Coverage/Comprehensiveness"
          description="Producers of statistics ensure representativeness of the various aspects being measured. These should include target population, distribution of population and geographical coverage."
          commitments={[
            "Maintain up-to-date and complete statistical sampling frames",
            "Monitor statistical production processes through the adoption of the Statistical Business Process Model",
            "Maintain a well-structured and functional coordination mechanism between the data producers and users",
          ]}
        />

        <PrincipleCard
          number={5}
          title="Methodological Soundness"
          description="The producers of statistics use international concepts, classifications and methods in the production of statistics to improve efficiency and enhance the quality and usefulness of official statistics. They are also transparent about the methodology used and explain the reasons for their selection."
          commitments={[
            "Adopt, apply and regularly review methodologies that are consistent with international standards, guidelines and good practices",
            "Continuously identify and provide explanations to users of the relevant limitations arising from the methods and their application, including bias and uncertainty",
            "Sustain research and development on statistical products, services and infrastructure",
          ]}
        />

        <PrincipleCard
          number={6}
          title="Professional Skills and Competencies"
          description="Producers of statistics have the requisite qualifications and relevant training to obtain the skills and competencies required in statistical production."
          commitments={[
            "Recruit and retain skilled staff",
            "Provide staff with resources required to develop their skills, knowledge and competencies",
            "Continuously train staff on statistical production processes",
            "Leverage synergies within the NSS to expand skills and competencies in statistical production",
          ]}
        />

        <PrincipleCard
          number={7}
          title="Data Sources"
          description="Statistical information is based on the most appropriate data sources."
          commitments={[
            "Use appropriate, reliable and cost-effective sources of data that minimize respondents' burden and fatigue",
            "Continuously explore alternative/emerging sources of data",
            "Declare and minimize data limitations by using various data sources",
            "Harmonize data sources and methodologies within the NSS to avoid duplication",
            "Maintain databases that facilitate data linkage within the NSS",
            "Leverage on modern technology to expand the data sources",
          ]}
        />
      </div>

      {/* Summary Box */}
      <div className="mt-8 bg-gradient-to-br from-knbs-50 to-white border-2 border-knbs-200 rounded-lg p-6">
        <h3 className="font-bold text-knbs-700 mb-3 flex items-center gap-2">
          <Shield size={20} />
          Pillar One Summary
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          Quality encompasses <strong>7 key values</strong> that ensure
          statistical outputs are fit for purpose. Each value contains specific
          commitments that guide producers in maintaining high standards
          throughout the statistical production process, from data collection to
          dissemination. By adhering to these commitments, NSS members ensure
          that statistics are relevant, timely, accurate, comprehensive,
          methodologically sound, and produced by competent professionals using
          appropriate data sources.
        </p>
      </div>
    </div>
  );
}
