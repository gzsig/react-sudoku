import styled from 'styled-components'

const NumbersContainer = styled('div')`
	width: 75%;
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
  margin: 10px auto 5px;

`

const Value = styled('button')`
	font-size: 26px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	color: #4d73a0;
	background: none;
  background-color: transparent;
  border: 0 none transparent;
  appearance: none;
`

export { NumbersContainer, Value}
