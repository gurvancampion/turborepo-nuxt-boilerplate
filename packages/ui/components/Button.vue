<script lang="ts" setup>
defineProps<{
  disabled?: boolean
}>()
defineEmits<{
  (e: 'submit', value: string): void
}>()
</script>

<template>
  <button class="btn" :disabled="disabled" @click="$emit('submit')">
    <slot>Button</slot>
  </button>
</template>

<style scoped>
.btn {
  padding: 1rem;
  background-color: red;
  color: black;
}
</style>
