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
} from "react-icons/fa";

import { IExperience } from "@/types/dictionary";

import "./Experience.scss";

export const Experience = ({dictionary}:{dictionary: IExperience}) => {
  return (
    <section className="experienceSection p-5 flex items-center justify-center flex-col">
      <h2 className="text-4xl font-semibold">{dictionary.title}</h2>
      <div className="iconDiv mt-4">
        <span className="html">
          <FaHtml5 />
        </span>
        <span className="css">
          <FaCss3 />
        </span>
        <span className="scss">
          <FaSass />
        </span>
        <span className="js">
          <FaJs />
        </span>
        <span className="ts">
          <SiTypescript />
        </span>
        <span className="react">
          <FaReact />
        </span>
        <span className="next">
          <RiNextjsFill />
        </span>
        <span className="bootstrap">
          <FaBootstrap />
        </span>
        <span className="tailwind">
          <SiTailwindcss />
        </span>
        <span className="node">
          <FaNode />
        </span>
        <span className="mysql">
          <SiMysql />
        </span>
        <span className="mongo">
          <SiMongodb />
        </span>
        <span className="vite">
          <SiVite />
        </span>
        <span className="git">
          <FaGit />
        </span>
        <span className="github">
          <FaGithub />
        </span>
      </div>
    </section>
  );
};
