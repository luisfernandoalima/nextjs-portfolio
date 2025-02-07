import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";

import { FaGithub } from "react-icons/fa";

import { firstPortfolioImage } from "@/utils/projects/projectImages";
import { projectCardInfo } from "@/utils/projects/projectCards";

import { Container } from "@/components/layouts/Container";
import { ProjectMainInfo } from "@/components/Projects/MainInfo";
import { ProjectInfo } from "@/components/Projects/Info";

import { SwiperCarousel } from "@/components/Projects/SwiperCarousel";

import "../ProjectPage.scss";

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
          <SwiperCarousel images={firstPortfolioImage} />
          <div className="w-full">
            <ProjectMainInfo
              title={dictionary.main.projects.firstPortfolio.title}
              subtitle={dictionary.main.projects.firstPortfolio.description}
              tagsText={dictionary.main.projects.tecnologies}
              badges={projectCardInfo.firstPortfolio.badge}
              projectLink="https://luisfernandoalima.github.io/portfolio/"
              linkText={dictionary.main.projects.projectLink}
            />
          </div>
        </section>
        <section className="project_description">
          <ProjectInfo text={dictionary.main.projects.firstPortfolio.info} />
          <button className="btn github_btn">
            <a
              href="https://github.com/luisfernandoalima/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-xl">
                <FaGithub />
              </span>
              {dictionary.main.projects.buttonGitHub}
            </a>
          </button>
        </section>
      </Container>
    </>
  );
}
