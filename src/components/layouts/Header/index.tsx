import Image from "next/image";
import Link from "next/link";

import { Navbar } from "../Navbar";

import './Header.scss'

export const Header = () => {
  return (
    <header className="flex items-center justify-between pr-4">
      <Link href={"/"}>
        <Image src={"/LF-logo.png"} alt="Minha logo" width={150} height={150} />
      </Link>
      <Navbar />
    </header>
  );
};
