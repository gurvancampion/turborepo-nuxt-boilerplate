<script lang="ts" setup>
// https://anu-vue.netlify.app/guide/components/button.html
withDefaults(defineProps<{
  color?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  variant?: 'fill' | 'outlined' | 'light' | 'text'
  icon?: string
  appendIcon?: string
}>(), {
  color: 'primary',
  variant: 'fill',
})
</script>

<template>
  <ABtn v-bind="$props">
    <slot>Button</slot>
  </ABtn>
</template>
