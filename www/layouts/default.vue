<script setup lang="ts"></script>

<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <Main class="flex-1">
      <slot />
    </Main>
    <Footer />
  </div>
</template>
