# CLAUDE.md

项目约定见 [AGENTS.md](./AGENTS.md)。

常用命令：

```bash
pnpm dev
pnpm build
pnpm typecheck
pnpm lint
```

关键约束：本项目使用 `output: "export"` 纯静态导出到 GitHub Pages，不能使用 API Routes、Server Actions、ISR 或任何服务端运行时特性；站点内容集中在 `src/config/site.ts`。
