import React, { FunctionComponent } from "react";
import * as S from "./cell_style";

interface CellProps {
  value: number;
  borderT: number;
  borderR: number;
  borderB: number;
  borderL: number;
}

const Cell: FunctionComponent<CellProps> = (props) => {
  return (
    <S.CellStyle
      borderT={props.borderT}
      borderR={props.borderR}
      borderB={props.borderB}
      borderL={props.borderL}
    >
      {props.value}
    </S.CellStyle>
  );
};

export default Cell;
