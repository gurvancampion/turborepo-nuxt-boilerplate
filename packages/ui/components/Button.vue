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
