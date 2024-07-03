import React from "react";

import SectionHeading from "../ui/SectionHeading";
import SkillCard from "./SkillCard";
import useInViewSection from "../../utils/useInViewSection";

const skillsList: string[] = [
  "HTML / CSS",
  "Javascript",
  "Typescript",
  "ReactJS",
  "Redux / Redux Toolkit",
  "React Query",
  "NextJS",
  "TailwindCSS",
  "DaisyUI",
  "Styled Components",
  "Framer Motion",
  "Python",
  "Git",
  "NodeJS",
  "ExpressJS",
  "Zod",
  "MongoDB",
  "Mongoose",
  "Prisma",
  "PostgreSQL",
  "MySQL",
  "Php",
  "C++"
  
];

const Skills: React.FC = () => {
  const { ref } = useInViewSection("about", 0.75);

  return (
    <article className="mt-20" ref={ref}>
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap gap-4 lg:gap-6 justify-center items-center mt-8">
        {skillsList.map((skill, index) => (
          <SkillCard key={index} index={index + 5}>
            {skill}
          </SkillCard>
        ))}
      </ul>
    </article>
  );
};

export default Skills;
