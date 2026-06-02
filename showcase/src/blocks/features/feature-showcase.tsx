import { optixFlowApiKey } from "@/lib/media";
import { Pressable } from "@opensite/ui";
import { FeatureShowcase } from "@opensite/ui/blocks/features/feature-showcase";
import { Img } from "@page-speed/img";

export default function Demo() {
  return (
    <FeatureShowcase
      items={[
        {
          content: (
            <div className="flex flex-col gap-4 md:gap-8">
              <h3 className="text-3xl font-bold">
                Deploy to the Edge in Seconds
              </h3>
              <p className="text-sm">
                Real-time insights into performance, errors, and user behavior.
                Custom dashboards and alerts help you stay on top of what
                matters most.
              </p>
              <p className="text-lg">
                Push your code and watch it deploy to 200+ edge locations
                worldwide. Automatic builds, tests, and zero-downtime
                deployments make shipping to production effortless.
              </p>
              <div className="flex items-center gap-2">
                <Pressable asButton href="#">
                  Get Started
                </Pressable>
              </div>
            </div>
          ),
          mediaComponent: (
            <Img
              src={
                "https://toastability-production.s3.amazonaws.com/0x7ktdk01jfaoysst0emzvqevu19"
              }
              alt="Edge deployment"
              className="w-full rounded-lg object-cover"
              optixFlowConfig={{ apiKey: optixFlowApiKey as string }}
            />
          ),
        },
        {
          content: (
            <div className="flex flex-col gap-4 md:gap-8">
              <h3 className="mb-4 text-3xl font-bold">
                Built-in Analytics & Monitoring
              </h3>
              <p className="text-lg">
                Real-time insights into performance, errors, and user behavior.
                Custom dashboards and alerts help you stay on top of what
                matters most.
              </p>
            </div>
          ),
          mediaComponent: (
            <Img
              src={
                "https://toastability-production.s3.amazonaws.com/gq3c9qalkiomu0rzdzxymkdaazdu"
              }
              alt="Analytics dashboard"
              className="w-full rounded-lg object-cover"
              optixFlowConfig={{ apiKey: optixFlowApiKey as string }}
            />
          ),
        },
        {
          content: (
            <div className="flex flex-col gap-4 md:gap-8">
              <h3 className="mb-4 text-3xl font-bold">
                Collaborate with Your Team
              </h3>
              <p className="text-lg">
                Preview environments for every pull request, integrated code
                review, and team-wide visibility. Ship faster together.
              </p>
            </div>
          ),
          mediaComponent: (
            <Img
              src={
                "https://toastability-production.s3.amazonaws.com/82ykd8s8boiqaxypkulb0v0s2qiw"
              }
              alt="Team collaboration"
              className="w-full rounded-lg object-cover"
              optixFlowConfig={{ apiKey: optixFlowApiKey as string }}
            />
          ),
        },
      ]}
      background="dark"
      pattern="architect"
      patternOpacity={1}
    />
  );
}
