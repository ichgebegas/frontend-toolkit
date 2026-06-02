import { FeatureThreeColumnValues } from "@opensite/ui/blocks/features/feature-three-column-values";

export default function Demo() {
  return (
    <FeatureThreeColumnValues
      label="OUR CORE VALUES"
      title="What Drives Us Forward"
      values={[
        {
          iconName: "lucide/heart",
          title: "Customer First",
          description:
            "Every decision we make starts with understanding our customers' needs and exceeding their expectations.",
        },
        {
          iconName: "lucide/lightbulb",
          title: "Innovation",
          description:
            "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
        },
        {
          iconName: "lucide/target",
          title: "Excellence",
          description:
            "We hold ourselves to the highest standards and never settle for good enough.",
        },
      ]}
      background="gray"
      pattern="gridDotsBasic"
      patternOpacity={1}
    />
  );
}
