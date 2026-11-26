export type Project = {
  name: string;
  description: string;
  tags: readonly string[];
  status: string;
  href?: string;
  external?: boolean;
  featured?: boolean;
};

export const siteConfig = {
  name: "luoshengming",
  title: "luoshengming — 个人网站",
  description:
    "luoshengming 的个人网站：记录正在构建的项目、持续探索的技术，以及长期主义的实践。",
  url: "https://luoshengming.com",
  locale: "zh-CN",
  author: {
    name: "luoshengming",
    github: "https://github.com/luoshengming",
  },
  nav: [
    { label: "项目", href: "/#work" },
    { label: "关于", href: "/#about" },
  ],
  hero: {
    badge: "Personal site · 2026",
    title: ["把想法，", "写进现实。"],
    description:
      "你好，我是 luoshengming。开发者、长期主义者。这里是我的数字花园——记录正在构建的东西、正在学习的技术，以及一路上想明白的事。",
    primaryCta: { label: "看看我在做什么", href: "#work" },
    secondaryCta: { label: "GitHub", href: "https://github.com/luoshengming" },
    terminal: {
      path: "~/personal-site",
      lines: [
        { kind: "command", text: "pnpm dev" },
        { kind: "output", text: "▲ Next.js 16.4.6" },
        { kind: "output", text: "Local:   http://localhost:3000" },
        { kind: "output", text: "Network: http://192.168.1.10:3000" },
        { kind: "success", text: "✓ Ready in 1.2s" },
      ],
    },
  },
  stack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS 4",
    "Motion",
    "shadcn/ui",
  ],
  work: {
    eyebrow: "Work",
    title: "正在构建的东西",
    description:
      "一些持续迭代的项目和实验。骨架已经搭好，内容会随着时间不断长出来。",
    projects: [
      {
        name: "personal-site",
        description:
          "你正在浏览的站点。Next.js 16 + React 19 + Tailwind CSS 4，纯静态托管在 GitHub Pages 上，没有服务器。",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        status: "持续迭代",
        href: "https://github.com/luoshengming/personal-site",
        external: true,
        featured: true,
      },
      {
        name: "Vibe Coding",
        description: "通用应用开发平台，探索与 AI 协作构建应用的边界。",
        tags: ["AI", "Platform"],
        status: "构建中",
      },
      {
        name: "GitHub",
        description: "开源、实验，以及一些还没做完的小东西。",
        tags: ["Open source"],
        status: "持续更新",
        href: "https://github.com/luoshengming",
        external: true,
      },
    ],
  },
  about: {
    eyebrow: "About",
    title: "关于我",
    lead: "写代码，也写字。相信复利，喜欢把复杂的事情做简单。",
    paragraphs: [
      "我是 luoshengming，一名开发者。这个网站是我在互联网上的一块自留地，用来存放正在做的项目、正在读的东西，以及还没想清楚的念头。",
      "我关心的是：好的产品如何从一行行代码里长出来，人如何与 AI 一起把想法更快地变成现实，以及怎样在快速变化的技术里保持长期主义。",
    ],
    principles: [
      {
        title: "保持好奇",
        description: "对新技术保持敏感，对旧问题保持耐心。",
      },
      {
        title: "持续构建",
        description: "比起讨论，更相信亲手做出来的东西。",
      },
      {
        title: "长期主义",
        description: "做有时间复利的事，允许答案慢慢出现。",
      },
    ],
  },
  closing: {
    eyebrow: "Next",
    title: "这个网站会持续生长。",
    description: "去 GitHub 看看代码，或者只是随便逛逛。",
    cta: { label: "访问 GitHub", href: "https://github.com/luoshengming" },
  },
  footer: {
    note: "用 Next.js 16 与 Tailwind CSS 4 构建，托管在 GitHub Pages。",
  },
} as const;
