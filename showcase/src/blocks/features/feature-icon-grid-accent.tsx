import { DynamicIcon, Pressable } from "@opensite/ui";
import { FeatureIconGridAccent } from "@opensite/ui/blocks/features/feature-icon-grid-accent";

export default function Demo() {
  return (
    <FeatureIconGridAccent
      label="WHAT SETS US APART"
      title="Designed for Modern Teams"
      description="Built with the tools and workflows that matter most to high-performing organizations."
      cardClassName="bg-white shadow-lg rounded-2xl border border-gray-200"
      features={[
        {
          iconName: "lucide/zap",
          title: "Lightning Fast",
          iconClassName:
            "bg-black/80 border-gray border-4 text-white w-16 h-16 rounded-2xl",
          description: (
            <div>
              <div>
                Optimized performance ensures your applications load instantly
                and respond smoothly.
              </div>

              <div className="mt-4">
                <Pressable asButton size="sm">
                  Get Started
                </Pressable>
              </div>
            </div>
          ),
        },
        {
          iconName: "lucide/shield-check",
          title: "Enterprise Security",
          iconClassName:
            "bg-black/80 border-gray border-4 text-white w-16 h-16 rounded-2xl",
          description: (
            <div>
              <div>
                Bank-level encryption and compliance standards protect your data
                at every layer.
              </div>

              <div className="mt-4">
                <Pressable variant="outline" asButton size="sm">
                  Learn More
                </Pressable>
              </div>
            </div>
          ),
        },
        {
          iconName: "lucide/layers",
          title: "Seamless Integration",
          iconClassName:
            "bg-black/80 border-gray border-4 text-white w-16 h-16 rounded-2xl",
          description: (
            <div>
              <div>
                Connect with your existing tools through our comprehensive API
                and plugin ecosystem.
              </div>

              <div className="mt-4">
                <Pressable variant="outline" asButton size="sm">
                  Schedule a Demo
                </Pressable>
              </div>
            </div>
          ),
        },
        {
          iconName: "lucide/bar-chart-3",
          title: "Advanced Analytics",
          iconClassName:
            "bg-black/80 border-gray border-4 text-white w-16 h-16 rounded-2xl",
          description: (
            <div>
              <div>
                Real-time insights and customizable dashboards help you make
                data-driven decisions.
              </div>

              <div className="mt-4">
                <Pressable variant="outline" asButton size="sm">
                  View Reports
                  <DynamicIcon name="lucide/arrow-up-right" />
                </Pressable>
              </div>
            </div>
          ),
        },
      ]}
      spacing="xl"
      pattern="diagonalCrossFadeTop"
      patternOpacity={1}
      background="gray"
    />
  );
}
