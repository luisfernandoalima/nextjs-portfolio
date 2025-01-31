import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

import { Container } from "@/components/layouts/Container";
import { ProjectCard } from "@/components/Projects/Card";
import { projectCardInfo } from "@/utils/projects/projectCards";

import "./Projects.scss";

export default async function Projects({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  const dictionary = await getDictionary(lang);

  return (
    <Container>
      <h1>{dictionary.main.projects.title}</h1>

      <div className="cardsDiv">
        <ProjectCard
          image={projectCardInfo.MyNotes.thumbnail}
          dictionary={dictionary.main.projects.mynotes}
          link={`/${lang}/mynotes`}
          projectBadges={projectCardInfo.MyNotes.badge}
        />
      </div>
    </Container>
  );
}
