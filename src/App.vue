<script lang="ts" setup>
import { useRoute } from './router'

const title = ref('')
const currentRoute = useRoute()

useTitle(title)

watch(currentRoute, (route) => {
  if (typeof route?.meta?.title === 'string')
    title.value = route.meta.title
}, { immediate: true })
</script>

<template>
  <div bg-base color-base font-sans min-h-full>
    <AppHeader />
    <RouterView />
  </div>
</template>
