import { CommunityInitiatives } from "@opensite/ui/blocks/about/community-initiatives";

export default function Demo() {
  return (
    <CommunityInitiatives
      badgeText="Diversity & Inclusion"
      heading="Building a More Equitable Future"
      description="We're committed to creating a workplace and community where everyone belongs, thrives, and can reach their full potential."
      categories={[
        {
          id: "workplace",
          title: "Inclusive Workplace",
          description:
            "Creating an environment where every voice is heard and every person can be their authentic self.",
          initiatives: [
            {
              id: "hiring",
              title: "Equitable Hiring Practices",
              description:
                "We've redesigned our hiring process from the ground up to reduce bias and increase representation. Blind resume reviews, diverse interview panels, and structured interviews ensure every candidate gets a fair evaluation based on merit.",
              icon: "lucide/users",
              metrics: [
                { value: "45%", label: "Diverse Leadership" },
                { value: "60%", label: "Women in Tech" },
                { value: "85%", label: "Retention Rate" },
              ],
              image: "https://toastability-production.s3.amazonaws.com/ri0dqx79spe6771np76mkmno5xfd",
            },
            {
              id: "growth",
              title: "Career Development Programs",
              description:
                "Mentorship programs, leadership training, and sponsorship opportunities help underrepresented employees advance their careers. We track promotion rates and close equity gaps through targeted investment in professional development.",
              icon: "lucide/trending-up",
              metrics: [
                { value: "$2M", label: "Annual Investment" },
                { value: "300+", label: "Mentorship Pairs" },
                { value: "92%", label: "Satisfaction" },
              ],
              image: "https://toastability-production.s3.amazonaws.com/e13qu3083lkhdg7th64vb628172a",
            },
          ],
        },
        {
          id: "community",
          title: "Community Impact",
          description:
            "Extending our commitment beyond our walls to make a difference in the broader community.",
          initiatives: [
            {
              id: "education",
              title: "Tech Education Partnerships",
              description:
                "We partner with schools in underserved communities to provide coding bootcamps, STEM workshops, and mentorship programs. Over 5,000 students have participated in our programs, with many going on to successful tech careers.",
              icon: "lucide/graduation-cap",
              metrics: [
                { value: "5000+", label: "Students Reached" },
                { value: "25", label: "School Partners" },
                { value: "78%", label: "Career Placement" },
              ],
              image: "https://toastability-production.s3.amazonaws.com/w87w0fyjdol9yzwo7yywkgxidvzo",
            },
            {
              id: "nonprofit",
              title: "Nonprofit Technology Support",
              description:
                "We provide free or discounted access to our platform for nonprofits working on social justice, education, and environmental causes. Our team volunteers technical expertise to help these organizations maximize their impact.",
              icon: "lucide/heart-handshake",
              metrics: [
                { value: "500+", label: "Nonprofit Partners" },
                { value: "$5M", label: "Value Donated" },
                { value: "2000+", label: "Volunteer Hours" },
              ],
              image: "https://cdn.ing/assets/i/r/289134/pq7xx1m5piaai94v56e8kpt5rc7m/luxury-champagne-wall-with-ambient-sconce-lighting.jpg",
            },
          ],
        },
        {
          id: "culture",
          title: "Inclusive Culture",
          description:
            "Fostering a culture where differences are celebrated and everyone feels they belong.",
          initiatives: [
            {
              id: "groups",
              title: "Employee Resource Groups",
              description:
                "Nine active ERGs representing diverse communities—from Women in Tech to LGBTQ+ Alliance to Black Excellence Network—provide support, networking, and advocacy. Each group receives budget and executive sponsorship.",
              icon: "lucide/users-2",
              metrics: [
                { value: "9", label: "Active ERGs" },
                { value: "65%", label: "Employee Participation" },
                { value: "40+", label: "Events/Year" },
              ],
              image: "https://cdn.ing/assets/i/r/289135/r0s7nf2ywu133hpy6hcbt74i8htg/espresso-martini-served-at-moody-bar-with-coffee-beans.jpg",
            },
            {
              id: "learning",
              title: "Continuous Learning",
              description:
                "Regular workshops on unconscious bias, inclusive leadership, and cultural competency keep our entire team learning and growing. These aren't checkbox exercises—they're meaningful conversations that drive real change.",
              icon: "lucide/book-open",
              metrics: [
                { value: "100%", label: "Completion Rate" },
                { value: "24", label: "Workshops/Year" },
                { value: "4.8/5", label: "Impact Rating" },
              ],
            },
          ],
        },
        {
          id: "accessibility",
          title: "Accessibility",
          description:
            "Making our workplace and products accessible to everyone, regardless of ability.",
          initiatives: [
            {
              id: "product",
              title: "Accessible Product Design",
              description:
                "WCAG 2.1 AA compliance is our baseline, not our ceiling. We employ accessibility experts, conduct regular audits, and test with assistive technologies to ensure our product works for everyone.",
              icon: "lucide/accessibility",
              metrics: [
                { value: "AA", label: "WCAG Level" },
                { value: "100%", label: "Keyboard Nav" },
                { value: "98%", label: "Screen Reader" },
              ],
              image: "https://cdn.ing/assets/i/r/289136/47lmzyqgma1ovg3oxw37x38oyx08/bartender-shaking-cocktail-in-lively-night-bar.jpg",
            },
            {
              id: "workplace",
              title: "Accessible Workplace",
              description:
                "From physical office design to assistive technology budgets to flexible work arrangements, we remove barriers so everyone can contribute their best work. Accommodations are handled with dignity and urgency.",
              icon: "lucide/home",
              metrics: [
                { value: "$500K", label: "Accommodation Budget" },
                { value: "48hr", label: "Response Time" },
                { value: "100%", label: "Office Accessibility" },
              ],
            },
          ],
        },
      ]}
      ctaBadgeText="We're Hiring"
      ctaHeading="Join Our Diverse Team"
      ctaDescription="We're always looking for talented people from all backgrounds who share our commitment to building an inclusive future."
      actions={[
        {
          label: "View Open Positions",
          href: "#",
          variant: "default",
          size: "lg",
        },
        {
          label: "Read Our Impact Report",
          href: "#",
          variant: "outline",
          size: "lg",
        },
      ]}
      background="white"
      pattern="noise"
      patternOpacity={1}
    />
  );
}
