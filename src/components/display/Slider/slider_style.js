import styled from 'styled-components'

const SliderContainer = styled('div')`
  width: 75%; 
  margin: 10px auto;
`
const SliderStyle = styled('input')`
  /* slide bar */
   -webkit-appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;  
    background: #8AC2D0;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;

  &:hover {
    opacity: 0.9;
  }
  /* slider */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 12px;
    border-radius: 4px; 
    background: #347383;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease 0s;

    &:hover {
      width: 24px;
      height: 14px;
    }
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 12px;
    border-radius: 4px; 
    background: #347383;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease 0s;

    &:hover {
      width: 24px;
      height: 14px;
    }
}
`

export { SliderContainer, SliderStyle }
