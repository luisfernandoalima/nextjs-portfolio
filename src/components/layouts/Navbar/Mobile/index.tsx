"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";

import { ThemeChanger } from "../ThemeChanger";
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
  const pathname = usePathname()

  const menuRef = useRef<HTMLDivElement | null>(null);
  const inputMenuRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if(menuRef.current && inputMenuRef.current){
      menuRef.current.style.right = "-500px";
      inputMenuRef.current.checked = false;
    }
  }, [pathname])

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
      <div className="menuMobile py-5 flex flex-col justify-between items-center" ref={menuRef}>
        <div className="menuHeader w-full  px-2 flex items-center justify-end">
          <IoClose className="text-4xl cursor-pointer" onClick={showMenu} />
        </div>
        <div className="menuBody px-3 py-5 h-full w-full flex flex-col justify-start">
          <nav className="">
            <ul className="text-2xl flex flex-col gap-5">
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
        <div className="menuFooter">
        <ThemeChanger customId="mobileChanger" />
        </div>
      </div>
    </>
  );
};
