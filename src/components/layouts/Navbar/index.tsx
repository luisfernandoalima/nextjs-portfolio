"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import { IoLanguage } from "react-icons/io5";

import { TdictionaryMenu } from "@/types/dictionary";

export const Navbar = ({ dictionary }: { dictionary: TdictionaryMenu }) => {
  const [language, setLanguage] = useState("en");

  const pathName = usePathname();

  const redirectPathName = (locale: string) => {
    if (!pathName) return "/";

    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "pt" : "en"));
    console.log(language)
  };

  return (
    <ul className="flex items-center justify-center gap-4">
      <li>
        <Link href={"/"}>{dictionary.home}</Link>
      </li>
      <li>
        <Link href={"/projects"}>{dictionary.projects}</Link>
      </li>
      <li>
        <Link onClick={toggleLanguage} href={redirectPathName(language)}>
          <IoLanguage className="text-xl cursor-pointer" />
        </Link>
      </li>
      <li>Mudar tema</li>
    </ul>
  );
};
