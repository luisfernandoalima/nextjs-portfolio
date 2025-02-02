import React from "react";
import { BadgeList } from "@/utils/badges";

type TBadgeKey = keyof typeof BadgeList;

interface IProjectMainInfo {
  title: string;
  subtitle: string;
  tagsText: string;
  badges: TBadgeKey[];
}

export const ProjectMainInfo: React.FC<IProjectMainInfo> = ({
  title,
  subtitle,
  tagsText,
  badges,
}) => {
  return (
    <div className="project_main_info p-5">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-3">{title}</h1>
      <h2 className="font-semibold text-md md:text-lg lg:text-xl mb-3 indent-4">{subtitle}</h2>
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
      <a href=""></a>
    </div>
  );
};
