import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "All Animals", path: "/animals" },
  ];
  const socialButton = (
    <>
      <Link href="/login" className="btn">
        Login
      </Link>
      <Link href="/register" className="btn">
        Register
      </Link>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-4"
            >
              {links.map((link) => (
                <NavLink key={link.name} href={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </ul>
          </div>
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={100}
              className="h-18 sm:h-25 w-13 sm:w-20"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4">
            {links.map((link) => (
              <NavLink key={link.name} href={link.path}>
                {link.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-2 ">{socialButton}</div>
      </div>
    </div>
  );
};

export default Navbar;
