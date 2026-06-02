import { HeroEventRegistration } from "@opensite/ui/blocks/hero/hero-event-registration";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroEventRegistration
      badgeText="Annual Conference"
      badgeIcon="lucide/calendar"
      heading="Join us for the event of the year"
      description="Three days of inspiring talks, hands-on workshops, and networking with industry leaders. September 15-17, 2026 in San Francisco."
      actions={[
        {
          label: "Register Now",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Agenda",
          href: "#",
          variant: "outline",
          icon: <DynamicIcon name="lucide/calendar" size={16} />,
        },
      ]}
      stats={[
        {
          value: "2k+",
          label: "Attendees",
          icon: (
            <DynamicIcon
              name="lucide/users"
              size={24}
              className="text-primary"
            />
          ),
        },
        {
          value: "50+",
          label: "Speakers",
          icon: (
            <DynamicIcon
              name="lucide/mic-vocal"
              size={24}
              className="text-primary"
            />
          ),
        },
        {
          value: "3 Days",
          label: "Duration",
          icon: (
            <DynamicIcon
              name="lucide/timer"
              size={24}
              className="text-primary"
            />
          ),
        },
      ]}
      image={{
        src: "https://toastability-production.s3.amazonaws.com/e83zsyvl0an0owzdmpwjnnty641x",
        alt: "Event venue",
      }}
      logo={{
        src: "https://cdn.ing/assets/i/r/288967/cn6z89c4c23ubohkz6kv3npdn672/ui-placeholder-logo-white-5.png",
        alt: "Event venue",
      }}
      locationLabel="San Francisco, CA"
      locationSublabel="September 15-17, 2026"
      background="dark"
      pattern="gridFadeTopRight"
      patternOpacity={0.15}
    />
  );
}
