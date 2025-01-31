import { RiNextjsFill } from "react-icons/ri";
import {
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNode,
  FaGit,
  FaGithub,
  FaPhp,
  FaJava
} from "react-icons/fa";

export const BadgeList = {
  html: {
    name: "HTML",
    class: "html",
    icon: <FaHtml5 />,
  },
  css: {
    name: "CSS",
    class: "css",
    icon: <FaCss3 />,
  },
  sass: {
    name: "SASS",
    class: "scss",
    icon: <FaSass />,
  },
  js: {
    name: "JavaScript",
    class: "js",
    icon: <FaJs />,
  },
  ts: {
    name: "TypeScript",
    class: "ts",
    icon: <SiTypescript />,
  },
  react: {
    name: "React JS",
    class: "react",
    icon: <FaReact />,
  },
  next: {
    name: "Next JS",
    class: "next",
    icon: <RiNextjsFill />,
  },
  bootstrap: {
    name: "Bootstrap",
    class: "bootstrap",
    icon: <FaBootstrap />,
  },
  tailwind: {
    name: "TailwindCSS",
    class: "tailwind",
    icon: <SiTailwindcss />,
  },
  node: {
    name: "NodeJS",
    class: "node",
    icon: <FaNode />,
  },
  mysql: {
    name: "MySQL",
    class: "mysql",
    icon: <SiMysql />,
  },
  mongodb: {
    name: "MongoDB",
    class: "mongo",
    icon: <SiMongodb />,
  },
  vite: {
    name: "Vite",
    class: "vite",
    icon: <SiVite />,
  },
  git: {
    name: "Git",
    class: "git",
    icon: <FaGit />,
  },
  github: {
    name: "GitHub",
    class: "github",
    icon: <FaGithub />,
  },
  php: {
    name: "PHP",
    class: 'php',
    icon: <FaPhp/>
  },
  java: {
    name: "Java",
    class: "java",
    icon: <FaJava/>
  }
};
