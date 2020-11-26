import styled from "styled-components";

interface Props {
  borderT: number;
  borderR: number;
  borderB: number;
  borderL: number;
}

const CellStyle = styled.div<Props>`
  height: 25px;
  width: 25px;
  ${(props) =>
    `border: solid ${props.borderT}px ${props.borderR}px ${props.borderB}px ${props.borderL}px`};
`;

export { CellStyle };
