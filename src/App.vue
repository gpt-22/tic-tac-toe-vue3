<template>
  <TicTacToe />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TicTacToe from "@/modules/tic-tac-toe/components/TicTacToe.vue";

export default defineComponent({
  name: "App",
  components: {
    TicTacToe,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 40px;
}
</style>
