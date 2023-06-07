<script setup lang="ts">
import type { PropType } from '@nuxtjs/composition-api'
import type { Themes } from './ui'

defineProps({
  as: {
    type: String as PropType<'a' | 'nuxt-link' | 'button'>,
    required: false,
  },
  theme: { type: String as PropType<Themes>, default: 'main' as Themes },
})

const themes: Record<Themes, string> = {
  main: 'bg-main text-gray-dark hover:(bg-main-light)',
  alt: 'bg-alt text-gray-dark hover:(bg-alt-light)',
  light:
    'bg-transparent text-gray-dark dark:(text-white) hover:(bg-gray dark:bg-white bg-opacity-10 dark:bg-opacity-10)',
}
</script>

<template>
  <component
    :is="as || 'button'"
    :class="[
      'h-10 px-3 flex items-center space-x-2',
      'transition rounded-md hover:shadow-lg',
      'font-bold no-underline',
      themes[theme],
    ]"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>
