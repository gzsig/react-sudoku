import styled from 'styled-components'

const HeaderContainer = styled('div')`
  display: flex;
  flex-direction: row;
  width: 90%; 
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto';
`

const ThemeContainer = styled('div')`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: 0;
`

export { HeaderContainer, ThemeContainer }