"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`duration-200 ${pathName === href ? "pb-1 border-b-2 border-primary shadow" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
