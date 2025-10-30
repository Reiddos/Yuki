import { defineConfig } from 'vitepress'
// import { mathSidebar } from './configs/math'
// import { csSidebar } from './configs/cs'


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




  themeConfig: {
    //页脚
    footer: {
      message: 'per aspera ad astra',
    },
    //搜索
    search: {
      provider: 'local'
    },


    editLink: {
      pattern: 'https://github.com/Reiddos/Yuki/edit/main/docs/:path',
    },



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
              { text:'markdown',link:'/cs/md/md'},
              { text:'导论',link:'/cs/cs_intro/intro'},
              { text: 'CS61编程', link: '/cs/cs61/intro' }
            ]
          }
        ]
      },

    ],
    



    
    // 侧边栏
    sidebar: {
      // 当用户在 /math/ 目录下时，显示这个侧边栏
      '/math/calculus/': [
        {
          text: '高等数学', // 章节标题
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

      
      //线代
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
                { text: '第一章：矩阵',
                  link: '/math/algebra/01',

                },
                { text: '第二章：行列式', link: '/math/algebra/02' }
              ]
            }
          ]
        }
      ],
      

      '/cs/cs_intro/': [
        {
          text: 'CS导论',
          link:'/cs/cs_intro/intro',
          items: [
            {
              text: '第一部分',
              //link:'/cs/cs_intro/intro',
              collapsed: true,
              items:[
                { text: '第一章',
                  //link: '/math/algebra/01',

                },
                //{ text: '第二章', link: '/math/algebra/02' }
              ]
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
              //link:'/cs/cs_intro/intro',
              collapsed: true,
              items:[
                { text: '第一章',
                  //link: '/math/algebra/01',

                },
                //{ text: '第二章', link: '/math/algebra/02' }
              ]
            }
          ]
        }
      ],



    }




  }



})
