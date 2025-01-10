import Link from "next/link";

import { TdictionaryMenu } from "@/types/dictionary";

import { Language } from '@/components/layouts/Navbar/Language'
import { ThemeChanger } from "./ThemeChanger";

export const Navbar = ({ dictionary, lang }: { dictionary: TdictionaryMenu, lang: string }) => {

  return (
    <nav>
      <ul className="flex items-center justify-center gap-4">
        <li>
          <Link href={`/${lang}`}>{dictionary.home}</Link>
        </li>
        <li>
          <Link href={`/${lang}/about`}>{dictionary.projects}</Link>
        </li>
        <li><Language/></li>
        <li><ThemeChanger /></li>
      </ul>
    </nav>
  );
};
