import Image from "next/image";
import Logo from "@/public/images/logo.png";

const Brand = ({ ...props }) => (
  <Image
    src={Logo}
    alt="ShadowOverlay logo"
    className="rounded-full"
    {...props}
    width={48}
    height={48}
    priority
  />
);
export default Brand;
