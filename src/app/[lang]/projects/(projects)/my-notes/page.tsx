import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";

import { mynotesImages } from "@/utils/projects/projectImages";
import { projectCardInfo } from "@/utils/projects/projectCards";

import { Container } from "@/components/layouts/Container";
import { ProjectCarousel } from "@/components/Projects/Carousel";
import { ProjectMainInfo } from "@/components/Projects/MainInfo";
import { ProjectInfo } from "@/components/Projects/Info";

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
          <ProjectCarousel images={mynotesImages} />
          <ProjectMainInfo
            title={dictionary.main.projects.mynotes.title}
            subtitle={dictionary.main.projects.mynotes.description}
            tagsText={dictionary.main.projects.tecnologies}
            badges={projectCardInfo.MyNotes.badge}
          />
        </section>
        <section>
          <ProjectInfo text={dictionary.main.projects.mynotes.info}/>
        </section>
      </Container>
    </>
  );
}
