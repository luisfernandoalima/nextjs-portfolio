"use client";

import React from "react";

interface IProjectInfo {
  text: IText[];
}

interface IText {
  type: string;
  title: string;
  text: string[];
}

export const ProjectInfo: React.FC<IProjectInfo> = ({ text }) => {
  return (
    <article>
      {text.map((item, index) => (
        <div key={index} className="mt-3 mb-3">
          <h3 className="text-2xl font-semibold">{item.title}</h3>
          {item.type === "list" ? (
            <ul className="ml-4">
              {item.text.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          ) : (
            <div>
              {item.text.map((line, i) => (
                <p key={i} className="indent-4 mt-2 mb-2">{line}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </article>
  );
};
