import { Cell, Player } from "@/modules/tic-tac-toe/types";
import {
  getMatrixColumns,
  getMatrixDiagonals,
} from "@/modules/tic-tac-toe/utils";

export const getInitialCells = (dimension: number): Cell[] => {
  return Array.from(Array(dimension * dimension)).map((cell, index) => {
    return {
      value: null,
      index: index,
    };
  });
};

export const getCellIndexesMatrix = (
  cells: Cell[],
  dimension: number
): number[][] => {
  const rows: number[][] = [];

  let row: number[] = [];
  cells.forEach((cell) => {
    if (row.length < dimension) {
      row.push(cell.index);
    }

    if (row.length === dimension) {
      rows.push(row);
      row = [];
    }
  });

  return rows;
};

const findWinIndexes = (indexArrays: number[][], cells: Cell[]): number[] => {
  const winIndexes = indexArrays.find((indexArray) => {
    const isCross = indexArray.every(
      (index) => cells[index].value === Player.X
    );
    const isCircle = indexArray.every(
      (index) => cells[index].value === Player.O
    );

    return isCross || isCircle;
  });

  return winIndexes ?? [];
};

export const getWinIndexes = (cells: Cell[], dimension: number): number[] => {
  const cellIndexesMatrix = getCellIndexesMatrix(cells, dimension);

  const rowWin: number[] = findWinIndexes(cellIndexesMatrix, cells);

  const columns: number[][] = getMatrixColumns(cellIndexesMatrix);
  const columnWin: number[] = findWinIndexes(columns, cells);

  const diagonals: number[][] = getMatrixDiagonals(cellIndexesMatrix);
  const diagonalWin: number[] = findWinIndexes(diagonals, cells);

  return [...rowWin, ...columnWin, ...diagonalWin];
};
