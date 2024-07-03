import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiDownload, HiOutlineArrowRight } from "react-icons/hi";

import { scrollToRef } from "../../utils/scrollToRef";
import { fadeInAnimation } from "../../utils/animation";

import Button from "../ui/Button";

const ButtonGroup: React.FC<{ contactRef: React.RefObject<HTMLDivElement> }> = (
  contactRef
) => {
  return (
    <motion.div
      className="flex mx-auto  flex-row space-x-2 sm:space-x-6 lg:space-x-8 items-center mt-14 transition-all duration-200 ease-linear"
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <Link to="contact" onClick={() => scrollToRef(contactRef.contactRef)}>
        <Button type="primary">
          <span>Contact Me</span>
          <HiOutlineArrowRight className="group-hover:translate-x-1 transition scale-95 group-hover:scale-105" />
        </Button>
      </Link>
      <a href="/Resume.pdf" target="_blank">
        <Button type="secondary">
          <span>Get Resume</span>
          <HiDownload className="group-hover:translate-y-[0.5px] group-hover:translate-x-1 scale-95 group-hover:scale-110 transition" />
        </Button>
      </a>
    </motion.div>
  );
};

export default ButtonGroup;
