<script lang="ts" setup>
import { StarIcon } from '@heroicons/vue/24/solid/index.js'

defineProps<{
  disabled?: boolean
}>()
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    :disabled="disabled"
  >
    <slot>
      <StarIcon class="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
      Button text
    </slot>
  </button>
</template>
