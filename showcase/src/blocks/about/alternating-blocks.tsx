import { AlternatingBlocks } from "@opensite/ui/blocks/about/alternating-blocks";

export default function Demo() {
  return (
    <AlternatingBlocks
      title="Our Journey"
      subtitle="About Us"
      background="white"
      spacing="xl"
      sections={[
        {
          content: (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">The Beginning</h3>
              <p className="text-muted-foreground">
                Founded in 2015, we started in a small garage with a simple
                mission: make business tools accessible to everyone. What began
                as a weekend project has grown into a platform trusted by
                thousands of companies worldwide.
              </p>
              <p className="text-muted-foreground">
                Our founders, frustrated by the complexity of existing
                solutions, believed there had to be a better way. They spent
                countless nights building the foundation of what would become
                our flagship product.
              </p>
            </div>
          ),
          media: (
            <img
              src="https://toastability-production.s3.amazonaws.com/hotlo54tsvl2k3eht9gg0460l9zw"
              alt="Early team collaboration"
              className="h-full w-full object-cover"
            />
          ),
          mediaLeft: false,
        },
        {
          content: (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">The Growth Years</h3>
              <p className="text-muted-foreground">
                By 2018, we'd reached our first 10,000 users and raised our
                Series A. We expanded the team, opened new offices, and doubled
                down on our commitment to customer success. Each milestone
                taught us valuable lessons about scale, culture, and impact.
              </p>
              <p className="text-muted-foreground">
                We learned that growth isn't just about numbers—it's about
                staying true to your values while adapting to change. We
                invested heavily in our people, our product, and our processes.
              </p>
            </div>
          ),
          media: (
            <img
              src="https://toastability-production.s3.amazonaws.com/ytbyjrcvrghc7wl6w1g7g8fwka22"
              alt="Office expansion"
              className="h-full w-full object-cover"
            />
          ),
          mediaLeft: true,
        },
        {
          content: (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Today and Tomorrow</h3>
              <p className="text-muted-foreground">
                Today, we serve over 100,000 businesses across 50+ countries.
                But we're just getting started. We're investing in AI, expanding
                our integrations, and building features that will define the
                future of work.
              </p>
              <p className="text-muted-foreground">
                Our vision remains unchanged: empower every team to do their
                best work. We measure success not by our revenue, but by the
                impact we have on our customers' success.
              </p>
            </div>
          ),
          media: (
            <img
              src="https://toastability-production.s3.amazonaws.com/uv0g605yf5mz106nrm1uspt9l0rr"
              alt="Modern workplace"
              className="h-full w-full object-cover"
            />
          ),
          mediaLeft: false,
        },
      ]}
    />
  );
}
