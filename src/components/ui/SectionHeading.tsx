import { FC } from "react";
import { fadeInAnimation } from "../../utils/animation";
import { motion } from "framer-motion";

const SectionHeading: FC<{ children: string }> = ({ children }) => {
  return (
    <motion.h1
      className=" py-1 md:py-3 lg:py-5 sm:pt-8 sm:pb-4 text-[1.4rem] sm:text-[2rem] lg:text-[2rem] text-green-dark duration-150 font-mono text-center font-semibold"
      variants={fadeInAnimation}
      whileInView="animate"
      initial="initial"
      viewport={{ once: true }}
    >
      {children}{" "}
    </motion.h1>
  );
};

export default SectionHeading;
