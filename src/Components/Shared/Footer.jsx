"use client";
import { useSpring, animated } from "@react-spring/web";

import React from "react";
import AboutUs from "../Footer/About-Us";
import Social from "../Footer/Social";
import ContactUs from "../Footer/Contact-Us";

const Footer = () => {
  const style = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
  });
  return (
    <animated.footer
      style={style}
      className=" bg-black text-base-content py-10 px-2 mt-0 sm:mt-10"
    >
      <div className="container footer lg:footer-horizontal mx-auto ">
        <AboutUs></AboutUs>
        <Social></Social>
        <ContactUs></ContactUs>
      </div>
    </animated.footer>
  );
};

export default Footer;
