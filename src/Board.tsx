import type { Cell } from "./interfaces/Cell";
import SquareButton from "./SquareButton";

interface boardProps {
  onClick: (clickedCell: Cell) => void;
  cells: Cell[][];
}

function Board({ onClick, cells }: boardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {cells.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {row.map((cell) => (
            <SquareButton
              key={cell.id}
              onClick={() => onClick(cell)}
              value={cell.value}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
