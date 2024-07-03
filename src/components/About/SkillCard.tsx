import React from "react";
import { motion } from "framer-motion";
import { indexedFadeInAnimation } from "../../utils/animation";

function SkillCard({
  children,
  index,
}: {
  children: string;
  index: number;
}): React.ReactNode {
  return (
    <motion.li
      key={index}
      className="py-2 px-5 text-xs sm:text-sm md:text-base md:py-2.5 md:px-7 lg:py-3 bg-navy-regular md:rounded-lg rounded-[4px] shadow-neu-sm text-slate-light skillcard-text-transition cursor-default hover:text-green-regular"
      variants={indexedFadeInAnimation}
      custom={index}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.li>
  );
}

export default SkillCard;
