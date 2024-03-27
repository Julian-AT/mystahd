import SectionWrapper from "@/components/section-wrapper";
import GradientWrapper from "@/components/gradient-wrapper";
import user1 from "@/public/images/user1.png";
import user2 from "@/public/images/user2.jpg";
import user3 from "@/public/images/user3.webp";
import Image from "next/image";
import LayoutEffect from "@/components/layout-effect";

const Testimonial = () => {
  const testimonials = [
    {
      avatar: user2,
      name: "Julian",
      title: "Shadow Overlay User",
      quote:
        "I've been using Shadow Overlay since three months and I haven't been banned yet.",
    },
    {
      avatar: user3,
      name: "Stayyy",
      title: "Streamer",
      quote:
        "I highly recommend Shadow Overlay to all my viewers. Been using it since day 1",
    },
    {
      avatar: user1,
      name: "Some Name",
      title: "Shadow Overlay User",
      quote:
        "I'm very happy with the features. It's the best Warzone cheat I've ever used.",
    },
  ];

  return (
    <SectionWrapper>
      <div id="testimonials" className="custom-screen text-gray-300">
        <div className="max-w-2xl text-center md:mx-auto">
          <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
            Loved by users around the world
          </h2>
        </div>
        <GradientWrapper
          wrapperClassName="max-w-sm h-40 top-12 inset-x-0"
          className="mt-12"
        >
          <LayoutEffect
            className="duration-1000 delay-300 gap-6 grid ease-in-out sm:grid-cols-1 lg:grid-cols-3 "
            isInviewState={{
              trueState: "opacity-1",
              falseState: "opacity-0 translate-y-12",
            }}
          >
            <ul>
              {testimonials.map((item, idx) => (
                <li
                  key={idx}
                  className="p-4 rounded-xl border border-gray-800"
                  style={{
                    backgroundImage:
                      "radial-gradient(100% 100% at 50% 50%, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0) 100%)",
                  }}
                >
                  <figure className="flex flex-col justify-between gap-y-6 h-full">
                    <blockquote className="relative">
                      <p className="">{item.quote}</p>
                    </blockquote>
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover "
                      />
                      <div>
                        <span className="block text-secondary-foreground font-semibold">
                          {item.name}
                        </span>
                        <span className="block text-muted-foreground text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              ))}
            </ul>
          </LayoutEffect>
        </GradientWrapper>
      </div>
    </SectionWrapper>
  );
};

export default Testimonial;
