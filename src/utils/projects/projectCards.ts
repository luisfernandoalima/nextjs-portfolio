import { projectsThumbs } from "./thumbnails";
import { BadgeList } from "../badges";
import { StaticImageData } from "next/image";

type TBadge = keyof typeof BadgeList;

interface IProjectCard {
  thumbnail: StaticImageData;
  badge: TBadge[];
  link: string;
}

export const projectCardInfo: Record<string, IProjectCard> = {
  taskly: {
    thumbnail: projectsThumbs.taskly,
    badge: ["html", "css", "js", "ts", "react", "tailwind", "vite", "node", "mongodb"],
    link:"taskly"
  },
  HubProjetosReact: {
    thumbnail: projectsThumbs.hubReact,
    badge: ["html", "css", "sass", "js", "ts", "react", "tailwind", "vite"],
    link: "HubDeProjetos-react",
  },
  MyNotes: {
    thumbnail: projectsThumbs.mynotes,
    badge: ["html", "css", "sass", "bootstrap", "js", "node", "mongodb"],
    link: "my-notes",
  },
  FirstHubProjetos: {
    thumbnail: projectsThumbs.hubProjetos,
    badge: ["html", "css", "js", "bootstrap"],
    link: "HubDeProjetos",
  },
  firstPortfolio: {
    thumbnail: projectsThumbs.firstPortfolio,
    badge: ["html", "css", "bootstrap", "js"],
    link: "firstportfolio",
  },
  CyberBurguer: {
    thumbnail: projectsThumbs.cyberburguer,
    badge: ["html", "css", "bootstrap", "js", "php", "java", "mysql"],
    link: "cyberburguer",
  },
};
