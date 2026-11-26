import { GitHubIcon } from "@/components/icons/github-icon";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Closing() {
  const { eyebrow, title, description, cta } = siteConfig.closing;

  return (
    <section className="border-t border-border/60 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 px-6 py-12 backdrop-blur-sm sm:px-10 sm:py-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-brand/10 blur-3xl"
            />
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
              {eyebrow}
            </p>
            <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-lg leading-7 text-muted-foreground">
              {description}
            </p>
            <a
              href={cta.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 h-11 gap-2 px-5 text-sm",
              )}
            >
              <GitHubIcon className="size-4" />
              {cta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
