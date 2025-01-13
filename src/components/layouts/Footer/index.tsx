import { FaLinkedin, FaGithub } from "react-icons/fa";

import { ITexts } from "@/types/dictionary";

import './Footer.scss'

export const Footer = ({dictionary}: {dictionary:ITexts}) => {
  return (
    <footer className="mainFooter px-4 py-2">
      <div>
        <p>{dictionary.developer}:</p>
        <p>Luis Fernando Alves de Lima</p>
        <p>lima.luisfernando.dev@gmail.com</p>
      </div>
      <div className="flex items-center justify-center gap-4 text-3xl">
        <a href="" target="_blank">
          <FaLinkedin />
        </a>
        <a href="" target="_blank">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};
