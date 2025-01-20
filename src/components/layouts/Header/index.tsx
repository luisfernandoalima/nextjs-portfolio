"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Navbar } from "../Navbar";
import { HamburguerMenu } from "../Navbar/Mobile";
import { PageUpButton } from "../PageUpButton";

import { TdictionaryMenu } from "@/types/dictionary";

import logo from "../../../../public/LF-logo.png";
import "./Header.scss";

// const Dictionary = typeof getDictionary

export const Header = ({
  dictionary,
  lang,
}: {
  dictionary: TdictionaryMenu;
  lang: string;
}) => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      if (headerRef.current) {
        const headerBottom = headerRef.current.getBoundingClientRect().bottom;
        setIsVisible(window.scrollY > headerBottom);
      }
    };

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  const pageUp = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <>
    <header className="flex items-center justify-between pr-4" ref={headerRef}>
      <Link href={`/${lang}/`}>
        <Image
          src={logo}
          alt="Minha logo"
          width={150}
          height={150}
          priority={true}
        />
      </Link>
      <Navbar dictionary={dictionary} lang={lang} />
      <HamburguerMenu dictionary={dictionary} lang={lang} />
    </header>
    <PageUpButton isVisible={isVisible} handleClick={pageUp}/>
    </>
  );
};
