"use client";

import * as motion from "motion/react-client";
import React, { JSX, useState } from "react";
import type { Variants } from "motion/react";

import { FaHtml5 } from "react-icons/fa";

import { BadgeList } from "@/utils/knowledgeBadges";

import { IKnowledge } from "@/types/dictionary";

import "./Knowledge.scss";

export const Knowledge = ({ dictionary }: { dictionary: IKnowledge }) => {
  const [selectedIcon, setSelectedIcon] = useState<JSX.Element>(<FaHtml5 />);
  const [iconName, setIconName] = useState("HTML");
  const [iconClass, setIconClass] = useState("html");

  const handleFocus = (icon: JSX.Element, name: string, iconClass: string) => {
    setSelectedIcon(icon);
    setIconName(name);
    setIconClass(iconClass);
  };

  return (
      <section className="knowledgeSection py-9 px-5 flex items-center justify-center flex-col">
        <h2 className="text-4xl font-semibold">{dictionary.title}</h2>
        <div className="knowledgeIconDiv mt-6">
          <div className="iconDiv">
            {Object.values(BadgeList).map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={spanVariants}
                viewport={{ amount: 0.3, once: true }}
              >
                <span
                  className={item.class}
                  onMouseEnter={() =>
                    handleFocus(item.icon, item.name, item.class)
                  }
                >
                  {item.icon}
                </span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            variants={divVariants}
            viewport={{ amount: 0.3, once: true }}
          >
            <div className="mainInfo p-5 rounded-lg">
              <div className={`${iconClass} text-9xl`}>{selectedIcon}</div>
              <p className="text-black text-3xl font-medium">{iconName}</p>
            </div>
          </motion.div>
        </div>
      </section>
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

const divVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    }
  },
};
