import Image from "next/image";
import Link from "next/link";

import { Navbar } from "../Navbar";
import { HamburguerMenu } from "../Navbar/Mobile";

import { TdictionaryMenu } from "@/types/dictionary";





import logo from '../../../../public/LF-logo.png'
import './Header.scss'

// const Dictionary = typeof getDictionary

export const Header = ({dictionary, lang}: {dictionary: TdictionaryMenu, lang:string}) => {

  return (
    <header className="flex items-center justify-between pr-4">
      <Link href={`/${lang}/`}>
        <Image src={logo} alt="Minha logo" width={150} height={150} priority={true} />
      </Link>
      <Navbar dictionary={dictionary} lang={lang}/>
      <HamburguerMenu dictionary={dictionary} lang={lang}/>
    </header>
  );
};
