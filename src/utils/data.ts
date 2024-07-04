export type ProjectType = {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  demoLink: string;
  githubLink: string;
};

export type SectionName =
  | ""
  | "about"
  | "home"
  | "projects"
  | "experience"
  | "contact";

export const projectData: ProjectType[] = [
  {
    title: "StreetWear Ecommerce",
    description:
      "An E-commerce platform where Gen Z can shop for the latest and trendiest clothes, shoes, jackets, and more.",
    tags: [
      "React", 
      "React-router",
      "Tailwind",
      "nodejs",
      "JavaScript",
    ],
    imageSrc: "/homecooked-ss.png",
    demoLink:
      "https://ecommercewebstreet.netlify.app/",
    githubLink: "https://github.com/Moin06-dev/ecommerce-shopping-cart-main",
  },
  {
    title: "Tools'it",
    description:
      "Tools'it: Your one-stop platform for essential tools including text-to-speech, password generator, to-do list with CRUD operations, and more.",
    tags: [
      "React",
      "React Query",
      "Styled Components",
      "Tailwind"
    ],
    imageSrc: "/manoramam-ss.png",
    demoLink: "https://toolswebapps.netlify.app/",
    githubLink: "https://github.com/Moin06-dev/tools",
  },
  {
    title: "Image Search Web",
    description:
      "An Images web search platform that delivers HD photos from around the world based on your search queries, all in one place with the help of an API.",
    tags: [
     "Javascript",
     "Html/Css",
     "Context API",
     "CSS Modules",
    ],
    imageSrc: "/worldwise-ss.png",
    demoLink: "https://imagessearchweb.netlify.app/",
    githubLink: "https://github.com/Moin06-dev/ImageSearchWeb",
  },
];
