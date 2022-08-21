<template>
  <div class="cell" :class="{ win: isWin }">
    <img
      v-if="cell.value"
      :src="getCellIconPath(cell.value)"
      :alt="cell.value"
    />
  </div>
</template>

<script setup lang="ts">
import { Cell, Player } from "@/modules/tic-tac-toe/types";
import { defineProps } from "vue";

defineProps<{
  cell: Cell;
  isWin: boolean;
}>();

const getCellIconPath = (cellValue: null | Player) => {
  const iconName = cellValue === Player.X ? "cross" : "circle";
  return require(`@/assets/icons/${iconName}.svg`);
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/vars.scss";

.cell {
  width: $cell-size;
  height: $cell-size;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dadada;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;

  &.win {
    border: 2px solid $color-primary;
    box-shadow: 0 0 8px $color-primary, 0 0 10px $color-primary;
  }
}
</style>
