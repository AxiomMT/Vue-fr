<script>
export default {
  name: 'BaseButton',
  inheritAttrs: false
}
</script>

<template>
  <button v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<style></style>
