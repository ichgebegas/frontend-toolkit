import { AboutCultureTabs } from "@opensite/ui/blocks/about/about-culture-tabs";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutCultureTabs
      badgeText="Our Culture"
      heading="What Makes Us Different"
      description="We've built a workplace where innovation thrives and every voice matters. Explore the core aspects that define our unique culture."
      aspects={[
        {
          id: "innovation",
          title: "Innovation First",
          description:
            "We believe in challenging the status quo and pushing boundaries. Our teams have the freedom to experiment, fail fast, and iterate toward breakthrough solutions. Every idea is valued, and creativity is encouraged at every level.",
          images: [
            "https://cdn.ing/assets/i/r/289148/0p9g9lcxh9z50zhqww4athwg17bf/moody-orange-cocktail-in-coupe-glass-on-bar.jpg",
            "https://cdn.ing/assets/i/r/289153/yyyv41a4zc9mqdgqak2uj1jdjtk0/floral-mint-highball-craft-cocktail-on-wood-table.jpg",
            "https://cdn.ing/assets/i/r/289156/eiiflor2urddvyvqmhsbshoocown/dessert-buffet-with-cannoli-and-mini-cakes-at-event.jpg",
          ],
          testimonial: {
            quote:
              "The freedom to innovate here is unmatched. I've learned more in six months than in years elsewhere.",
            author: "Sarah Chen",
            role: "Senior Product Designer",
            avatar: "https://cdn.ing/assets/i/r/289157/dnsv4fjvfyeb5hld0i4453dlyo3c/glamorous-nightlife-cocktail-bar-woman-in-red-dress.jpg",
          },
        },
        {
          id: "collaboration",
          title: "Collaborative Spirit",
          description:
            "We break down silos and build bridges. Our open-door policy and cross-functional teams ensure that the best ideas rise to the top, regardless of where they come from. Collaboration isn't just encouraged—it's how we work.",
          images: [
            "https://cdn.ing/assets/i/r/289158/25j3kgsuxqvsf8cyje4y8k77dab9/fine-dining-toast-champagne-espresso-martini-seafood.jpg",
            "https://cdn.ing/assets/i/r/289161/7d2g6j0fhr1ax52x9swh2ecpu36p/medium-rare-filet-mignon-with-puree-and-red-wine.jpg",
            "https://cdn.ing/assets/i/r/289151/19d77cto4oilyslwmdmuzvz36z4o/espresso-martini-pour-with-lemon-twist-on-dark-bar.jpg",
          ],
          testimonial: {
            quote:
              "Working across teams is seamless. Everyone is genuinely invested in helping each other succeed.",
            author: "Marcus Johnson",
            role: "Engineering Lead",
            avatar: "https://cdn.ing/assets/i/r/289162/cyr8leumd42jk0nyr6r9x88et6eh/friends-dining-at-upscale-restaurant-toasting-with-wine.jpg",
          },
        },
        {
          id: "growth",
          title: "Growth Mindset",
          description:
            "We invest in our people's development through mentorship programs, learning budgets, and regular skill-building workshops. Your growth is our growth, and we're committed to helping you reach your full potential.",
          images: [
            "https://cdn.ing/assets/i/r/289163/kp4y1qm41q0exs2gxxkfhwxn148p/espresso-martini-toast-over-fine-dining-dinner.jpg",
            "https://cdn.ing/assets/i/r/289164/idrizzwl1rlzsehg511r85x6nns1/fine-dining-restaurant-dinner-spread-with-cocktails.jpg",
            "https://cdn.ing/assets/i/r/289165/py905nlu0any8riaohkf5ervr3m8/gourmet-asparagus-crostini-on-white-plate-marble-table.jpg",
          ],
          testimonial: {
            quote:
              "The mentorship and learning opportunities have accelerated my career beyond what I imagined possible.",
            author: "Priya Patel",
            role: "Data Scientist",
            avatar: "https://cdn.ing/assets/i/r/289166/88ie4k1t0zz68q81nsiyymgylylw/wedge-salad-iceberg-with-creamy-dressing-and-chives.jpg",
          },
        },
        {
          id: "balance",
          title: "Work-Life Balance",
          description:
            "We understand that your best work happens when you're at your best. Flexible schedules, remote options, and generous time-off policies ensure you can be present for what matters most in your life.",
          images: [
            "https://cdn.ing/assets/i/r/289168/75lrz1yf8iarvpr4jgmco0fi3j9t/fine-dining-restaurant-dinner-with-gourmet-dishes-on-wood-table.jpg",
            "https://cdn.ing/assets/i/r/289152/z4y87dyrnmglfxj4k4waw532u1mh/moody-whiskey-cocktail-with-cinnamon-dust-on-ice.jpg",
            "https://cdn.ing/assets/i/r/289148/0p9g9lcxh9z50zhqww4athwg17bf/moody-orange-cocktail-in-coupe-glass-on-bar.jpg",
          ],
          testimonial: {
            quote:
              "I can be a dedicated professional and a present parent. That balance has transformed my life.",
            author: "Alex Rivera",
            role: "Marketing Director",
            avatar: "https://cdn.ing/assets/i/r/289153/yyyv41a4zc9mqdgqak2uj1jdjtk0/floral-mint-highball-craft-cocktail-on-wood-table.jpg",
          },
        },
      ]}
      ctaHeading="Ready to Join Our Team?"
      ctaDescription="We're always looking for talented individuals who share our values and want to make an impact."
      actions={[
        {
          label: "View Open Positions",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Learn About Benefits",
          href: "#",
          variant: "outline",
        },
      ]}
      ctaImages={[
        "https://cdn.ing/assets/i/r/289156/eiiflor2urddvyvqmhsbshoocown/dessert-buffet-with-cannoli-and-mini-cakes-at-event.jpg",
        "https://cdn.ing/assets/i/r/289157/dnsv4fjvfyeb5hld0i4453dlyo3c/glamorous-nightlife-cocktail-bar-woman-in-red-dress.jpg",
        "https://cdn.ing/assets/i/r/289158/25j3kgsuxqvsf8cyje4y8k77dab9/fine-dining-toast-champagne-espresso-martini-seafood.jpg",
        "https://cdn.ing/assets/i/r/289161/7d2g6j0fhr1ax52x9swh2ecpu36p/medium-rare-filet-mignon-with-puree-and-red-wine.jpg",
        "https://cdn.ing/assets/i/r/289163/kp4y1qm41q0exs2gxxkfhwxn148p/espresso-martini-toast-over-fine-dining-dinner.jpg",
        "https://cdn.ing/assets/i/r/289164/idrizzwl1rlzsehg511r85x6nns1/fine-dining-restaurant-dinner-spread-with-cocktails.jpg",
      ]}
      background="dark"
      pattern="dashedGridFadeTopRight"
      patternOpacity={0.15}
    />
  );
}
