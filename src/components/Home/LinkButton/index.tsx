import React from "react";

import "./LinkButton.scss";

interface ILinkedButton {
  link: string;
  text: string;
  customClass: string;
  children: React.ReactNode;
}

export const LinkButton: React.FC<ILinkedButton> = ({
  link,
  text,
  customClass,
  children,
}) => {
  return (
    <a href={link} target="_blank" className="LinkButton">
      <button
        className={`flex items-center justify-center gap-1 px-2 py-1 text-xl font-semibold rounded-xl ${customClass}`}
      >
        {children} {text}
      </button>
    </a>
  );
};
