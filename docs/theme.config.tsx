import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

// 站点 logo
const logo = (
  <>
    <img
      src="favicon.png"
      alt="JAVGO"
      style={{ width: '85%', height: 50, borderRadius: 16 }}
    />
    <span
      style={{
        marginLeft: '0',
        fontWeight: 900 ,
        fontSize: '35px',
        fontFamily: 'Georgia',
      }}
    >
        AVGO
    </span>
  </>
)

const config: DocsThemeConfig = {
  // 站点 Github 仓库地址
  project: {
    link: 'https://github.com/javgocn/javgo-docs'
  },
  // 文档的存储库 URL，用于生成 “编辑此页面” 链接和 “反馈” 链接
  docsRepositoryBase: 'https://github.com/shuding/nextra/tree/main/docs',
  // 让所有页面呈现相同的后缀< title>
  useNextSeoProps() {
    const { asPath } = useRouter()
    // 除了首页，其他页面的标题都是“页面标题 – 站点标题”
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – JAVGO'
      }
    }
  },
  // 站点 logo
  logo,
  // 站点 Header
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://nextra.site/og.jpeg'
        : `https://nextra.site/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Share Java full stack technology."
        />
        <meta
          name="og:description"
          content="Share Java full stack technology."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" />
        <meta
          name="og:title"
          content={title ? title + ' – JAVGO' : 'JAVGO'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="JAVGO" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  // 编辑页面提示词
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  // 提问提示词
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  // 侧边栏
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    // 默认菜单深度
    defaultMenuCollapseLevel: 2,
    // 允许展开/折叠侧边栏
    toggleButton: true
  },
  // 页脚
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="vercel.com homepage"
            href="/"
          >
            <span>Powered by</span>
            <img
              src="logo.png"
              alt="JAVGO"
              style={{ width: 100, height: 32, borderRadius: 16 }}
            />
          </a>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} JAVGO | <a target="_blank" href="https://beian.miit.gov.cn/">黔ICP备2023002021号</a>
        </p>
      </div>
    )
  },
  // 目录
  toc: {
    // 返回顶部按钮
    backToTop: true,
    // 开启后，TOC 会显示在页面右侧，滚动时会粘在页面上. 若关闭，TOC 会直接显示在页面侧边栏上.
    float: true
  }
}

export default config
