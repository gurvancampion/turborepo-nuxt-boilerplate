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
  <button class="btn" :disabled="disabled" @click="$emit('submit')">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  padding: 1rem;
  background-color: red;
  color: black;
}
</style>
