import { projectsThumbs } from "./thumbnails";
import { BadgeList } from "../badges";
import { StaticImageData } from "next/image";

type TBadge = keyof typeof BadgeList

interface IProjectCard {
  thumbnail: StaticImageData;
  badge: TBadge[];
  link: string;
}

export const projectCardInfo: Record<string, IProjectCard> = {
  MyNotes: {
    thumbnail: projectsThumbs.mynotes,
    badge: ["html", "css", "sass", "bootstrap", "js", "node", "mongodb"],
    link: "mynotes",
  },
  firstPortfolio: {
    thumbnail: projectsThumbs.firstPortfolio,
    badge: ["html", "css", "bootstrap", "js"],
    link: "firstportfolio"
  },
  CyberBurguer: {
    thumbnail: projectsThumbs.cyberburguer,
    badge: ["html", "css", "bootstrap","js", "php", "java", "mysql"],
    link: "cyber"
  }
};
