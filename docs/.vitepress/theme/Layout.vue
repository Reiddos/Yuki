<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #not-found>
      <div class="NotFound">
        <p class="code">404</p>
        <h1 class="title">PAGE NOT FOUND</h1>
        <p class="quote">
          糟糕，页面不存在哦。休息一下再走吧~
        </p>
        
        <div class="action">
          <a
            class="VPLink"
            href="javascript:window.history.back()"
            aria-label="go back"
          >
            我要继续学习~
          </a>
        </div>

        <div class="action">
          <a class="VPLink" href="/Yuki/" aria-label="go to home">
            Take me home!
          </a>
        </div>

      </div>
    </template>
    </Layout>
</template>

<style scoped>
/* 样式部分保持不变 */
.NotFound {
  padding: 64px 24px 96px;
  text-align: center;
}
@media (min-width: 768px) {
  .NotFound {
    padding: 96px 24px 128px;
  }
}
.code {
  line-height: 64px;
  font-size: 64px;
  font-weight: 600;
}
.title {
  padding-top: 12px;
  letter-spacing: 0.1px;
  line-height: 28px;
  font-size: 20px;
  font-weight: 700;
}
.quote {
  margin: 0 auto;
  padding-top: 24px;
  max-width: 256px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
.action {
  padding-top: 24px; /* 两个按钮之间会有一点间距 */
}
.VPLink {
  display: inline-block;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  transition: border-color 0.25s, color 0.25s;
}
.VPLink:hover {
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-2);
}
</style>