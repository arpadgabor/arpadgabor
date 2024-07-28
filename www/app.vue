<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body {
  @apply font-sans;
  @apply dark:bg-dark bg-bright;
  @apply dark:text-bright text-dark;
}

.highlighted {
  @apply text-bright !important;
}
</style>
