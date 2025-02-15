import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";

import { FaGithub } from "react-icons/fa";

import { hupProjetosImages } from "@/utils/projects/projectImages";
import { projectCardInfo } from "@/utils/projects/projectCards";

import { Container } from "@/components/layouts/Container";
import { ProjectMainInfo } from "@/components/Projects/MainInfo";
import { ProjectInfo } from "@/components/Projects/Info";

import { SwiperCarousel } from "@/components/Projects/SwiperCarousel";

import '../ProjectPage.scss'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Project Hub"
}

export default async function projectHub({
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
          <SwiperCarousel images={hupProjetosImages} />
          <ProjectMainInfo
            title={dictionary.main.projects.hub_projetos.title}
            subtitle={dictionary.main.projects.hub_projetos.description}
            tagsText={dictionary.main.projects.tecnologies}
            badges={projectCardInfo.FirstHubProjetos.badge}
            linkText={dictionary.main.projects.projectLink}
            projectLink={"https://luisfernandoalima.github.io/hub-de-projetos/"}
          />
        </section>
        <section className="project_description">
          <ProjectInfo text={dictionary.main.projects.hub_projetos.info}/>
          <button className="btn github_btn"><a href="https://github.com/luisfernandoalima/hub-de-projetos" target="_blank" rel="noopener noreferrer"><span className="text-xl"><FaGithub/></span>{dictionary.main.projects.buttonGitHub}</a></button>
        </section>
      </Container>
    </>
  );
}
