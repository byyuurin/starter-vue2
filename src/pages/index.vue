<route lang="yaml">
meta:
  title: Vue2 Starter
</route>

<template>
  <div mx-auto p-6 text-center>
    <div m-4>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://v2.vuejs.org/" target="_blank">
        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
      <a href="https://uno.antfu.me/" target="_blank">
        <img src="../assets/unocss.svg" class="logo unocss" alt="UnoCSS logo" />
      </a>
    </div>
    <HelloWorld msg="Hello Vue 2 + TypeScript + Vite + UnoCSS" />
  </div>
</template>

<style lang="postcss">
.logo {
  --uno: "inline-block h-24 p-6 box-content";

  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.unocss:hover {
  filter: drop-shadow(0 0 2em #616161aa);
}
</style>
