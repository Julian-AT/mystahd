import Image from "next/image";
import Logo from "@/public/images/logo.png";

const Brand = ({ ...props }) => (
  <Image
    src={Logo}
    alt="ShadowOverlay logo"
    className="rounded-full"
    {...props}
    width={64}
    height={64}
    priority
  />
);
export default Brand;
