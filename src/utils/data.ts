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
    title: "Homecooked Theme",
    description:
      "A high contrast theme for Visual Studio Code based in moonlight palette.",
    tags: ["VS Code", "JSON"],
    imageSrc: "/homecooked-ss.png",
    demoLink:
      "https://marketplace.visualstudio.com/items?itemName=MohammedAmaan.homecooked",
    githubLink: "https://github.com/amaanmohd047/homecooked-theme",
  },
  {
    title: "Manoramam",
    description:
      "A complete end-to-end solution for a boutique hotel. It contains, a user landing page, a hotel management app.",
    tags: [
      "React",
      "React Query",
      "React Router",
      "Supabase",
      "Styled Components",
    ],
    imageSrc: "/manoramam-ss.png",
    demoLink: "",
    githubLink: "",
  },
  {
    title: "Worldwise",
    description:
      "An app with an interactive map that keeps tracks of your travels. You can also add notes about the place you have visited.",
    tags: [
      "React",
      "React Router",
      "React Leaflet",
      "Geolocation API",
      "Context API",
      "CSS Modules",
    ],
    imageSrc: "/worldwise-ss.png",
    demoLink: "https://worldwise-vs.netlify.app/",
    githubLink: "https://github.com/amaanmohd047/worldwise",
  },
];
