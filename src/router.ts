import recordRaws from 'virtual:generated-pages'
import Vue from 'vue'
import VueRouter from 'vue-router'

function createRoutes() {
  return recordRaws.sort((a, b) => {
    const priority = (path: string) => /\(.*\)\*?$/.test(path)
      ? path.length - Number.MAX_SAFE_INTEGER
      : path.length
    return priority(b.path) - priority(a.path)
  }).map((raw) => {
    const route = { ...raw }
    const targetRE = /\/:\w+\(.*\)\*?$/

    if (targetRE.test(route.path))
      route.path = route.path.replace(targetRE, '/*')

    return route
  })
}

export function useRouter() {
  const instance = getCurrentInstance()!
  return instance.proxy.$router
}

export function useRoute() {
  const instance = getCurrentInstance()!
  return computed(() => instance.proxy.$route)
}

Vue.use(VueRouter)

export const title = ref('')

const routes = createRoutes()
const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta?.title)
    title.value = to.meta.title as string

  next()
})

export default router
