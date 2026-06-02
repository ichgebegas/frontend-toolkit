import { AboutStoryExpertise } from "@opensite/ui/blocks/about/about-story-expertise";

export default function Demo() {
  return (
    <AboutStoryExpertise
      eyebrow="Our Story"
      heading="From Garage Startup to Global Impact"
      storyParagraphs={[
        "What began as a two-person operation in 2010 has grown into a team of over 200 professionals serving clients across 30 countries.",
        "Our journey hasn't always been smooth. We've faced challenges, made mistakes, and learned invaluable lessons along the way. But through it all, our commitment to our clients and our craft has never wavered.",
        "Today, we're proud to be trusted partners to some of the world's most innovative organizations, helping them navigate digital transformation and achieve their most ambitious goals.",
      ]}
      actions={[
        {
          label: "Read Our Full Story",
          href: "#",
          variant: "default",
          size: "lg",
        },
        {
          label: "Meet the Team",
          href: "#",
          variant: "outline",
          size: "lg",
        },
      ]}
      image={{
        src: "https://cdn.ing/assets/i/r/289137/aud3lp0mpweq0wdoke6vnxy3a5l7/nightlife-bar-friends-holding-martinis-celebration.jpg",
        alt: "Team collaboration",
      }}
      highlight={{
        icon: "lucide/award",
        label: "Recognition",
        title: "Top 100 Tech Companies",
        description:
          "Named among the fastest-growing technology companies for three consecutive years.",
      }}
      expertiseHeading="Areas of Expertise"
      expertiseDescription="We've developed deep expertise across multiple domains, enabling us to tackle complex challenges with confidence."
      expertiseAreas={[
        {
          icon: "lucide/layout",
          title: "Product Design",
          description:
            "User-centered design that balances aesthetics with functionality.",
        },
        {
          icon: "lucide/code",
          title: "Engineering",
          description:
            "Scalable, maintainable code built with modern best practices.",
        },
        {
          icon: "lucide/bar-chart",
          title: "Data & Analytics",
          description:
            "Insights-driven strategies powered by advanced analytics.",
        },
        {
          icon: "lucide/cloud",
          title: "Cloud Infrastructure",
          description: "Reliable, secure, and cost-effective cloud solutions.",
        },
      ]}
      background="dark"
      pattern="gridFadeTop"
      patternOpacity={0.15}
    />
  );
}
