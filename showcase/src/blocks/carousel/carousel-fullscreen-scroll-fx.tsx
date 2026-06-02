import { CarouselFullscreenScrollFx } from "@opensite/ui/blocks/carousel/carousel-fullscreen-scroll-fx";
import { DynamicIcon } from "@opensite/ui";

export default function Demo() {
  return (
    <CarouselFullscreenScrollFx
      slides={[
        {
          id: "chapter-one",
          subtitle: "Chapter One",
          title: "The Journey Begins",
          description:
            "Every great story starts with a single step. This is where vision meets execution, where dreams transform into reality through determination and innovation.",
          image: "https://toastability-production.s3.amazonaws.com/sr370c2cnf7uk5k4f6znyshualv0",
          overlayColor: "rgba(0, 20, 40, 0.6)",
          actions: [
            {
              label: "Get Started",
              href: "#",
              asButton: true,
            },
            {
              label: "Learn More",
              href: "#",
              asButton: true,
              variant: "outline",
              iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
            },
          ],
        },
        {
          id: "chapter-two",
          subtitle: "Chapter Two",
          title: "Breaking Boundaries",
          description:
            "We challenged conventional thinking and pushed beyond the limits of what was thought possible. Innovation thrives when curiosity meets courage.",
          image: "https://toastability-production.s3.amazonaws.com/63aotyt2pb4gqpccej2kkw8reson",
          overlayColor: "rgba(40, 20, 60, 0.6)",
        },
        {
          id: "chapter-three",
          subtitle: "Chapter Three",
          title: "Building Together",
          description:
            "Success is a team sport. Through collaboration and shared purpose, we created something greater than the sum of its parts.",
          image: "https://toastability-production.s3.amazonaws.com/we9r4e711an6d0bd3dwbl9tb9z7q",
          overlayColor: "rgba(20, 40, 20, 0.6)",
        },
        {
          id: "chapter-four",
          subtitle: "Chapter Four",
          title: "Global Impact",
          description:
            "From local roots to worldwide reach, our mission expanded to touch lives across continents and transform entire industries.",
          image: "https://toastability-production.s3.amazonaws.com/9covpitzpuuobkg1m4mfokpi0enw",
          overlayColor: "rgba(60, 30, 10, 0.6)",
        },
        {
          id: "chapter-five",
          subtitle: "Chapter Five",
          title: "The Future Awaits",
          description:
            "This is just the beginning. The next chapter is being written right now, and you're invited to be part of this incredible journey.",
          image: "https://toastability-production.s3.amazonaws.com/1xdx70c7gp9l883soyh5d3exesvt",
          overlayColor: "rgba(10, 30, 50, 0.6)",
        },
      ]}
    />
  );
}
