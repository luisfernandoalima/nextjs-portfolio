"use client";

import { useRef } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

// import { ThemeChanger } from "../ThemeChanger";
import { Language } from "../Language";

import "./Menu.scss";

import { ITexts } from "@/types/dictionary";

export const HamburguerMenu = ({
  dictionary,
  lang,
}: {
  dictionary: ITexts;
  lang: string;
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const inputMenuRef = useRef<HTMLInputElement | null>(null);

  const showMenu = () => {
    if (menuRef.current && inputMenuRef.current) {
      if (menuRef.current.style.right == "0px") {
        menuRef.current.style.right = "-500px";
        inputMenuRef.current.checked = false;
      } else {
        menuRef.current.style.right = "0px";
      }
    }
  };

  return (
    <>
      <div className="menuHamburguer">
        <input
          type="checkbox"
          id="checkbox-menu"
          ref={inputMenuRef}
          onChange={showMenu}
        />
        <label htmlFor="checkbox-menu" className="label-menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="menuMobile py-5" ref={menuRef}>
        <div className="menuHeader w-full  px-2 flex items-center justify-end">
          <IoClose className="text-4xl cursor-pointer" onClick={showMenu} />
        </div>
        <div className="menuBody p-2">
          <nav>
            <ul className="text-2xl">
              <li className="font-semibold">
                <Link href={`/${lang}/`}>{dictionary.home}</Link>
              </li>
              <li className="font-semibold">
                <Link href={`/${lang}/projects`}>{dictionary.projects}</Link>
              </li>
              <li>
                <Language />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
