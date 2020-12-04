import React from 'react'
import * as S from './slider_style'

const Slider = (props) => {
	return (
		<S.SliderContainer>
			<S.SliderStyle type={props.type} min={props.min} max={props.max} step={props.step} value={props.value} onChange={props.onChange} color={props.color}>
			</S.SliderStyle>
		</S.SliderContainer>

	)
}

export { Slider }