import React from "react";
import { BadgeList } from "@/utils/badges";
import { FaLink } from "react-icons/fa";

type TBadgeKey = keyof typeof BadgeList;

interface IProjectMainInfo {
  title: string;
  subtitle: string;
  tagsText: string;
  badges: TBadgeKey[];
  projectLink?: string;
  linkText?: string;
}

export const ProjectMainInfo: React.FC<IProjectMainInfo> = ({
  title,
  subtitle,
  tagsText,
  badges,
  projectLink,
  linkText,
}) => {
  return (
    <div className="project_main_info p-5 w-full">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3">
        {title}
      </h1>
      <h2 className="font-semibold text-md md:text-lg lg:text-xl mb-3 indent-4">
        {subtitle}
      </h2>
      <p className="text-xl">{tagsText}</p>
      <ul className=" mt-3 mb-2 ml-2">
        {badges.map((item) => {
          const badge = BadgeList[item];
          return (
            <li key={item} className="flex items-center gap-1">
              <span>{badge.icon}</span>
              {badge.name}
            </li>
          );
        })}
      </ul>
      {projectLink && (
        <button className="btn link_btn">
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <span>
              <FaLink />
            </span>
            {linkText}
          </a>
        </button>
      )}
    </div>
  );
};
