<script lang="ts">
import { defineComponent, useMeta, useContext } from '@nuxtjs/composition-api'
import { Button } from '~/components/ui'

export default defineComponent({
  head: {},
  components: {
    Button,
  },
  setup() {
    useMeta({ title: 'Want some coffee?' })

    const { $colorMode } = useContext()

    const toggleColorMode = () => {
      console.log($colorMode.value)
      $colorMode.value = $colorMode.value === 'dark' ? 'light' : 'dark'
    }

    return {
      toggleColorMode,
    }
  },
})
</script>

<template>
  <div
    :class="'container h-full flex flex-col items-center justify-center text-center'"
  >
    <h1 class="text-2xl font-bold">Shhh, I'm working here.</h1>
    <p class="mt-4">
      This page will contain stuff in the future. Meanwhile, find me on:
    </p>

    <div class="flex mt-8 space-x-4">
      <Button as="a" href="https://github.com/arpadgabor" target="_blank">
        GitHub
      </Button>

      <Button
        as="a"
        href="https://twitter.com/arpad_gabor"
        theme="alt"
        target="_blank"
      >
        Twitter
      </Button>

      <Button
        as="a"
        href="https://instagram.com/arpad_gabor"
        theme="light"
        target="_blank"
      >
        Instagram
      </Button>
    </div>
  </div>
</template>
