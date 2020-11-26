import React from "react";
import Board from "./components/Board/Board";

function App() {
  const game = [
    [0, 2, 3, 4, 2, 6, 3, 0, 1],
    [0, 2, 3, 4, 2, 6, 3, 0, 1],
    [0, 2, 3, 4, 2, 6, 3, 0, 1],
    [0, 2, 3, 4, 2, 6, 3, 0, 1],
    [0, 2, 3, 4, 2, 6, 3, 0, 1],
    [0, 2, 3, 4, 2, 6, 3, 0, 1],
    [0, 2, 3, 4, 2, 6, 3, 0, 1],
    [0, 2, 3, 4, 2, 6, 3, 0, 1],
    [0, 2, 3, 4, 2, 6, 3, 0, 1],
  ];
  return (
    <>
      <h1>sudoku</h1>;
      <Board values={game} />
    </>
  );
}

export default App;
