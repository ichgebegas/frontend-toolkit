import { HeroMentorshipVideoSplit } from "@opensite/ui/blocks/hero/hero-mentorship-video-split";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroMentorshipVideoSplit
      heading="Learn from industry experts"
      description="Get personalized guidance from experienced professionals who have walked the path before you. Accelerate your growth with 1-on-1 mentorship."
      action={{
        label: "Find a Mentor",
        href: "#",
        variant: "default",
        asButton: true,
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      videoLabel="Watch success stories"
      videoTitle="Mentorship Success Stories"
      modalVideo={{
        image: {
          src: "https://toastability-production.s3.amazonaws.com/z37cidvud212bzqhhalrhvk7ipaa",
          alt: "Mentorship video",
        },
        video: {
          src: "https://toastability-production.s3.amazonaws.com/4kox2ux0ye1wlqkdwg03s08a67i1",
        },
      }}
      image={{
        src: "https://toastability-production.s3.amazonaws.com/pfllskt7q7144l288lrnpc6gx606",
        alt: "Video Showcase",
      }}
      background="dark"
    />
  );
}
