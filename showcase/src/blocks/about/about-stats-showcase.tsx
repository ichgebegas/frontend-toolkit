import { AboutStatsShowcase } from "@opensite/ui/blocks/about/about-stats-showcase";

export default function Demo() {
  return (
    <AboutStatsShowcase
      title="Driving Results That Matter"
      description="We measure our success by the impact we create for our clients. Here's what the numbers say about our work."
      images={[
        {
          src: "https://toastability-production.s3.amazonaws.com/t7iteqw4xhtppkiws88bsoia25hv",
          alt: "Team collaboration",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/klr5tuvulkyqfb721txtu4hgzxdm",
          alt: "Modern office",
        },
      ]}
      statsTitle="Numbers That Speak for Themselves"
      stats={[
        { value: "500+", label: "Projects Delivered" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "50M+", label: "Users Impacted" },
        { value: "15+", label: "Years of Experience" },
        { value: "200+", label: "Team Members" },
        { value: "30+", label: "Countries Served" },
      ]}
      logosTitle="Trusted by Leading Organizations"
      logos={[
        {
          src: "https://cdn.ing/assets/i/r/288963/4kq4loxmhh5lwc7scw7hhusu87km/ui-placeholder-logo-white-1.png",
          alt: "Partner logo",
          name: "Acme",
        },
        {
          src: "https://cdn.ing/assets/i/r/288966/0ls9to9jqnrc4gcxty9rx2c4udjv/ui-placeholder-logo-white-2.png",
          alt: "Partner logo",
          name: "Initech",
        },
        {
          src: "https://cdn.ing/assets/i/r/288971/sow5o2s8dp1cr159rxexm0yhov5w/ui-placeholder-logo-white-3.png",
          alt: "Partner logo",
          name: "Umbrella",
        },
      ]}
      background="dark"
      pattern="gridFadeTop"
      patternOpacity={0.1}
      benefitsTitle="The Impact We Create"
      benefits={[
        {
          image: {
            src: "https://cdn.ing/assets/i/r/289100/qx79hnpbzbm229nfaeceafv6b3a8/cooking-citrus-and-pistachio-bundt-cake-on-rusty-t-2024-10-18-04-31-33-utc.webp",
            alt: "Growth analytics",
          },
        },
        {
          stat: {
            value: "312%",
            label: "Average ROI",
            description:
              "Our clients see significant returns on their technology investments within the first year.",
          },
        },
        {
          testimonial: {
            company: "TechCorp",
            quote:
              "Working with this team transformed our digital presence. The results exceeded our expectations.",
            author: "Jennifer Lee",
            role: "Chief Digital Officer",
          },
        },
      ]}
    />
  );
}
