export interface ITexts {
  [key: string]: string;
}

export type TdictionaryMenu = {
  home: string;
  projects: string;
};

export interface IHero {
  greetings: string;
  function1: string;
  function2: string;
}

export type TdictionaryHero = {
  hero: IHero;
};

export type TdictionaryMain = {
  home: TdictionaryHero;
};

export interface IAboutMe {
  title: string;
  text: string[];
}
export interface IKnowledge {
  title: string;
}

interface Iformations {
  title: string;
  institution: string;
  startDate: string;
  endDate: string;
}
export interface IFormation {
  title: string;
  formations: Iformations[];
}
