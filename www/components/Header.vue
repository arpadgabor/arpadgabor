<script setup lang="ts"></script>

<template>
  <header class="fixed top-0 z-50 flex w-screen items-center justify-center pb-2 pt-4">
    <nav class="mx-auto flex h-full w-full max-w-6xl items-center justify-between gap-x-4 px-6">
      <NuxtLink to="/">
        <p
          :class="[
            'bg-accent text-dark font-bold transition duration-1000',
            'flex h-8 items-center rounded-full px-3',
            'hover:bg-accent-border hover:shadow-accent/25 hover:shadow-xl',
          ]"
        >
          arpad's
        </p>
      </NuxtLink>

      <div class="bg-bright/10 h-px min-w-8 flex-1"></div>

      <div
        class="internal-links dark:bg-bright/10 dark:border-bright/10 flex gap-x-1 overflow-x-auto rounded-full border p-1 backdrop-blur-lg"
      >
        <HeaderLink href="/about">about</HeaderLink>
        <HeaderLink href="/blog">blog</HeaderLink>
        <HeaderLink href="/notes">notes</HeaderLink>
        <HeaderLink href="/library">library</HeaderLink>

        <div class="w-4"></div>

        <HeaderLink href="https://github.com/arpadgabor/" target="_blank" class="!px-3" title="GitHub Profile">
          <Icon name="ph:github-logo" :size="21" />
        </HeaderLink>
        <HeaderLink href="https://twitter.com/arpad_gabor/" target="_blank" class="!px-3" title="Twitter Profile">
          <Icon name="ph:twitter-logo" :size="21" />
        </HeaderLink>
        <HeaderLink
          href="https://www.linkedin.com/in/arpadgabor/"
          target="_blank"
          class="!px-3"
          title="LinkedIn Profile"
        >
          <Icon name="ph:linkedin-logo" :size="21" />
        </HeaderLink>
      </div>
    </nav>
  </header>
</template>
