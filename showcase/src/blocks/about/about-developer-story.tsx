import { AboutDeveloperStory } from "@opensite/ui/blocks/about/about-developer-story";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutDeveloperStory
      title="From Curiosity to Craft"
      description="My journey into software development began with a simple question: 'How does this work?' That curiosity has driven me through 15 years of building, breaking, and rebuilding digital experiences that matter."
      storyTitle="The Path Forward"
      storyContent="What started as tinkering with HTML in my teenage years evolved into a deep passion for creating meaningful technology. I've had the privilege of working with startups and Fortune 500 companies alike, learning that the best solutions come from understanding people first and technology second."
      storyImage={{
        src: "https://toastability-production.s3.amazonaws.com/rddfyzvfpdlbzwhgep2myppwxn05",
        alt: "Developer workspace",
      }}
      actions={[
        {
          label: "Read My Blog",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Portfolio",
          href: "#",
          variant: "outline",
        },
      ]}
      logos={[
        {
          src: "https://cdn.ing/assets/i/r/288964/4xdrg1wjc2knoy58ulqijicamar3/ui-placeholder-logo-dark-1.png",
          alt: "Company 1",
        },
        {
          src: "https://cdn.ing/assets/i/r/288965/aw0n8ithqntxtfweqrlmseqlcak7/ui-placeholder-logo-black-2.png",
          alt: "Company 2",
        },
        {
          src: "https://cdn.ing/assets/i/r/288972/kppvdeo8kgeweawxisqy9h9ybz6h/ui-placeholder-logo-black-3.png",
          alt: "Company 3",
        },
      ]}
      stats={[
        { value: "200+", label: "Projects Shipped" },
        { value: "15", label: "Years Experience" },
        { value: "30+", label: "Technologies Mastered" },
      ]}
      pattern="p6"
      patternOpacity={1}
      background="gray"
    />
  );
}
