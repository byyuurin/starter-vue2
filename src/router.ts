import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from 'virtual:generated-pages'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes,
})

export const useRouter = () => {
  const instance = getCurrentInstance()!
  return instance.proxy.$router
}

export const useRoute = () => {
  const instance = getCurrentInstance()!
  return computed(() => instance.proxy.$route)
}

export default router
