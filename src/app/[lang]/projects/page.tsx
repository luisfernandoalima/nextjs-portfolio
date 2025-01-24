import { Container } from "@/components/layouts/Container";
import { ProjectCard } from "@/components/Projects/Card";

import img from '../../../../public/icons/404.png'

export default function Projects() {
  return (
    <Container>
      <h1>Projects</h1>

      <ProjectCard image={img} title="Meu Projeto" description="Descrição do meu projeto" link=".." projectBadges={['html', 'css', 'tailwind']}/>

    </Container>
  );
}
