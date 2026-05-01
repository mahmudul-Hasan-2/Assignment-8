"use client";

import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { signOut, useSession } from "@/lib/auth-client";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "All Animals", path: "/animals" },
  ];

  const socialButton = (
    <>
      <Link href="/login" className="btn btn-ghost lg:btn-outline">
        Login
      </Link>
      <Link href="/register" className="btn btn-primary">
        Register
      </Link>
    </>
  );

  const { data } = useSession();
  const user = data?.user;

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
            >
              {links.map((link) => (
                <li key={link.name}>
                  <NavLink href={link.path}>{link.name}</NavLink>
                </li>
              ))}
              {user ? (
                <div className="flex flex-col justify-start items-center gap-3">
                  <Link
                    href={"/profile"}
                    className="inline-block w-10 h-10 overflow-hidden rounded-full border-2 border-primary bg-base-100 p-0.5 shadow-sm hover:scale-105 transition-transform"
                  >
                    <Image
                      src={user.image || "/avatar.svg"}
                      alt="User Photo"
                      width={40}
                      height={40}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="btn btn-sm w-full lg:btn-md btn-outline btn-error"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="gap-2 flex flex-col">{socialButton}</div>
              )}
            </ul>
          </div>
          <Link href={"/"} className="flex items-center">
            <span className="text-xl font-bold">
              Qurbani<span className="text-green-500">hat</span>
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink href={link.path}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-3">
          {user ? (
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href={"/profile"}
                className="inline-block w-10 h-10 overflow-hidden rounded-full border-2 border-primary bg-base-100 p-0.5 shadow-sm hover:scale-105 transition-transform"
              >
                <Image
                  src={user.image || "/avatar.svg"}
                  alt="User Photo"
                  width={40}
                  height={40}
                  className="h-full w-full rounded-full object-cover"
                />
              </Link>
              <button
                onClick={() => signOut()}
                className="btn btn-sm lg:btn-md btn-outline btn-error"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden lg:flex gap-2">{socialButton}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
