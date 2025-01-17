"use client";

import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

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

import { IKnowledge } from "@/types/dictionary";

import "./Knowledge.scss";

export const Knowledge = ({ dictionary }: { dictionary: IKnowledge }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView={"onscreen"}
      viewport={{ amount: 0.3, once: true }}
    >
      <section className="knowledgeSection p-5 flex items-center justify-center flex-col">
        <h2 className="text-4xl font-semibold">{dictionary.title}</h2>
        <div className="iconDiv mt-4">
          {IconsList.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={spanVariants}
              viewport={{ amount: 0.3, once: true }}
            >
              <span className={item.class}>
              {item.icon}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

const spanVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const IconsList = [
  {
    class: "html",
    icon: <FaHtml5 />,
  },
  {
    class: "css",
    icon: <FaCss3 />,
  },
  {
    class: "scss",
    icon: <FaSass />,
  },
  {
    class: "js",
    icon: <FaJs />,
  },
  {
    class: "ts",
    icon: <SiTypescript />,
  },
  {
    class: "react",
    icon: <FaReact />,
  },
  {
    class: "next",
    icon: <RiNextjsFill />,
  },
  {
    class: "bootstrap",
    icon: <FaBootstrap />,
  },
  {
    class: "tailwind",
    icon: <SiTailwindcss />,
  },
  {
    class: "node",
    icon: <FaNode />,
  },
  {
    class: "mysql",
    icon: <SiMysql />,
  },
  {
    class: "mongo",
    icon: <SiMongodb />,
  },
  {
    class: "vite",
    icon: <SiVite />,
  },
  {
    class: "git",
    icon: <FaGit />,
  },
  {
    class: "github",
    icon: <FaGithub />,
  },
];
