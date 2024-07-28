<script setup lang="ts">
const today = new Date()
</script>

<template>
  <footer class="text-dark-footer relative mx-auto flex w-full max-w-6xl px-6 pb-4 pt-16 text-sm">
    <div class="border-bright/10 absolute left-2 top-0 z-0 h-full w-px border-l border-dashed"></div>
    <div class="border-bright/10 absolute right-2 top-0 z-0 h-full w-px border-r border-dashed"></div>

    <p>&copy; {{ today.getFullYear() }} Arpad Gabor. All rights reserved.</p>
  </footer>
</template>
