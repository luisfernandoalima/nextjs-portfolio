'use client'
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

import { IFormation } from "@/types/dictionary";

import "./Formation.scss";

export const Formation = ({ dictionary }: { dictionary: IFormation }) => {
  const formationInfo = dictionary.formations;

  return (
    <motion.div
      initial="offscreen"
      whileInView={"onscreen"}
      viewport={{ amount: 0.3, once: true }}
    >
      <section className="experienceSection p-5 flex items-center justify-center flex-col">
        <h2 className="text-4xl font-semibold">{dictionary.title}</h2>

        <div className="mt-4 flex justify-center items-center gap-6 flex-col">
          {formationInfo.map((info, index) => (
            <motion.div
              key={index}
              custom={index}
              initial={"hidden"}
              whileInView={"visible"}
              variants={divVariant}
              viewport={{ amount: 0.3, once: true }}
              className="formationCard p-3 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold">{info.title}</h3>
              <hr className="mt-2 mb-2" />
              <p className="font-semibold">{info.institution}</p>
              <span>
                {info.startDate} - {info.endDate}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

const divVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      easy: "easyOut",
    },
  }),
};
