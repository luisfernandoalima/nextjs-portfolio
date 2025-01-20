"use client";

import { useRef, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import Typed from "typed.js";
import Atropos from "atropos/react";
import "atropos/css";

import { LinkButton } from "../LinkButton";

import Image from "next/image";
import devIcon from "../../../../public/developer_icon.png";
import { IHero } from "@/types/dictionary";
import "./Hero.scss";

export const Hero = ({ dictionary }: { dictionary: IHero }) => {
  const elRef = useRef<HTMLHeadingElement | null>(null);
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    if (elRef.current) {
      const texts = {
        strings: [`${dictionary.function1}`, `${dictionary.function2}`],
        typeSpeed: 40,
        backSpeed: 50,
        loop: true,
        loopCount: Infinity,
      };

      typedRef.current = new Typed(elRef.current, texts);

      return () => {
        if (typedRef.current) {
          typedRef.current.destroy();
        }
      };
    }
  }, [dictionary.function1, dictionary.function2]);

  return (
    <section className="heroSection py-9 px-5">
      <div className="heroHeader">
        <span className="text-xl">{dictionary.greetings}</span>
        <h1 className="text-5xl font-semibold">Luis Fernando</h1>
        <div className="flex items-center justify-start text-2xl font-semibold">
          <h2 ref={elRef}></h2>
        </div>
        <div className="flex items-center justify-start gap-4 mt-3">
          <LinkButton link="" text="LinkedIn" customClass="Linkedin"><FaLinkedin /></LinkButton>
          <LinkButton link="" text="GitHub" customClass="Github"><FaGithub /></LinkButton>
        </div>
      </div>
      <Atropos shadow={false} highlight={false}>
        <Image src={devIcon} alt="" height={490} width={490} />
      </Atropos>
    </section>
  );
};
