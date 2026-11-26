import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";

export function About() {
  const { eyebrow, title, lead, paragraphs, principles } = siteConfig.about;

  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border/60 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading index="02" eyebrow={eyebrow} title={title} />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <Reveal className="space-y-5">
            <p className="text-balance text-xl font-medium leading-8 tracking-tight sm:text-2xl sm:leading-9">
              {lead}
            </p>
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-pretty leading-7 text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="divide-y divide-border/70 overflow-hidden rounded-2xl border border-border/70 bg-card/50 backdrop-blur-sm">
              {principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className="flex gap-5 p-5 transition-colors hover:bg-muted/30 sm:p-6"
                >
                  <span className="pt-0.5 font-mono text-xs text-brand">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-medium">{principle.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
