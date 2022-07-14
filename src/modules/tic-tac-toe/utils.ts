export const getMatrixColumns = (matrix: number[][]): number[][] => {
  const dimension = matrix[0].length;
  const columns: number[][] = [];

  for (let i = 0; i < dimension; i++) {
    columns.push(matrix.map((row) => row[i]));
  }

  return columns;
};

export const getMatrixDiagonals = (matrix: number[][]): number[][] => {
  const dimension = matrix[0].length;
  const diagonals: number[][] = [[], []];

  for (let i = 0; i < dimension; i++) {
    diagonals[0].push(matrix[i][i]);
    diagonals[1].push(matrix[i][dimension - i - 1]);
  }

  return diagonals;
};
