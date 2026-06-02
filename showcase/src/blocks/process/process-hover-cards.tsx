import { ProcessHoverCards } from "@opensite/ui/blocks/process/process-hover-cards";

export default function Demo() {
  return (
    <ProcessHoverCards
      heading="How We Work"
      description="A streamlined approach to delivering exceptional digital experiences"
      steps={[
        {
          step: "01",
          title: "Ideate & Define",
          description:
            "Transform your vision into a clear project scope with detailed requirements, user personas, and success metrics.",
          image: "https://toastability-production.s3.amazonaws.com/0mh8a1dg7ftcqnyzgv303u501c8y",
        },
        {
          step: "02",
          title: "Design & Prototype",
          description:
            "Create stunning interfaces that balance aesthetics with usability, validated through user testing and stakeholder feedback.",
          image: "https://toastability-production.s3.amazonaws.com/ihhq8unynafk4aikmys3rhbfibaz",
        },
        {
          step: "03",
          title: "Build & Integrate",
          description:
            "Develop robust solutions using cutting-edge technologies, with seamless integration of APIs, databases, and third-party services.",
          image: "https://toastability-production.s3.amazonaws.com/3ghn8dz3g9qtt4pf4nwbriaydvzb",
        },
        {
          step: "04",
          title: "Test & Refine",
          description:
            "Ensure quality through comprehensive testing, performance optimization, and iterative improvements based on real-world usage.",
          image: "https://toastability-production.s3.amazonaws.com/okf6fg4n9yv59up8ivgcdjy3w030",
        },
        {
          step: "05",
          title: "Deploy & Scale",
          description:
            "Launch your product with confidence and scale it efficiently as your user base grows, with ongoing monitoring and support.",
          image: "https://toastability-production.s3.amazonaws.com/hu4gmd93sp95wdyr9qijze0rgim9",
        },
      ]}
      background="secondary"
      pattern="gridFadeTopLeft"
      patternOpacity={0.15}
    />
  );
}
