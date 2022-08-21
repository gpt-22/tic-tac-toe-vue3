<template>
  <div class="tic-tac-toe">
    <h1 class="game-text" :class="{ active: isGameOver }">
      {{ isGameOver ? endGameText : gameText }}
    </h1>

    <div class="results">
      <span :class="{ active: isXActive }"> Крестики: {{ xWin }} </span>
      <span>Ничья: {{ drafts }}</span>
      <span :class="{ active: isOActive }"> Нолики: {{ oWin }} </span>
    </div>

    <div class="controls">
      <app-button @click="restartGame">Сбросить счет</app-button>
      <app-button @click="startGame">Новая игра</app-button>
      <app-select v-model:model-value="dimension" :options="selectOptions" />
    </div>

    <div class="area" :style="{ 'grid-template': areaGridTemplate }">
      <game-area-cell
        v-for="cell in cells"
        :key="cell.index"
        :cell="cell"
        :is-win="winIndexes.includes(cell.index)"
        @click="() => onCellClick(cell)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";

import { AppButton, AppSelect } from "@/components/ui";

import GameAreaCell from "./GameAreaCell.vue";
import { selectOptions } from "../data";
import { Cell, Player } from "../types";
import { getInitialCells, getWinIndexes } from "../game";

const dimension = ref<number>(selectOptions[0].value);
const cells = ref<Cell[]>(getInitialCells(dimension.value));
watch(dimension, () => {
  cells.value = getInitialCells(dimension.value);
  startGame();
});

const isDraft = computed<boolean>(
  () => cells.value.every((cell) => cell.value) && !winner.value
);

const winner = ref<Player | null>(null);
const gameText = computed(
  () => `Ходят ${current.value === Player.X ? "крестики" : "нолики"}`
);
const endGameText = computed(() =>
  isDraft.value
    ? "Ничья :^)"
    : `Победили ${winner.value === Player.X ? "крестики" : "нолики"}!`
);
const isGameOver = computed(() => winner.value?.length || isDraft.value);

const step = ref<number>(0);
const current = computed(() => {
  return step.value % 2 === 0 ? Player.X : Player.O;
});

const xWin = ref(0);
const oWin = ref(0);
const drafts = ref(0);

const onCellClick = (cell: Cell) => {
  if (!cell.value && !isGameOver.value) {
    cell.value = current.value;
    step.value++;
  }
};

const winIndexes = ref(getWinIndexes(cells.value, dimension.value));

const checkWinner = () => {
  winIndexes.value = getWinIndexes(cells.value, dimension.value);

  if (winIndexes.value.length) {
    const cellWon = cells.value[winIndexes.value[0]];
    winner.value = cellWon.value;

    if (cellWon.value === Player.X) {
      xWin.value++;
    } else {
      oWin.value++;
    }
  } else if (isDraft.value) {
    drafts.value++;
  }
};
watch(step, checkWinner);

const startGame = (): void => {
  cells.value = getInitialCells(dimension.value);
  winner.value = null;
  step.value = 0;
};
const restartGame = (): void => {
  xWin.value = 0;
  oWin.value = 0;
  drafts.value = 0;
  startGame();
};

// styles
const areaGridTemplate = computed<string>(() => {
  return `repeat(${dimension.value}, 80px) / repeat(${dimension.value}, 80px)`;
});
const isXActive = computed<boolean>(
  () => current.value === Player.X && !isGameOver.value
);
const isOActive = computed<boolean>(
  () => current.value === Player.O && !isGameOver.value
);
</script>

<style lang="scss">
@import "@/assets/styles/vars.scss";

.tic-tac-toe {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
.active {
  color: $color-primary;
}
.game-text {
  margin: 0;
}
.results {
  display: flex;
  justify-content: space-between;
  gap: 24px;
}
.controls {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.area {
  display: grid;
  gap: 16px;
  grid-template: repeat(3, $cell-size) / repeat(3, $cell-size);
}
</style>
