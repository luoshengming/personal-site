# AGENTS.md

本仓库是 luoshengming 的个人网站，也是一个长期与 AI 协作、持续跟进最新前端技术的项目。修改代码前请先读完本文件。

## 技术栈

- Next.js 16（App Router、React Compiler、Turbopack）
- React 19 + TypeScript（严格模式）
- Tailwind CSS 4（通过 `@tailwindcss/turbopack` 接入，无 `tailwind.config`）
- shadcn/ui 4（`base-nova` 风格，基于 Base UI；组件源码在 `src/components/ui`）
- Motion for React（`motion/react`）负责动画
- next-themes 负责深浅色
- Geist 字体（`geist` npm 包，本地字体文件，构建时不访问 Google Fonts）
- Biome 负责格式化与 lint
- pnpm 作为包管理器

## 常用命令

```bash
pnpm dev        # 本地开发
pnpm build      # 静态导出到 out/
pnpm typecheck  # tsc --noEmit
pnpm lint       # biome check
pnpm format     # biome format --write
```

提交前至少跑一次 `pnpm typecheck` 和 `pnpm build`。

## 架构约束（重要）

- 本项目使用 `output: "export"`，只产出纯静态文件，部署在 GitHub Pages。
- **禁止**使用 API Routes、Server Actions、middleware、ISR、按请求渲染或任何服务端运行时能力。
- 所有页面必须在构建时完全预渲染；动态路由需要 `generateStaticParams`。
- `next/image` 已设置 `unoptimized: true`，不要依赖图片优化服务。
- `public/` 下的静态资源 URL 不会自动加 `basePath`；如需引用，请用 `process.env.NEXT_PUBLIC_BASE_PATH` 拼接（必要时封装 helper）。
- 预览部署在 `https://luoshengming.github.io/personal-site/`，`NEXT_PUBLIC_BASE_PATH` 由 CI 中的 `actions/configure-pages` 注入；正式域名切换后该值为空，代码不需要改。
- 不要提交 `public/CNAME`，除非确实要切换自定义域名（切换步骤见 README）。

## 代码组织

- `src/config/site.ts`：站点所有文案、导航、项目、关于内容。改内容优先改这里。
- `src/app/`：路由、布局、元数据、静态图标、robots、sitemap。
- `src/components/sections/`：首页各区块。
- `src/components/ui/`：shadcn 组件，按需通过 `pnpm dlx shadcn@latest add <component>` 添加。
- `src/components/`：站点级组件（header、footer、主题切换、滚动入场动画等）。
- `src/lib/utils.ts`：导出 `cn`（来自 `cn` 包）。

## 设计约定

- 深色优先，浅色模式完整可用；颜色使用 shadcn CSS 变量与 `src/app/globals.css` 中的品牌变量（`--brand`、`--gradient-*`、`--aurora-*`）。
- 字体：正文 `--font-sans`（Geist + 中文系统字体回退），代码 `--font-mono`。
- 动画保持克制，使用 `Reveal` 组件或 Motion；必须尊重 `prefers-reduced-motion`。
- 新增 shadcn 组件时保留 `base-nova` 风格，不要混用 Radix 版本组件。

## 提交与部署

- 使用 Conventional Commits 风格（`feat:`, `fix:`, `chore:`, `docs:`）。
- push 到 `main` 会自动触发 GitHub Actions，构建并部署到 GitHub Pages。
- 仓库是公开的；不要提交密钥、`.env`、本地路径或私有项目数据。

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
