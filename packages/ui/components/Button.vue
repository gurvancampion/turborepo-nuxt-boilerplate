<script lang="ts" setup>
import { onMounted } from 'vue'

defineProps<{
  disabled?: boolean
}>()
defineEmits<{
  (e: 'submit', value: string): void
}>()

onMounted(() => {
  // eslint-disable-next-line no-console
  console.log('button log')
})
</script>

<template>
  <button class="btn-blue" :disabled="disabled" @click="$emit('submit')">
    <slot>Button</slot>
  </button>
</template>
