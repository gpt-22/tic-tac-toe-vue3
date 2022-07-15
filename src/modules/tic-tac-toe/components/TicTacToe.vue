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
      <button class="button" @click="restartGame">Сбросить счет</button>
      <button class="button" @click="startGame">Новая игра</button>
      <div class="dimension-select-wrapper">
        <select v-model="dimension" class="dimension-select">
          <option
            v-for="option in selectOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </div>
    </div>

    <div class="area" :style="{ 'grid-template': areaGridTemplate }">
      <div
        v-for="cell in cells"
        :key="cell.index"
        class="cell"
        :class="{ win: winIndexes.includes(cell.index) }"
        @click="() => onCellClick(cell)"
      >
        <img
          v-if="cell.value"
          :src="getCellIconPath(cell.value)"
          :alt="cell.value"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { selectOptions } from "@/modules/tic-tac-toe/data";
import { Cell, Player } from "@/modules/tic-tac-toe/types";
import { getInitialCells, getWinIndexes } from "@/modules/tic-tac-toe/game";

export default defineComponent({
  name: "TicTacToe",
  setup() {
    const dimension = ref<number>(selectOptions[0].value);
    const cells = ref<Cell[]>(getInitialCells(dimension.value));
    watch(dimension, () => {
      cells.value = getInitialCells(dimension.value);
      startGame();
    });

    const getCellIconPath = (cellValue: null | Player) => {
      const iconName = cellValue === Player.X ? "cross" : "circle";
      return require(`@/assets/${iconName}.svg`);
    };

    const isDraft = computed<boolean>(() =>
      cells.value.every((cell) => cell.value)
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

    return {
      selectOptions,
      dimension,
      onCellClick,
      cells,
      current,
      xWin,
      oWin,
      drafts,
      winner,
      winIndexes,
      gameText,
      endGameText,
      restartGame,
      startGame,
      isDraft,
      isGameOver,
      getCellIconPath,
      areaGridTemplate,
      isXActive,
      isOActive,
    };
  },
});
</script>

<style lang="scss">
$color-primary: #42b883;
$color-primary-dark: #33a06f;

$cell-size: 80px;

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
.button,
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

.button {
  padding: 8px 16px;
  background-color: #fff;
  transition: 0.2s ease-in background-color;

  &:hover {
    background-color: #f5f5f5;
  }
}
.dimension-select-wrapper {
  position: relative;

  &::after {
    content: url("@/assets/arrow-down.svg");
    font-size: 1rem;
    top: 6px;
    right: 10px;
    position: absolute;
  }
}

.dimension-select {
  padding-right: 40px;
  -webkit-appearance: none;
  appearance: none;
}

.area {
  display: grid;
  gap: 16px;
  grid-template: repeat(3, $cell-size) / repeat(3, $cell-size);
}
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
