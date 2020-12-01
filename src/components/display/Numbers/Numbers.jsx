import React from 'react'
import * as S from './numbers_style'
import { BiEraser } from 'react-icons/bi'

const Numbers = (props) => {
  return (
    <S.NumbersContainer onClick={props.onClick}>
      <S.Value value={1} > 1 </S.Value>
      <S.Value value={2} > 2 </S.Value>
      <S.Value value={3} > 3 </S.Value>
      <S.Value value={4} > 4 </S.Value>
      <S.Value value={5} > 5 </S.Value>
      <S.Value value={6} > 6 </S.Value>
      <S.Value value={7} > 7 </S.Value>
      <S.Value value={8} > 8 </S.Value>
      <S.Value value={9} > 9 </S.Value>
      <S.Value value={0} > <BiEraser /> </S.Value>
    </S.NumbersContainer>
  )
}

export { Numbers }