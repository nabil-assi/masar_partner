import { notFound } from "next/navigation";
import {
  getAllPortfolioItems,
  getPortfolioItemBySlug,
} from "@/lib/services-data";
import { Hero } from "@/components/Website/portfolio/project/Hero";
import { ProjectInfo } from "@/components/Website/portfolio/project/ProjectInfo";
import { Overview } from "@/components/Website/portfolio/project/Overview";
import { ProjectCTA } from "@/components/Website/portfolio/project/CTA";

export function generateStaticParams() {
  return getAllPortfolioItems().map((item) => ({ slug: item.slug }));
}

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getPortfolioItemBySlug(slug);

  if (!project) return notFound();

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <Hero
        breadcrumbLabel={project.title}
        tag={project.tag}
        title={project.title}
        description={project.description}
      />
      <ProjectInfo
        image={project.image}
        gallery={project.gallery}
        client={project.client}
        category={project.category}
        year={project.year}
        duration={project.duration}
        tags={project.tags}
        link={project.link}
      />
      <Overview
        title={project.title}
        overview={project.overview}
        highlights={project.highlights}
      />{" "}
      <ProjectCTA
        serviceTitle={project.title}
        serviceSlug={project.slug}
      />
    </main>
  );
}
