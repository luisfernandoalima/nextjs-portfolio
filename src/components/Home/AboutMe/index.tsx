"use client";

import Image from "next/image";
import Atropos from "atropos/react";

import { IAboutMe } from "@/types/dictionary";
import developerImage from "../../../../public/developer.png";
import "./AboutMe.scss";

export const AboutMe = ({ dictionary }: { dictionary: IAboutMe }) => {
  return (
    <section className="aboutMeSection p-5">
      <div className="aboutMeDiv">
        <Atropos shadow={false} highlight={false}>
          <Image
            src={developerImage}
            alt="Developer"
            height={400}
            width={400}
          />
        </Atropos>
        <article>
          <h2 className="text-4xl font-semibold text-center md:text-start indent mb-3">
            {dictionary.title}
          </h2>
          {dictionary.text.map((text) => (
            <p key={text} className="text-lg md:text-xl indent-8 text-justify mb-2">
              {text}
            </p>
          ))}
        </article>
      </div>
    </section>
  );
};
