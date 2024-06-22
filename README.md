# JAVGO

基于 [Nextra](https://nextra.site/docs) + [Next.js](https://nextjs.org/) 搭建的技术博客，感兴趣的欢迎 Fork + Star。

## 开发

### 安装依赖

仓库使用 [PNPM Workspaces](https://pnpm.io/workspaces) 和 [Turborepo](https://github.com/vercel/turborepo)。要安装依赖项，请在项目根目录运行：
```bash
pnpm install
```

### 构建 Nextra 核心

```bash
cd packages/nextra
pnpm build
```

## 启动站点

```bash
cd docs
pnpm dev
```

## 部署
...