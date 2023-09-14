import hmm from "../images/AAPLresults_plot.png";

type ProjectsType = {
  title: string;
  description: string;
  skills: string[];
  image: string;
  links: Record<"github", string>;
};

export default [
  {
    title: "Robel Araia's Portfolio Website",
    description:
      "My portfolio website serves as an online showcase of my skills, projects, and achievements in the field of web development. It's a dynamic platform where I present my professional profile and provide details about my work experience, projects, and qualifications.",
    skills: [
      "Web Development",
      "Version Control",
      "Content Creation",
      "Project Management",
      "Command Line (Git Bash)",
      "TypeScript"
    ],
    image: hmm,
    links: {
      github: "https://github.com/RobelAraia/Portfolio-2.git",
    },
  },
] as ProjectsType[];
