# luoshengming.com

luoshengming 的个人网站。目标是长期维护、持续跟进最新前端技术，并与 AI 协作开发。

- 预览地址（GitHub Pages）：https://luoshengming.github.io/personal-site/
- 正式域名：https://luoshengming.com （域名切换完成前，旧站仍由 `navigation` 仓库提供）

## 技术栈

| 层 | 选型 | 版本 |
| --- | --- | --- |
| 框架 | Next.js（App Router、React Compiler、Turbopack） | 16.4.6 |
| UI | React | 19.3.0 |
| 语言 | TypeScript | 5.9.3 |
| 样式 | Tailwind CSS 4 | 4.3.3 |
| 组件 | shadcn/ui（`base-nova`，Base UI） | 4.23.1 |
| 动画 | Motion for React | 14.14.0 |
| 图标 | Lucide React | 1.81.0 |
| 主题 | next-themes | 0.4.6 |
| 字体 | Geist（`geist` npm 包，自托管） | 1.9.2 |
| 规范 | Biome | 2.4.2 |
| 包管理 | pnpm | 10.6.5 |

> TypeScript 使用 5.9.3，是因为当前 Next.js 16.4 的官方脚手架仍锁定 TS 5；等 Next 支持 TS 7 后再升级，不手动强改。

## 本地开发

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # 静态导出到 out/
pnpm typecheck
pnpm lint
```

要求 Node.js >= 20.9（推荐当前 LTS）。

## 目录结构

```text
src/
  app/                 # 路由、布局、元数据、robots、sitemap、icon
  components/
    sections/          # 首页各区块（Hero / Work / About / Closing）
    ui/                # shadcn/ui 组件
    site-header.tsx    # 顶部导航
    site-footer.tsx    # 页脚
    reveal.tsx         # Motion 滚动入场动画
  config/site.ts       # 站点全部文案与数据
  lib/utils.ts         # cn 工具
public/.nojekyll       # 关闭 GitHub Pages 的 Jekyll 处理
.github/workflows/     # GitHub Pages 部署工作流
```

改内容只需要编辑 `src/config/site.ts`。

## 部署

push 到 `main` 后，`.github/workflows/deploy.yml` 会：

1. 用 pnpm 安装依赖
2. 通过 `actions/configure-pages` 读取当前 Pages 的 `base_path`
3. 执行 `pnpm build` 生成 `out/`
4. 上传并部署到 GitHub Pages

首次使用前，需要在仓库 **Settings → Pages → Build and deployment** 中将 Source 设为 **GitHub Actions**。

### 切换到正式域名

1. 先在 `https://luoshengming.github.io/personal-site/` 验收新站。
2. 在 `navigation` 仓库的 Pages 设置中移除 `luoshengming.com` 自定义域名。
3. 在 `personal-site` 仓库的 Pages 设置中添加 `luoshengming.com`（并开启 Enforce HTTPS）。
4. DNS 无需改动（当前已指向 GitHub Pages）。
5. 重新触发部署：`configure-pages` 会返回空的 `base_path`，构建产物自动适配根路径，无需改代码。
6. 可选：归档 `navigation` 仓库。

## 静态导出约束

本项目是纯静态站点（`output: "export"`），不支持 API Routes、Server Actions、middleware、ISR 或按请求渲染。`next/image` 已关闭优化服务。需要后端能力时，可接 Cloudflare Workers 等外部服务，或迁移到 Vercel。

## 内容与设计

- 颜色和字体系统在 `src/app/globals.css`。
- 首页区块在 `src/components/sections/`。
- 新增 shadcn 组件：`pnpm dlx shadcn@latest add <component>`。
- 详细协作约定见 [AGENTS.md](./AGENTS.md)。
