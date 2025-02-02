import { mynotesImages } from "@/utils/projects/projectImages";

import { Container } from "@/components/layouts/Container";
import { ProjectCarousel } from "@/components/Projects/Carousel";

export default function MyNotes() {
  return (
    <>
    <Container>
      <section className="project_header">
        <ProjectCarousel images={mynotesImages}/>
      </section>
      <section></section>
    </Container>
    </>
  );
}
