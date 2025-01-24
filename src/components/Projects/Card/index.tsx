import Image, { StaticImageData } from "next/image";

import "./Card.scss";
import React from "react";

import { BadgeList } from "@/utils/badges";

type BadgeKey = keyof typeof BadgeList;

interface IProjectCard {
  image: StaticImageData;
  title: string;
  description: string;
  projectBadges: BadgeKey[];
  link: string;
}

export const ProjectCard: React.FC<IProjectCard> = ({
  image,
  title,
  description,
  projectBadges,
  link,
}) => {
  return (
    <div className={`card_body flex flex-col`}>
      <div>
        <Image src={image} alt={title} height={50} width={50} />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={`card_badges`}>
          {projectBadges.map((item) => {
            const badge = BadgeList[item];
            return (
              <li key={item}>
                {badge.icon} {badge.name}
              </li>
            );
          })}
        </div>
        <button>{link}</button>
      </div>
    </div>
  );
};
