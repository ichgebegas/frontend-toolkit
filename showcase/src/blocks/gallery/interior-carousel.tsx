import { InteriorCarousel } from "@opensite/ui/blocks/gallery/interior-carousel";

export default function Demo() {
  return (
    <InteriorCarousel
      heading="Interior Design Showcase"
      description="Explore our collection of beautifully designed spaces that blend functionality with aesthetics. From modern minimalism to classic elegance."
      images={[
        "https://cdn.ing/assets/i/r/289134/pq7xx1m5piaai94v56e8kpt5rc7m/luxury-champagne-wall-with-ambient-sconce-lighting.jpg",
        "https://cdn.ing/assets/i/r/289135/r0s7nf2ywu133hpy6hcbt74i8htg/espresso-martini-served-at-moody-bar-with-coffee-beans.jpg",
        "https://cdn.ing/assets/i/r/289136/47lmzyqgma1ovg3oxw37x38oyx08/bartender-shaking-cocktail-in-lively-night-bar.jpg",
        "https://cdn.ing/assets/i/r/289137/aud3lp0mpweq0wdoke6vnxy3a5l7/nightlife-bar-friends-holding-martinis-celebration.jpg",
        "https://cdn.ing/assets/i/r/289138/tlbtkr13i2nwu7kx80t5bnf9qwgg/manual-meat-slicer-on-wooden-counter-charcuterie-station.jpg",
        "https://cdn.ing/assets/i/r/289144/9thob27iku9i72elwvz5j03z6482/glamorous-nightlife-portrait-woman-burgundy-dress-upscale-bar.jpg",
        "https://cdn.ing/assets/i/r/289147/mc32ysna8zk8xtyt0oizs1cqwbqt/fine-dining-restaurant-table-gourmet-dishes-red-wine.webp",
        "https://cdn.ing/assets/i/r/289148/0p9g9lcxh9z50zhqww4athwg17bf/moody-orange-cocktail-in-coupe-glass-on-bar.jpg",
      ]}
      loop={true}
      background="gray"
      spacing="pt-10 pb-20 md:pt-32 md:pb-32"
      pattern="gridFadeTop"
      patternOpacity={1}
    />
  );
}
