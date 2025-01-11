import Link from "next/link";

import { TdictionaryMenu } from "@/types/dictionary";

import { Language } from '@/components/layouts/Navbar/Language'
import { ThemeChanger } from "./ThemeChanger";

import styles from './Navbar.module.scss'

export const Navbar = ({ dictionary, lang }: { dictionary: TdictionaryMenu, lang: string }) => {

  return (
    <nav className={styles.horizontalNavigation}>
      <ul className="flex items-center justify-center gap-4">
        <li className="font-semibold">
          <Link href={`/${lang}`}>{dictionary.home}</Link>
        </li>
        <li className="font-semibold">
          <Link href={`/${lang}/about`}>{dictionary.projects}</Link>
        </li>
        <li><Language/></li>
        <li><ThemeChanger customId="desktopChanger"/></li>
      </ul>
    </nav>
  );
};
