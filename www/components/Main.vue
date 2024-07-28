<script setup lang="ts"></script>

<template>
  <main class="relative mx-auto w-full max-w-6xl flex-1 px-6 pb-16 pt-20">
    <div class="border-bright/10 absolute left-2 top-0 z-0 h-full w-px border-l border-dashed"></div>
    <div class="border-bright/10 absolute right-2 top-0 z-0 h-full w-px border-r border-dashed"></div>

    <slot />
  </main>
</template>
