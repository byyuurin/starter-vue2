<script lang="ts" setup>
import { useRoute } from './router'
const title = ref('')
const currentRoute = useRoute()

useTitle(title)

watch(currentRoute, (route) => {
  if (typeof route?.meta?.title === 'string') title.value = route.meta.title
}, { immediate: true })
</script>


<template>
  <div font-sans flex="~ col" h-full overflow-auto>
    <app-header />
    <div flex="grow">
      <div w-full min-h-full>
        <router-view />
      </div>
    </div>
  </div>
</template>
