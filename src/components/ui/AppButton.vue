<template>
  <button
    class="app-button"
    :disabled="disabled"
    @click.prevent="$emit('click')"
  >
    <slot>
      {{ text }}
    </slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps({
  text: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
defineEmits(["click"]);
</script>

<style scoped lang="scss">
@import "@/assets/styles/vars.scss";

.app-button {
  padding: 8px 16px;
  border-radius: 6px;
  background-color: $color-primary;
  color: white;
  line-height: 18px;
  border: none;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: darken($color-primary, 5);
  }

  &:focus {
    outline-offset: 2px;
    outline: 2px solid darken($color-primary, 10);
  }

  &:active {
    background-color: darken($color-primary, 20);
  }

  &:disabled {
    background-color: $color-background-disabled;
    color: $color-disabled;
    cursor: not-allowed;
  }
}
</style>
