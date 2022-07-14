import { shallowMount } from "@vue/test-utils";
import TicTacToe from "@/modules/tic-tac-toe/components/TicTacToe.vue";

describe("TicTacToe.vue", () => {
  it("display cross after click on first click on game field", async () => {
    const wrapper = shallowMount(TicTacToe);
    const firstCell = wrapper.find(".cell");

    await firstCell.trigger("click");

    expect(firstCell.find("img").attributes("src")).toContain("cross");
  });
});
// Restart game on restart button click
// Cross winner text displayed
// Circle winner text displayed
// Draft winner text displayed
// Player name highlighted on his turn
