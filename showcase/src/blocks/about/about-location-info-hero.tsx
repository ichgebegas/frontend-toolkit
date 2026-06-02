import { AboutLocationInfoHero } from "@opensite/ui/blocks/about/about-location-info-hero";

export default function Demo() {
  return (
    <AboutLocationInfoHero
      headline="A Lively, ultramodern sports parlor and dining establishment."
      address="123 Innovation Drive, Suite 400, San Francisco, CA 94102"
      addressHref="#"
      phone="(555) 123-4567"
      phoneHref="tel:+15551234567"
      actions={[
        {
          label: "Get Directions",
          href: "#",
        },
        {
          label: "Schedule a Visit",
          href: "#",
        },
      ]}
      hoursSections={[
        {
          label: "Hours",
          hours: [
            { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
            { day: "Saturday", time: "10:00 AM - 2:00 PM" },
            { day: "Sunday", time: "Closed" },
          ],
        },
        {
          label: "Happy Hour",
          hours: [
            { day: "Monday - Friday", time: "8:00 AM - 8:00 PM" },
            { day: "Weekend", time: "10:00 AM - 4:00 PM" },
          ],
        },
      ]}
      images={[
        {
          src: "https://cdn.ing/assets/i/r/289138/tlbtkr13i2nwu7kx80t5bnf9qwgg/manual-meat-slicer-on-wooden-counter-charcuterie-station.jpg",
          alt: "Office exterior",
        },
        {
          src: "https://cdn.ing/assets/i/r/289144/9thob27iku9i72elwvz5j03z6482/glamorous-nightlife-portrait-woman-burgundy-dress-upscale-bar.jpg",
          alt: "Office interior",
        },
      ]}
      pattern="gridFadeTop"
      patternOpacity={0.1}
      background="dark"
    />
  );
}
