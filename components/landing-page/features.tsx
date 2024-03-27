import SectionWrapper from "@/components/section-wrapper";
import Feature1 from "@/public/images/Feature1.jpeg";
import Feature2 from "@/public/images/feature2.jpg";
import Image from "next/image";

const VisualFeatures = () => {
  const features = [
    {
      title: "Choose between multiple plans",
      desc: "We offer a variety of plans to suit your needs. Whether you're a casual player or a professional gamer, we have the perfect plan for you.",
      img: Feature1,
    },
    {
      title: "Perfect for Streamers and Content Creators",
      desc: "Show off Shadow Overlay's powerful features to your audience or hide the cheats in your Streaming Program.",
      img: Feature2,
    },
  ];
  return (
    <SectionWrapper>
      <div className="custom-screen text-gray-300">
        <div className="max-w-[650px] mx-auto text-center">
          <h2 className="text-gray-50 text-3xl font-bold sm:text-5xl">
            Take your Warzone experience to the next level
          </h2>
          <p className="mt-3 text-lg">
            Dominate every match with Shadow Overlay&apos;s powerful features.
            <br />
            <i>Never lose a game again.</i>
          </p>
        </div>
        <div className="mt-12">
          <ul className="space-y-8 gap-x-6 sm:flex sm:space-y-0">
            {features.map((item, idx) => (
              <li
                className="flex-1 flex flex-col justify-between border border-gray-800 rounded-2xl"
                key={idx}
                style={{
                  background:
                    "radial-gradient(141.61% 141.61% at 29.14% -11.49%, rgba(203, 213, 225, 0.15) 0%, rgba(203, 213, 225, 0) 57.72%)",
                }}
              >
                <div className="p-8">
                  <h3 className="text-gray-50 text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 sm:text-sm md:text-base">{item.desc}</p>
                </div>
                <div className="pl-8">
                  <Image
                    src={item.img}
                    className="w-full ml-auto"
                    alt={item.title}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default VisualFeatures;
