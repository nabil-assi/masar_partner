import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/lib/services-data";
import { Hero } from "@/components/Website/services/service/Hero";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return notFound();

  return (
    <main>
      <Hero
        breadcrumbLabel={service.title}
        heroTitle={service.heroTitle}
        heroDescription={service.heroDescription}
        stats={service.stats}
      />

     
    </main>
  );
}