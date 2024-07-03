import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import React from "react";
import { ProjectType } from "../../utils/data";

const ProjectDescription: React.FC<{ project: ProjectType }> = ({
  project,
}) => {
  return (
    <div className="z-10 p-3 sm:p-5 flex flex-col gap-4 pt-4 justify-between h-full md:max-w-[50%] ">
      <div className="space-y-2">
        <h2 className="text-[1.4rem] font-bold tracking-wide z-50 text-slate-lightest">
          {project.title}
        </h2>
        <p className="text-sm sm:text-sm md:text-xs lg:text-sm">
          {project.description}
        </p>
      </div>
      <div className="space-y-4">
        <ul className="flex flex-wrap gap-2 justify-start">
          {project?.tags?.map((tag, i) => (
            <li
              key={i}
              className="text-xs text-green-regular md:text-slate-regular py-1 px-2 bg-navy-dark rounded-md md:hover:text-green-regular"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex gap-4 px-2 justify-start items-center z-3">
          <div className="hover:text-green-regular transition-all w-auto h-auto duration-150 ease-in-expo font-mono hover:translate-y-[-2px] cursor-pointer py-3 z-10">
            {project.demoLink ? (
              <a href={project.demoLink} target="_blank">
                <FaExternalLinkAlt />
              </a>
            ) : (
              <span onClick={() => alert("Uploading soon...")}>
                <FaExternalLinkAlt />
              </span>
            )}
          </div>
          <div className="hover:text-green-regular transition-all w-auto h-auto duration-150 ease-in-expo font-mono hover:translate-y-[-2px] cursor-pointer py-3 z-10">
            {project.githubLink ? (
              <a href={project.githubLink} target="_blank">
                <FiGithub />
              </a>
            ) : (
              <span onClick={() => alert("Uploading soon...")}>
                <FiGithub />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
