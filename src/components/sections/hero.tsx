import { ArrowDownRight, Terminal } from "lucide-react";
import { GitHubIcon } from "@/components/icons/github-icon";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Hero() {
  const { badge, title, description, primaryCta, secondaryCta, terminal } =
    siteConfig.hero;

  return (
    <section className="relative">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 pb-20 pt-20 sm:px-8 sm:pt-28 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-12 lg:pb-28">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
              <span
                aria-hidden="true"
                className="size-1.5 animate-pulse rounded-full bg-brand shadow-[0_0_12px_var(--brand)]"
              />
              {badge}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-7 text-balance text-[clamp(2.75rem,8vw,6.25rem)] font-semibold leading-[1.03] tracking-tight">
              {title[0]}
              <span className="block text-gradient">{title[1]}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {description}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={primaryCta.href}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group h-11 gap-2 px-5 text-sm",
                )}
              >
                {primaryCta.label}
                <ArrowDownRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a
                href={secondaryCta.href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 gap-2 px-5 text-sm",
                )}
              >
                <GitHubIcon className="size-4" />
                {secondaryCta.label}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="w-full lg:max-w-md lg:justify-self-end">
          <div className="relative animate-float">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2rem] bg-brand/10 blur-3xl"
            />
            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/80 shadow-2xl shadow-black/5 backdrop-blur-xl dark:shadow-black/40">
              <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
                <span className="size-2.5 rounded-full bg-red-400/70" />
                <span className="size-2.5 rounded-full bg-amber-400/70" />
                <span className="size-2.5 rounded-full bg-emerald-400/70" />
                <span className="ml-2 font-mono text-[0.7rem] text-muted-foreground">
                  {terminal.path}
                </span>
                <Terminal className="ml-auto size-3.5 text-muted-foreground" />
              </div>
              <div className="space-y-2 p-5 font-mono text-[0.78rem] leading-6">
                {terminal.lines.map((line) => (
                  <p
                    key={line.text}
                    className={cn(
                      "flex gap-2",
                      line.kind === "success" && "text-brand",
                      line.kind === "output" && "text-muted-foreground",
                    )}
                  >
                    {line.kind === "command" ? (
                      <span className="text-brand">$</span>
                    ) : null}
                    <span
                      className={cn(
                        line.kind === "command" && "text-foreground",
                      )}
                    >
                      {line.text}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="border-y border-border/60 bg-muted/20">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-x-5 gap-y-2 px-5 py-4 sm:px-8">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted-foreground/60">
            Stack
          </span>
          {siteConfig.stack.map((item) => (
            <span
              key={item}
              className="font-mono text-[0.7rem] tracking-wide text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
