// docs/.vitepress/configs/math.ts
import type { DefaultTheme } from 'vitepress'

export const mathSidebar: DefaultTheme.Sidebar = {
  '/math/calculus/': [
    {
      text: '高等数学',
      link:'/math/calculus/main',
      items: [
        {
          text: '第一部分',
          link:'/math/calculus/part1',
          collapsed: true,
          items:[ 
            { text: '第一章：函数', link: '/math/calculus/01' },
            { text: '第二章：极限', link: '/math/calculus/02' },
          ]
        }
      ]
    }
  ],
  '/math/algebra/': [
    {
      text: '线性代数',
      link:'/math/algebra/linear algebra',
      items: [
        {
          text: '第一部分',
          link:'/math/algebra/part1',
          collapsed: true,
          items:[
            { text: '第一章：矩阵', link: '/math/algebra/01' },
            { text: '第二章：行列式', link: '/math/algebra/02' }
          ]
        }
      ]
    }
  ]
}