"use client";

import { useRef, useEffect } from "react";
import Typed from "typed.js";

import Image from "next/image";

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
    <section className="heroSection">
      <div>
        <span>{dictionary.greetings}</span>
        <h1>Luis Fernando Alves de Lima</h1>
        <div className="flex items-center justify-start">
            <h2 ref={elRef}></h2>
        </div>
      </div>
      <Image src={""} alt="" height={150} width={150} />
    </section>
  );
};
