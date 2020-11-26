import React, { FunctionComponent } from "react";
import Cell from "../Cell/Cell";
import * as S from "./board_style";

interface BoardProps {
  values: number[][];
}

const Board: FunctionComponent<BoardProps> = (props) => {
  return (
    <>
      {props.values.map((row) => {
        return (
          <S.Row>
            {row.map((col) => {
              return <Cell value={col} />;
            })}
          </S.Row>
        );
      })}
    </>
  );
};

export default Board;
