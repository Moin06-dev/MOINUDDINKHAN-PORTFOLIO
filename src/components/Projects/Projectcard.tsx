import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectType } from "../../utils/data";
import ProjectDescription from "./ProjectDescription";
import ProjectImage from "./ProjectImage";

const Projectcard: React.FC<{ project: ProjectType }> = ({ project }) => {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.3 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.li
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <div className="group md:bg-navy-regular shadow-neu-sm md:pr-8 border border-navy-dark/5 rounded-lg text-left p-2 relative overflow-hidden mx-auto h-[20rem] md:h-[23rem] text-slate-regular no-underline lg:w-[40rem] md:w-[32rem]">
        <ProjectDescription project={project} />
        <ProjectImage project={project} />
      </div>
    </motion.li>
  );
};

export default Projectcard;
