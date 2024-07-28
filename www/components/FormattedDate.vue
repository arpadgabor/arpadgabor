<script setup lang="ts">
interface Props {
  date: Date
}

defineProps<Props>()
</script>

<template>
  <time :datetime="date.toISOString()">
    {{
      date.toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    }}
  </time>
</template>
