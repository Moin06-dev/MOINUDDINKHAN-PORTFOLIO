import React from "react";

import SectionHeading from "../ui/SectionHeading";
import SkillCard from "./SkillCard";
import useInViewSection from "../../utils/useInViewSection";

const skillsList: string[] = [
  "AWS",
  "Bootstrap",
  "Chart.js",
  "Cloudflare",
  "CSS / HTML",
  "ExpressJS",
  "Figma",
  "Firebase",
  "Framer Motion",
  "Git / GitHub",
  "JavaScript (ES6+)",
  "MongoDB",
  "Mongoose",
  "MySQL",
  "Next.js",
  "NodeJS",
  "PostgreSQL",
  "Postman",
  "React Hook Form",
  "React Query",
  "ReactJS",
  "Recharts",
  "Redux Toolkit",
  "REST API",
  "Storybook",
  "Tailwind CSS",
  "TypeScript",
  "VS Code",
  "Webpack",
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
