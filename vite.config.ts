import { defineConfig } from 'vite'

import autoImport from 'unplugin-auto-import/vite'
import unocss from 'unocss/vite'
import pages from 'vite-plugin-pages'
import { createVuePlugin as vue } from 'vite-plugin-vue2'
import vueScriptSetup from 'unplugin-vue2-script-setup/vite'
import vueComponents from 'unplugin-vue-components/vite'
import build from './vite.build'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    autoImport({
      imports: ['@vue/composition-api', '@vueuse/core'],
      dts: './src/auto-imports.d.ts',
    }),
    unocss(),
    pages(),
    vue(),
    vueScriptSetup(),
    vueComponents({ dts: './src/components.d.ts', types: [] }),
  ],
  build,
})
