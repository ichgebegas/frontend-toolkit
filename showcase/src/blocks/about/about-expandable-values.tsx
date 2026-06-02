import { AboutExpandableValues } from "@opensite/ui/blocks/about/about-expandable-values";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutExpandableValues
      badgeText="Our Core Values"
      heading="The Principles That Guide Us"
      description="These aren't just words on a wall—they're the foundation of every decision we make and the compass that guides our journey."
      values={[
        {
          id: "integrity",
          icon: <DynamicIcon name="lucide/shield" size={24} />,
          title: "Integrity",
          shortDescription: "Doing what's right, even when no one is watching.",
          longDescription:
            "We believe honesty and transparency are the bedrock of trust. In every interaction—with customers, partners, and each other—we choose authenticity over convenience. We admit mistakes, keep our promises, and hold ourselves accountable to the highest ethical standards.",
          examples: [
            "Transparent pricing with no hidden fees",
            "Honest communication about product limitations",
            "Clear data privacy policies and practices",
            "Speaking up when we see something wrong",
          ],
        },
        {
          id: "excellence",
          icon: <DynamicIcon name="lucide/award" size={24} />,
          title: "Excellence",
          shortDescription: "Striving for quality in everything we create.",
          longDescription:
            "Good enough is never good enough for us. We're obsessed with craftsmanship and continuous improvement. Whether it's a line of code, a customer email, or a product feature, we put our full energy into making it exceptional.",
          examples: [
            "Rigorous code reviews and testing standards",
            "Detailed documentation for every feature",
            "Regular training and skill development",
            "Customer feedback drives our roadmap",
          ],
        },
        {
          id: "empathy",
          icon: <DynamicIcon name="lucide/heart" size={24} />,
          title: "Empathy",
          shortDescription:
            "Understanding and caring about others' experiences.",
          longDescription:
            "We put ourselves in others' shoes—whether they're customers facing a problem, teammates navigating challenges, or communities affected by our work. Empathy shapes our products, our policies, and our culture.",
          examples: [
            "User research drives product decisions",
            "Flexible work arrangements for all life situations",
            "Active listening in every conversation",
            "Accessible design is our standard, not an afterthought",
          ],
        },
        {
          id: "innovation",
          icon: <DynamicIcon name="lucide/lightbulb" size={24} />,
          title: "Innovation",
          shortDescription: "Embracing change and pushing boundaries.",
          longDescription:
            "The status quo is our starting point, not our destination. We encourage experimentation, celebrate creative thinking, and view failure as a stepping stone to breakthrough ideas. Innovation isn't just about technology—it's about finding better ways to solve problems.",
          examples: [
            "20% time for passion projects",
            "Innovation challenges and hackathons",
            "Safe space to test new ideas",
            "Cross-functional collaboration on experiments",
          ],
        },
        {
          id: "community",
          icon: <DynamicIcon name="lucide/users" size={24} />,
          title: "Community",
          shortDescription: "Building connections and giving back.",
          longDescription:
            "We're stronger together. We invest in our internal community through mentorship and support, and we give back to the broader community through volunteering, open-source contributions, and partnerships with nonprofits.",
          examples: [
            "Volunteer time off for community service",
            "Open-source contributions and sponsorships",
            "Mentorship programs for underrepresented groups",
            "Local charity partnerships and fundraisers",
          ],
        },
        {
          id: "sustainability",
          icon: <DynamicIcon name="lucide/leaf" size={24} />,
          title: "Sustainability",
          shortDescription: "Building for the long term, responsibly.",
          longDescription:
            "We consider the environmental and social impact of our decisions. From carbon-neutral operations to sustainable business practices, we're committed to leaving the world better than we found it.",
          examples: [
            "Carbon-neutral cloud infrastructure",
            "Paperless operations and digital workflows",
            "Sustainable office practices and partnerships",
            "Long-term thinking over short-term gains",
          ],
        },
      ]}
      ctaHeading="Want to Be Part of Our Values-Driven Team?"
      ctaDescription="We're looking for people who share these principles and want to build something meaningful together."
      actions={[
        {
          label: "Explore Careers",
          href: "#",
          variant: "default",
          size: "lg",
        },
      ]}
      background="dark"
      pattern="gridFadeTop"
      patternOpacity={0.05}
    />
  );
}
