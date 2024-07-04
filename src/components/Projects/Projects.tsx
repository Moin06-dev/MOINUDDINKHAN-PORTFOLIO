import React from "react";
import { motion } from "framer-motion";

import { projectData } from "../../utils/data";
import { fadeInAnimation } from "../../utils/animation";
import useInViewSection from "../../utils/useInViewSection";

import SectionHeading from "../ui/SectionHeading";
import Projectcard from "./Projectcard";
import Button from "../ui/Button";

export default function Projects() {
  const { ref } = useInViewSection("projects", 0.25);

  return (
    <div ref={ref}>
      <SectionHeading>Projects</SectionHeading>{" "}
      <ul className="flex flex-col gap-16 mt-8">
        {projectData.map((project, index) => (
          <React.Fragment key={index}>
            <Projectcard project={project} />
          </React.Fragment>
        ))}
      </ul>
      <div className="mt-10 mx-auto w-full flex justify-center items-center">
        {/* <a href="#"></a> */}
        <motion.span
  className="transition-all duration-200 ease-linear"
  onClick={() => window.open("https://github.com/Moin06-dev?tab=repositories", "_blank")}
  variants={fadeInAnimation}
  initial="initial"
  whileInView="animate"
  viewport={{
    once: true,
  }}
>
          <Button type="primary">Show more</Button>
        </motion.span>
      </div>
    </div>
  );
}
