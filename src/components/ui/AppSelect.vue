<template>
  <div class="dimension-select-wrapper">
    <select v-model="model" class="dimension-select">
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps(["options", "modelValue"]);
const emits = defineEmits(["update:modelValue"]);

const model = ref(null);
watch(model, () => {
  emits("update:modelValue", model.value);
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.dimension-select-wrapper {
  position: relative;

  &::after {
    content: url("@/assets/icons/arrow-down.svg");
    font-size: 1rem;
    top: 6px;
    right: 10px;
    position: absolute;
  }
}

.dimension-select {
  padding: 8px 16px;
  border: 2px solid #dadada;
  border-radius: 8px;

  &:focus {
    outline: 2px solid $color-primary-dark;
  }
  &:active {
    outline: 2px solid $color-primary;
  }
}

.dimension-select {
  padding-right: 40px;
  -webkit-appearance: none;
  appearance: none;
}
</style>
