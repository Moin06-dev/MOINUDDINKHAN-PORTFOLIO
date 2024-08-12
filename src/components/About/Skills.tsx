import React from "react";

import SectionHeading from "../ui/SectionHeading";
import SkillCard from "./SkillCard";
import useInViewSection from "../../utils/useInViewSection";

const skillsList: string[] = [
  "HTML / CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "Redux / Redux Toolkit",
  "React Query",
  "NextJS",
  "TailwindCSS",
  "Figma",
  "DaisyUI",
  "Styled Components",
  "Framer Motion",
  "Bootstrap",
  "Python",
  "Git / GitHub",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "Mongoose",
  "PostgreSQL",
  "MySQL",
  "PHP",
  "AWS",
  "Firebase",
  "Postman API",
  "Linux",
  "Eclipse IDE",
  "VS Code",
  "Android Studio",
  "Flutter",
  "Shopify",
  "Odoo",
  "Angular",
  "Anaconda",
  "Blockchain",
  "Cloud Computing",
  "Ganache IDE",
  "Java",
  "Java Spring Boot",
  "Jupyter Notebook",
  "Kubernetes",
  "Mobile Computing",
  "Next Auth",
  "OAuth",
  "Photoshop",
  "Wireshark",
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
