export enum Player {
  X = "x",
  O = "o",
}

export type Cell = {
  value: null | Player;
  index: number;
};
