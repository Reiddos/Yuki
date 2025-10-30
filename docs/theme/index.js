import DefaultTheme from 'vitepress/theme'
import './custom.css'
import NotFound from './notfound.vue' // <-- 确保这里是 './NotFound.vue'

export default {
  ...DefaultTheme,
  NotFound: NotFound, // <-- 确保你覆盖了 NotFound
}
