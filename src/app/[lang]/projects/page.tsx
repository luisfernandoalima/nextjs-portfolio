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
      <h1 className="text-4xl font-semibold text-center mt-3 mb-3 w-full project_title">{dictionary.main.projects.title}</h1>

      <div className="cardsDiv">
        <ProjectCard
          image={projectCardInfo.MyNotes.thumbnail}
          dictionary={dictionary.main.projects.mynotes}
          link={`/${lang}/projects/${projectCardInfo.MyNotes.link}`}
          projectBadges={projectCardInfo.MyNotes.badge}
        />
        <ProjectCard
          image={projectCardInfo.firstPortfolio.thumbnail}
          dictionary={dictionary.main.projects.firstPortfolio}
          link={`/${lang}/projects/${projectCardInfo.firstPortfolio.link}`}
          projectBadges={projectCardInfo.firstPortfolio.badge}
        />
        <ProjectCard
          image={projectCardInfo.CyberBurguer.thumbnail}
          dictionary={dictionary.main.projects.CyberBurguer}
          link={`/${lang}/projects/${projectCardInfo.CyberBurguer.link}`}
          projectBadges={projectCardInfo.CyberBurguer.badge}
        />
      </div>
    </Container>
  );
}
