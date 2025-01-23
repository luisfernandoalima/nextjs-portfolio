"use client";

import Atropos from "atropos/react";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import projectsImage from "../../../../public/icons/gerenciamento-de-projetos.png";
import { IHomeProjects } from "@/types/dictionary";

import "./HomeProjects.scss";

export const HomeProjects = ({
  dictionary,
  lang,
}: {
  dictionary: IHomeProjects;
  lang: string;
}) => {
  return (
    <section className="section_projects  py-9 px-5">
      <h2 className="text-4xl font-semibold text-center mb-2">
        {dictionary.title}
      </h2>
      <div className="gap-x-14 mt-5 mb-4">
        <motion.article
          className="text-3xl flex-col items-center justify-center text-center md:text-justify"
          variants={textVariant}
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{ amount: 0.3, once: true }}
        >
          <p className="mb-4">{dictionary.mainText}</p>
          <Link href={`/${lang}/projects`} className="py-2 rounded-lg">
            {dictionary.button}
          </Link>
        </motion.article>
        <motion.div
          variants={imageVariant}
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{ amount: 0.3, once: true }}
        >
          <Atropos shadow={false} highlight={false}>
            <Image
              src={projectsImage}
              alt="Imagem de Projetos"
              height={350}
              width={350}
            />
          </Atropos>
        </motion.div>
      </div>
    </section>
  );
};

const imageVariant: Variants = {
  offscreen: {
    x: 50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const textVariant: Variants = {
  offscreen: {
    x: -50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
