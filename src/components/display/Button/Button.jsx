import React from 'react'
import * as S from './button_style'

const Button = (props) => {
    return (
        <S.ButtonContainer onClick={props.onClick} name={props.name}>
            {props.name}
        </S.ButtonContainer>
    )
}

export { Button }