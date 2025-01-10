import Image from "next/image";
import Link from "next/link";

import { Navbar } from "../Navbar";

import { TdictionaryMenu } from "@/types/dictionary";





import logo from '../../../../public/LF-logo.png'
import './Header.scss'

// const Dictionary = typeof getDictionary

export const Header = ({dictionary}: {dictionary: TdictionaryMenu}) => {

  return (
    <header className="flex items-center justify-between pr-4">
      <Link href={"/"}>
        <Image src={logo} alt="Minha logo" width={150} height={150} priority={true} />
      </Link>
      <Navbar dictionary={dictionary}/>
    </header>
  );
};
