import { ProjectType } from "../../utils/data";

const ProjectImage = ({ project }: { project: ProjectType }) => {
  return (
    <div className="opacity-25 md:opacity-100 h-full z-1">
      <a className="h-full w-full bg-green-regular align-middle absolute z-1 before:h-full before:bg-navy-lightest before:z-3 before:top-0 before:left-0 before:absolute before:w-full before:z-0 before:mix-blend-screen top-0 left-0 md:before:hidden md:bg-transparent md:top-12 md:left-[50%]">
        <img
          src={project.imageSrc}
          alt={`image of ${project.title}`}
          className="brightness-50 object-cover h-full md:h-auto rounded-lg mix-blend-multiply max-w-[36rem] md:object-scale-down md:mix-blend-normal md:grayscale-0 md:brightness-100 md:opacity-100 md:group-hover:scale-105 group-hover:scale-110 md:group-hover:-translate-x-3 md:group-hover:translate-y-3 md:group-hover:rotate-2 transition-all duration-300 ease-in-expo"
        />
      </a>
    </div>
  );
};

export default ProjectImage;
