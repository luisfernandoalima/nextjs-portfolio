import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";

import { FaGithub } from "react-icons/fa";

import { hubReactImages } from "@/utils/projects/projectImages";
import { projectCardInfo } from "@/utils/projects/projectCards";

import { Container } from "@/components/layouts/Container";
import { ProjectMainInfo } from "@/components/Projects/MainInfo";
import { ProjectInfo } from "@/components/Projects/Info";

import { SwiperCarousel } from "@/components/Projects/SwiperCarousel";

import '../ProjectPage.scss'

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
          <SwiperCarousel images={hubReactImages} />
          <ProjectMainInfo
            title={dictionary.main.projects.hub_projetos_react.title}
            subtitle={dictionary.main.projects.hub_projetos_react.description}
            tagsText={dictionary.main.projects.tecnologies}
            badges={projectCardInfo.HubProjetosReact.badge}
          />
        </section>
        <section className="project_description">
          <ProjectInfo text={dictionary.main.projects.hub_projetos_react.info}/>
          <button className="btn github_btn"><a href="https://github.com/luisfernandoalima/hub-de-projetos-react" target="_blank" rel="noopener noreferrer"><span className="text-xl"><FaGithub/></span>{dictionary.main.projects.buttonGitHub}</a></button>
        </section>
      </Container>
    </>
  );
}
