<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>

<template>
  <NuxtLink :to="href" class="hover:bg-bright/10 flex h-8 items-center justify-center rounded-full px-3 transition">
    <slot />
  </NuxtLink>
</template>
