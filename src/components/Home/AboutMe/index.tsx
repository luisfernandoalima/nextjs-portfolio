"use client";

import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

import Image from "next/image";
import Atropos from "atropos/react";

import { IAboutMe } from "@/types/dictionary";
import developerImage from "../../../../public/developer.png";
import "./AboutMe.scss";

export const AboutMe = ({ dictionary }: { dictionary: IAboutMe }) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"onscreen"}
      viewport={{ amount: 0.4, once: true }}
    >
      <section className="aboutMeSection p-5">
        <div className="aboutMeDiv">
          <motion.div variants={imgVariant}>
          <Atropos shadow={false} highlight={false}>
            <Image
              src={developerImage}
              alt="Developer"
              height={400}
              width={400}
            />
          </Atropos>
          </motion.div>
          <motion.div variants={textVariant}>
            <article>
              <h2 className="text-4xl font-semibold text-center md:text-start indent mb-3">
                {dictionary.title}
              </h2>
              {dictionary.text.map((text) => (
                <p
                  key={text}
                  className="text-lg md:text-xl indent-8 text-justify mb-2"
                >
                  {text}
                </p>
              ))}
            </article>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

const textVariant: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },

  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imgVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },

  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
