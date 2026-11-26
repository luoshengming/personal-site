import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col items-start justify-center px-5 py-24 sm:px-8">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
        404
      </p>
      <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        这里什么都没有。
      </h1>
      <p className="mt-4 max-w-md leading-7 text-muted-foreground">
        你访问的页面不存在，或者还没有被构建出来。
      </p>
      <Link
        href="/"
        className={cn(buttonVariants({ size: "lg" }), "mt-8 h-10 px-4")}
      >
        回到首页
      </Link>
    </div>
  );
}
