import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { vdoingTheme } from 'vuepress-theme-vdoing-v2'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Zhao05博客',
  description: 'Zhao05的个人博客',

  // ✅ 显式导入主题函数，不再用字符串 'vdoing'
  theme: vdoingTheme({
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/article/' },
      { text: '类别', link: '/category/' },
      { text: '标签', link: '/tag/' },
      { text: '时间线', link: '/timeline/' },
    ],

    sidebar: 'structuring',
    logo: 'https://vuejs.press/images/hero.png',
    author: 'Zhao05',
  }),

  bundler: viteBundler(),
})