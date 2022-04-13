/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
/// <reference types="unplugin-vue2-script-setup/types" />

declare module '*.vue' {
  import type { defineComponent } from '@vue/composition-api'
  const component: ReturnType<typeof defineComponent>
  export default component
}
