import Board from "./Board";
import { useState } from "react";
import type { Cell } from "./interfaces/Cell";

function Game() {
  const boardDimensions = 3;

  const [round, setRound] = useState<boolean>(false);
  const [cells, setCells] = useState<Cell[][]>(
    Array.from({ length: boardDimensions }, (_, row) =>
      Array.from({ length: boardDimensions }, (_, col) => ({
        id: row * boardDimensions + col,
        value: null,
      })),
    ),
  );

  const handleClick = (clickedCell: Cell) => {
    if (clickedCell.value !== null) {
      return;
    }

    const newCells = cells.map((row) =>
      row.map((cell) => {
        if (cell.id === clickedCell.id) {
          return { ...cell, value: round };
        }
        return cell;
      }),
    );

    setCells(newCells);
    setRound(!round);
  };

  return (
    <div className="min-w-screen min-h-screen bg-gray-500">
      <h1 className="text-center text-5xl">Tic Tac Toe</h1>
      <h1 className="text-center text-2xl">Turn: {round ? "O" : "X"}</h1>
      <Board onClick={handleClick} cells={cells} />
    </div>
  );
}

export default Game;
