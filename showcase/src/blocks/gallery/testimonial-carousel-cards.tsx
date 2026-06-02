import { TestimonialCarouselCards } from "@opensite/ui/blocks/gallery/testimonial-carousel-cards";

export default function Demo() {
  return (
    <TestimonialCarouselCards
      heading="What Our Clients Say"
      description="Don't just take our word for it. Hear from the companies and teams who've transformed their businesses with our platform."
      items={[
        {
          id: "1",
          username: "@sarahchen",
          quote:
            "\"This platform has completely transformed how we handle data. The AI-powered insights are incredibly accurate and have helped us make better decisions faster. Our team productivity increased by 40% in the first month! The best investment we've made this year. The ROI was immediate and the customer support team is always available to help. We've saved countless hours on manual processes and our error rate dropped to near zero. Supportive throughout the entire process. We were up and running in just two weeks, and our customers immediately noticed the improvement in service quality.\"",
          author: "Sarah Chen, CTO at DataFlow",
          image: "https://toastability-production.s3.amazonaws.com/eoa76d31ynbg34urr6e4619la1f7",
          imageAlt: "Sarah Chen testimonial",
          bgColor: "bg-blue-50",
        },
        {
          id: "2",
          username: "@mikejohnson",
          quote:
            "\"The best investment we've made this year. The ROI was immediate and the customer support team is always available to help. We've saved countless hours on manual processes and our error rate dropped to near zero.\"",
          author: "Mike Johnson, VP Operations at CloudTech",
          image: "https://toastability-production.s3.amazonaws.com/0mh8a1dg7ftcqnyzgv303u501c8y",
          imageAlt: "Mike Johnson testimonial",
          bgColor: "bg-green-50",
        },
        {
          id: "3",
          username: "@emilyrodriguez",
          quote:
            '"Implementation was seamless and the team was incredibly supportive throughout the entire process. We were up and running in just two weeks, and our customers immediately noticed the improvement in service quality."',
          author: "Emily Rodriguez, CEO at FastScale",
          image: "https://toastability-production.s3.amazonaws.com/vvucxqs128w2d0z3n4s2z131rq7p",
          imageAlt: "Emily Rodriguez testimonial",
          bgColor: "bg-purple-50",
        },
        {
          id: "4",
          username: "@davidkim",
          quote:
            '"Outstanding platform with features we didn\'t even know we needed. The analytics dashboard alone has been worth the investment. We can now track everything in real-time and make data-driven decisions instantly."',
          author: "David Kim, Director of Product at InnovateLab",
          image: "https://toastability-production.s3.amazonaws.com/2rbqbw9778770i8izdeabx8v2w2k",
          imageAlt: "David Kim testimonial",
          bgColor: "bg-orange-50",
        },
        {
          id: "5",
          username: "@jennasmith",
          quote:
            '"Security and compliance were our top concerns, and this platform exceeded all our expectations. We passed our SOC 2 audit with flying colors, and our clients have complete confidence in our data protection."',
          author: "Jenna Smith, CISO at SecureBank",
          image: "https://toastability-production.s3.amazonaws.com/90rcw2mljzpeuxlac8q77mor15xz",
          imageAlt: "Jenna Smith testimonial",
          bgColor: "bg-pink-50",
        },
      ]}
      background="dark"
      spacing="py-6 md:py-40"
      pattern="gridFadeTopLeft"
      patternOpacity={0.15}
    />
  );
}
