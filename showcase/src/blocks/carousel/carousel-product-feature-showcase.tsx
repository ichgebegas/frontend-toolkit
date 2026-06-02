import { CarouselProductFeatureShowcase } from "@opensite/ui/blocks/carousel/carousel-product-feature-showcase";

export default function Demo() {
  return (
    <CarouselProductFeatureShowcase
      heading="Premium Wireless Headphones"
      subheading="Studio-quality sound meets cutting-edge technology"
      features={[
        {
          id: "noise-cancellation",
          title: "Active Noise Cancellation",
          description:
            "Industry-leading ANC technology blocks out ambient noise for an immersive listening experience. Enjoy your music, podcasts, or calls without distractions, whether you're on a plane, train, or busy city street.",
          image: "https://toastability-production.s3.amazonaws.com/f921uoblxbv8f9bmr4s2ik7xxugl",
          colors: [
            {
              name: "Midnight Black",
              value: "#1a1a1a",
              image: "https://toastability-production.s3.amazonaws.com/f921uoblxbv8f9bmr4s2ik7xxugl",
            },
            {
              name: "Silver Mist",
              value: "#c0c0c0",
              image: "https://toastability-production.s3.amazonaws.com/gl7n7p6atndufbsm6q2ac5jeqttp",
            },
            {
              name: "Rose Gold",
              value: "#b76e79",
              image: "https://toastability-production.s3.amazonaws.com/sj8cs2gpbanaowqwxar1uhhwd23z",
            },
          ],
        },
        {
          id: "battery-life",
          title: "40-Hour Battery Life",
          description:
            "Power through your entire week with up to 40 hours of continuous playback. Fast charging gives you 5 hours of playback with just 10 minutes of charging via USB-C.",
          image: "https://toastability-production.s3.amazonaws.com/2rbqbw9778770i8izdeabx8v2w2k",
          colors: [
            {
              name: "Midnight Black",
              value: "#1a1a1a",
              image: "https://toastability-production.s3.amazonaws.com/2rbqbw9778770i8izdeabx8v2w2k",
            },
            {
              name: "Silver Mist",
              value: "#c0c0c0",
              image: "https://toastability-production.s3.amazonaws.com/90rcw2mljzpeuxlac8q77mor15xz",
            },
            {
              name: "Rose Gold",
              value: "#b76e79",
              image: "https://toastability-production.s3.amazonaws.com/vh1aowwr93yz4qrzct2s4je0cxdo",
            },
          ],
        },
        {
          id: "comfort",
          title: "Premium Comfort Design",
          description:
            "Memory foam ear cushions wrapped in premium protein leather provide all-day comfort. The adjustable headband ensures a perfect fit for extended listening sessions without fatigue.",
          image: "https://toastability-production.s3.amazonaws.com/9eddibiq5ovc9cvs3ekijkrjpahg",
          colors: [
            {
              name: "Midnight Black",
              value: "#1a1a1a",
              image: "https://toastability-production.s3.amazonaws.com/9eddibiq5ovc9cvs3ekijkrjpahg",
            },
            {
              name: "Silver Mist",
              value: "#c0c0c0",
              image: "https://toastability-production.s3.amazonaws.com/3ghn8dz3g9qtt4pf4nwbriaydvzb",
            },
            {
              name: "Rose Gold",
              value: "#b76e79",
              image: "https://toastability-production.s3.amazonaws.com/82ykd8s8boiqaxypkulb0v0s2qiw",
            },
          ],
        },
        {
          id: "connectivity",
          title: "Multipoint Bluetooth 5.3",
          description:
            "Connect to two devices simultaneously and seamlessly switch between them. Latest Bluetooth 5.3 technology ensures stable connection up to 30 feet with minimal latency.",
          image: "https://toastability-production.s3.amazonaws.com/1b0gd8ul22q799d62dvm3sgyll85",
          colors: [
            {
              name: "Midnight Black",
              value: "#1a1a1a",
              image: "https://toastability-production.s3.amazonaws.com/1b0gd8ul22q799d62dvm3sgyll85",
            },
            {
              name: "Silver Mist",
              value: "#c0c0c0",
              image: "https://toastability-production.s3.amazonaws.com/102grjqg8aigxkj585s9x3xbxfv7",
            },
            {
              name: "Rose Gold",
              value: "#b76e79",
              image: "https://toastability-production.s3.amazonaws.com/50y066ms7rb5sw62u9u08jzkk8rj",
            },
          ],
        },
      ]}
      actions={[
        {
          label: "Buy Now - $349",
          href: "#purchase",
          variant: "default",
          size: "lg",
        },
        {
          label: "Learn More",
          href: "#details",
          variant: "outline",
          size: "lg",
        },
      ]}
      pattern="diagonalCrossFadeTop"
      patternOpacity={1}
      background="gray"
      spacing="hero"
    />
  );
}
