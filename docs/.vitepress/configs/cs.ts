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
  ],

  '/cs/RL/': [
    {
      text: '强化学习',
      //link:'/cs/RL/chapter1',
      items: [
        { text:"机器人学导论" , 
          items:[
          { text: 'kinetics', link: '/cs/RL/intro2robo' },
          { text: 'kinetics——jabobian', link: '/cs/RL/jacobian' },
          { text: 'dynamics', link: '/cs/RL/dynamics' },
          { text: 'contact', link: '/cs/RL/contact' },
        
        
          ]
        },
        { text: '第一章', link:'/cs/RL/chapter1' },
        { text: 'Q-Learning', link:'/cs/RL/QL' },
        { text: 'DQN', link:'/cs/RL/dqn' },
        { text: '术语表', link:'/cs/RL/term' },
        
      ]
    }
  ]

}