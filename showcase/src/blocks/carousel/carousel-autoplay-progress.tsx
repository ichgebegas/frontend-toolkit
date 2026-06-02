import { CarouselAutoplayProgress } from "@opensite/ui/blocks/carousel/carousel-autoplay-progress";

export default function Demo() {
  return (
    <CarouselAutoplayProgress
      slides={[
        {
          src: "https://toastability-production.s3.amazonaws.com/zykfhuapdqzu94ee1535gsgnvyac",
          alt: "Mountain Expedition",
          content: (
            <div className="mt-2">
              <h3 className="font-semibold text-lg">Mountain Expedition</h3>
              <p className="text-sm">
                Discover breathtaking peaks and pristine wilderness trails
              </p>
            </div>
          ),
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/hu4gmd93sp95wdyr9qijze0rgim9",
          alt: "Urban Architecture",
          content: (
            <div className="mt-2">
              <h3 className="font-semibold text-lg">Urban Architecture</h3>
              <p className="text-sm">
                Modern cityscapes showcasing cutting-edge design
              </p>
            </div>
          ),
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/90rcw2mljzpeuxlac8q77mor15xz",
          alt: "Coastal Sunset",
          content: (
            <div className="mt-2">
              <h3 className="font-semibold text-lg">Coastal Sunset</h3>
              <p className="text-sm">
                Golden hour magic along pristine shorelines
              </p>
            </div>
          ),
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/9797jh6slgbf9oq6lzlimcdiuziv",
          alt: "Forest Canopy",
          content: (
            <div className="mt-2">
              <h3 className="font-semibold text-lg">Forest Canopy</h3>
              <p className="text-sm">
                Immerse yourself in ancient woodland ecosystems
              </p>
            </div>
          ),
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/betxbx61fkijt0aygineplf489ze",
          alt: "Desert Dunes",
          content: (
            <div className="mt-2">
              <h3 className="font-semibold text-lg">Desert Dunes</h3>
              <p className="text-sm">
                Endless horizons and sculpted sand formations
              </p>
            </div>
          ),
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/1xdx70c7gp9l883soyh5d3exesvt",
          alt: "Northern Lights",
          content: (
            <div className="mt-2">
              <h3 className="font-semibold text-lg">Northern Lights</h3>
              <p className="text-sm">
                Witness nature's most spectacular light show
              </p>
            </div>
          ),
        },
      ]}
      autoplayDelay={7000}
      options={{ loop: true }}
      background="dark"
      pattern="gridFadeTopRight"
      patternOpacity={0.15}
    />
  );
}
