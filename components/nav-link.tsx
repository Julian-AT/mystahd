import Link from "next/link";

interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const NavLink = ({ children, href, ...props }: NavLinkProps) => (
  <Link
    href={href}
    {...props}
    className={`py-2.5 px-4 text-center rounded-full duration-150 ${
      props?.className || ""
    }`}
  >
    {children}
  </Link>
);

export default NavLink;
