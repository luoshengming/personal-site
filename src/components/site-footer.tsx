import { GitHubIcon } from "@/components/icons/github-icon";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <span className="text-muted-foreground/80">
            {siteConfig.footer.note}
          </span>
          <a
            href={siteConfig.author.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex w-fit items-center gap-2 rounded-md transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
          >
            <GitHubIcon className="size-4" />
            <span className="sm:hidden">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
