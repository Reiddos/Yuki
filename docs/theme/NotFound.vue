<template>
  <div class="not-found-page" style="text-align:center; margin-top:100px;">
    <h1>404</h1>
    <p>你访问的页面不存在</p>
    <button @click="goBack" style="padding:10px 20px; font-size:16px; cursor:pointer;">
      返回上一页
    </button>
  </div>
</template>

<script setup>
const goBack = () => {
  if (document.referrer) {
    // 有上一页，直接回去
    history.back();
  } else {
    // 没有上一页就回首页
    window.location.href = '/';
  }
};
</script>

<style>
.not-found-page button {
  background-color: #007acc;
  border: none;
  color: white;
  border-radius: 5px;
}
.not-found-page button:hover {
  background-color: #005fa3;
}
</style>
