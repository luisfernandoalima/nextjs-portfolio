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
        <div key={index}>
          <h3>{item.title}</h3>
          {item.type === "list" ? (
            <ul>
              {item.text.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          ) : (
            <div>
              {item.text.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </article>
  );
};
