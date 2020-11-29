import React from 'react'
import * as S from './button_style'

const Button = (props) => {
    return (
        <S.ButtonContainer onClick={props.onClick}>
            {props.children}
        </S.ButtonContainer>
    )
}

export { Button }