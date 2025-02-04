import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { IProjectCardDictionary } from "@/types/dictionary";
import { BadgeList } from "@/utils/badges";

import "./Card.scss";
type BadgeKey = keyof typeof BadgeList;

interface IProjectCard {
  image: StaticImageData;
  dictionary: IProjectCardDictionary,
  projectBadges: BadgeKey[];
  link: string;
}

export const ProjectCard: React.FC<IProjectCard> = ({
  image,
  dictionary,
  projectBadges,
  link,
}) => {
  return (
    <div className={`card_body flex flex-col`}>
      <div className="card_thumb">
        <Image src={image} alt={dictionary.title} height={200} width={200} />
      </div>
      <div className='card_info mt-1'>
        <h1 className="text-xl font-medium">{dictionary.title}</h1>
        <p className="text-sm">{dictionary.description}</p>
        <div className={`card_badges`}>
          <ul className="list-disc mt-1">
            {projectBadges.map((item) => {
              const badge = BadgeList[item];
              return (
                <li key={item} className="flex items-center gap-1">
                  <span>{badge.icon}</span>
                  {badge.name}
                </li>
              );
            })}
          </ul>
        </div>
        <Link href={`${link}`} className="cardBtn text-lg font-medium">Visualizar</Link>
      </div>
    </div>
  );
};
