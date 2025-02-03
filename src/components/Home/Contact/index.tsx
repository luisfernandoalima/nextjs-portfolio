"use client";

import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import Atropos from "atropos/react";
import "atropos/css";

import Image from "next/image";

import { IContact } from "@/types/dictionary";

import imgContact from "../../../../public/icons/contatos.png";
import "./Contact.scss";
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";

export const Contact = ({ dictionary }: { dictionary: IContact }) => {
  return (
    <section className="contactSection py-9 px-5">
      <h2 className="text-4xl font-semibold text-center mb-2">
        {dictionary.title}
      </h2>
      <div className="iconsDiv mt-4 mb-4">
        <div className="buttonArea">
          {contactsLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.link}
              target="_blank"
              variants={buttonsVariants}
              custom={index}
              initial="hidden"
              whileInView={"onscreen"}
              viewport={{ amount: 0.3, once: true }}
            >
              <button className={link.class}>
                {link.icon}
                <span>{link.name}</span>
              </button>
            </motion.a>
          ))}
        </div>
        <motion.div
          variants={imageVariant}
          className="imgDiv"
          initial="hidden"
          whileInView={"onscreen"}
          viewport={{ amount: 0.3, once: true }}
        >
          <Atropos shadow={false} highlight={false}>
            <Image
              src={imgContact}
              alt="Contact Icon"
              height={300}
              width={300}
            />
          </Atropos>
        </motion.div>
      </div>
    </section>
  );
};

const imageVariant: Variants = {
  hidden: {
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

const buttonsVariants: Variants = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  onscreen: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const contactsLinks = [
  {
    link: "https://github.com/luisfernandoalima",
    name: "GitHub",
    class: "github",
    icon: <FaGithub />,
  },
  {
    link: "mailto:lima.luisfernando.dev@gmail.com",
    name: "E-mail",
    class: "gmail",
    icon: <FaGoogle />,
  },
  {
    link: "https://www.linkedin.com/in/luis-fernando-a-43aaa2230/",
    name: "LinkedIn",
    class: "linkedin",
    icon: <FaLinkedin />,
  },
];
