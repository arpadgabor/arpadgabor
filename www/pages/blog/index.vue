<script setup lang="ts">
const { data } = await useAsyncData('home', () => queryContent('blog').find())
</script>

<template>
  <div class="pt-16">
    <h1 class="text-dark-subtle mb-12 max-w-3xl text-4xl font-bold sm:text-5xl md:text-6xl">Blog</h1>

    {{ data }}
  </div>
</template>
