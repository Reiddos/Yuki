// docs/.vitepress/configs/cs.ts
import type { DefaultTheme } from 'vitepress'

export const csSidebar: DefaultTheme.Sidebar = {
  '/cs/cs_intro/': [
    {
      text: 'CS导论',
      link:'/cs/cs_intro/intro',
      items: [
        {
          text: '第一部分',
          collapsed: true,
          items:[ { text: '第一章', link:'/cs/cs_intro/part1' } ]
        }
      ]
    }
  ],
  '/cs/cs61/': [
    {
      text: 'CS61',
      link:'/cs/cs61/intro',
      items: [
        {
          text: '第一部分',
          collapsed: true,
          items:[ { text: '第一章' } ]
        }
      ]
    }
  ]
}