import { IoLanguage } from "react-icons/io5";

import { TdictionaryMenu } from "@/types/dictionary";

import Link from "next/link";

export const Navbar = ({dictionary} : {dictionary:TdictionaryMenu}) => {
  return (
    <ul className="flex items-center justify-center gap-4">
      <li>
        <Link href={"/"}>{dictionary.home}</Link>
      </li>
      <li>
        <Link href={"/projects"}>{dictionary.projects}</Link>
      </li>
      <li><IoLanguage /></li>
      <li>Mudar tema</li>
    </ul>
  );
};
