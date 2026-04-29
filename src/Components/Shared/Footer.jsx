import React from "react";
import AboutUs from "../Footer/About-Us";
import Social from "../Footer/Social";
import ContactUs from "../Footer/Contact-Us";

const Footer = () => {
  return (
    <footer className=" bg-black text-base-content py-10 px-2 mt-0 sm:mt-10">
      <div className="container footer lg:footer-horizontal mx-auto ">
        <AboutUs></AboutUs>
        <Social></Social>
        <ContactUs></ContactUs>
      </div>
    </footer>
  );
};

export default Footer;
