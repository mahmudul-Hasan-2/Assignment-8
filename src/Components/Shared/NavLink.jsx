"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`duration-200 px-4 py-2 ${pathName === href ? " border-b-2 border-primary shadow rounded" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
