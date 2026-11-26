import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { type Project, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

function ProjectCard({ project }: { project: Project }) {
  const card = (
    <Card
      className={cn(
        "relative h-full gap-0 bg-card/70 [--card-spacing:--spacing(6)] backdrop-blur-sm transition-all duration-300",
        project.href &&
          "group/card hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/5 hover:ring-brand/40 dark:hover:shadow-black/30",
      )}
    >
      {project.featured ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-brand/10 blur-3xl"
        />
      ) : null}

      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <Badge
            variant="outline"
            className="h-6 gap-1.5 px-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground"
          >
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-brand"
            />
            {project.status}
          </Badge>
          {project.href ? (
            <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-300 group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5" />
          ) : null}
        </div>

        <h3 className="mt-5 font-heading text-xl font-semibold tracking-tight sm:text-2xl">
          {project.name}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>
      </CardHeader>

      <CardContent className="mt-auto pt-6">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border/70 bg-muted/40 px-1.5 py-0.5 font-mono text-[0.65rem] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  if (!project.href) {
    return card;
  }

  return (
    <a
      href={project.href}
      target={project.external ? "_blank" : undefined}
      rel={project.external ? "noreferrer" : undefined}
      aria-label={`打开项目 ${project.name}`}
      className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
    >
      {card}
    </a>
  );
}

export function Work() {
  const { eyebrow, title, description, projects } = siteConfig.work;

  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-border/60 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((project: Project, index) => (
            <Reveal
              key={project.name}
              delay={index * 0.06}
              className={cn("h-full", project.featured && "md:col-span-2")}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
