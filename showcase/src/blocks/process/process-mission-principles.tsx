import { ProcessMissionPrinciples } from "@opensite/ui/blocks/process/process-mission-principles";

export default function Demo() {
  return (
    <ProcessMissionPrinciples
      missionLabel="OUR MISSION"
      missionHeading="Empowering Teams to Build Better Products"
      missionDescription="We believe that exceptional software comes from exceptional teams. Our mission is to provide the tools, insights, and support that enable development teams to create products that users love, while maintaining velocity and quality at scale."
      principlesLabel="OUR GUIDING PRINCIPLES"
      principles={[
        {
          number: "01",
          title: "User-Centric Design",
          description:
            "Every decision starts with the user. We prioritize intuitive interfaces, seamless experiences, and accessibility to ensure products serve their intended audience effectively.",
        },
        {
          number: "02",
          title: "Quality Over Speed",
          description:
            "While we value efficiency, we never compromise on quality. Rigorous testing, code reviews, and attention to detail ensure long-term reliability and maintainability.",
        },
        {
          number: "03",
          title: "Continuous Learning",
          description:
            "Technology evolves rapidly. We foster a culture of continuous learning, experimentation, and adaptation to stay at the forefront of innovation.",
        },
        {
          number: "04",
          title: "Transparent Communication",
          description:
            "Open, honest communication builds trust. We maintain transparency with stakeholders, document decisions clearly, and collaborate effectively across teams.",
        },
        {
          number: "05",
          title: "Data-Driven Decisions",
          description:
            "Intuition matters, but data validates. We measure what matters, analyze results objectively, and let insights guide our strategic choices.",
        },
        {
          number: "06",
          title: "Sustainable Practices",
          description:
            "Build for the long term. We create scalable architectures, write maintainable code, and establish processes that support sustainable growth without burnout.",
        },
      ]}
      pattern="diagonalCrossFadeTop"
      patternOpacity={0.08}
      background="dark"
    />
  );
}
