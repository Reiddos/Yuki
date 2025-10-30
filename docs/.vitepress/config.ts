import { defineConfig } from 'vitepress'
import { mathSidebar } from './configs/math'
import { csSidebar } from './configs/cs'

import { pagefindPlugin } from 'vitepress-plugin-pagefind'


function chineseSearchOptimize(input: string) {
  const segmenter = new Intl.Segmenter('zh-CN', { granularity: 'word' })
  const result: string[] = []
  for (const it of segmenter.segment(input)) {
    if (it.isWordLike) {
      result.push(it.segment)
    }
  }
  return result.join(' ')
}





// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
//  GitHub 仓库名
  base: '/Yuki/', // <-- 这是为 GitHub Pages 准备的
  
  lastUpdated: true,
  title: "转生成为AI小子",
  description: "per aspra ad astra",
  lang: 'zh-CN',                         // 设置语言为中文
  head: [
      [ 'link', { rel: 'icon', href: '/Yuki/01.ico' } ],
  ],

  // 添加 'markdown' 配置来启用插件
  markdown: {
    math: true,
  },
  vite: {
      plugins: [
        pagefindPlugin({
          btnPlaceholder: '搜索',
          placeholder: '搜索文档',
          emptyText: '空空如也',
          heading: '共: {{searchResult}} 条结果',
          excludeSelector: ['img', 'a.header-anchor'],
          customSearchQuery: chineseSearchOptimize,
          filter(searchItem, idx, originArray) {
            console.log(searchItem)
            return !searchItem.route.includes('404')
          },
        })
      ]
    },
    // ^^^^ vite 配置结束 ^^^^



  themeConfig: {

    logo: '/01.ico',
    //页脚
    footer: {
      message: 'per aspera ad astra',
    },
    // 搜索
    // search: {
    //   provider: 'local'
    // },


    editLink: {
      pattern: 'https://github.com/Reiddos/Yuki/edit/main/docs/:path',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Reiddos/Yuki' }
    ],


    nav: [
      //首页
      { text: '首页', link: '/' },
      //修考
      { 
        text: '修考',
        items:[
          {
            text: '数学',
            items:[
              { text:'微积分',link:'/math/calculus/main'},
              { text: '线性代数', link: '/math/algebra/linear algebra' }
            ]
          }
        ]
      },
      

      //cs
      { 
        text: 'CS',
        items:[
          {
            items:[
              { text:'markdown',link:'/cs/markdown/markdown'},
              { text:'导论',link:'/cs/cs_intro/intro'},
              { text: 'CS61编程', link: '/cs/cs61/intro' }
            ]
          }
        ]
      },

    ],
    

    
    // 侧边栏
    sidebar: {
      ...mathSidebar,
      ...csSidebar,
    },

  }


})
