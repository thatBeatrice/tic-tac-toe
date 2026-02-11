interface squareProps {
  onClick: () => void;
  value: boolean | null;
}

function SquareButton({ onClick, value }: squareProps) {
  return (
    <button
      type="button"
      className="w-20 h-20 bg-gray-500 border-2 border-black"
      onClick={onClick}
    >
      {value !== null && (value == true ? "O" : "X")}
    </button>
  );
}

export default SquareButton;
