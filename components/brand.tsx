import Image from "next/image";
import Logo from "@/public/images/logo.png";

const Brand = ({ ...props }) => (
  <Image
    src={Logo}
    alt="ShadowOverlay logo"
    className="rounded-full"
    {...props}
    width={50}
    height={50}
    priority
  />
);
export default Brand;
