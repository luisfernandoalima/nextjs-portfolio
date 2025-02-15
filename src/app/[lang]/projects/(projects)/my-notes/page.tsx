import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";

import { FaGithub } from "react-icons/fa";

import { mynotesImages } from "@/utils/projects/projectImages";
import { projectCardInfo } from "@/utils/projects/projectCards";

import { Container } from "@/components/layouts/Container";
import { ProjectMainInfo } from "@/components/Projects/MainInfo";
import { ProjectInfo } from "@/components/Projects/Info";

import { SwiperCarousel } from "@/components/Projects/SwiperCarousel";

import '../ProjectPage.scss'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - MyNotes"
}

export default async function MyNotes({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  const dictionary = await getDictionary(lang);

  console.log(lang);

  return (
    <>
      <Container>
        <section className="project_header">
          <SwiperCarousel images={mynotesImages} />
          <ProjectMainInfo
            title={dictionary.main.projects.mynotes.title}
            subtitle={dictionary.main.projects.mynotes.description}
            tagsText={dictionary.main.projects.tecnologies}
            badges={projectCardInfo.MyNotes.badge}
          />
        </section>
        <section className="project_description">
          <ProjectInfo text={dictionary.main.projects.mynotes.info}/>
          <button className="btn github_btn"><a href="https://github.com/luisfernandoalima/MyNotes" target="_blank" rel="noopener noreferrer"><span className="text-xl"><FaGithub/></span>{dictionary.main.projects.buttonGitHub}</a></button>
        </section>
      </Container>
    </>
  );
}
