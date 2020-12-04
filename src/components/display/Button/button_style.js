import styled from 'styled-components'

const ButtonContainer = styled('button')`
    font-family: 'Roboto';
    font-size: 16px;
    background-color: ${props => props.color || '#90caf9'};
    opacity: 0.85;
    height: min-content;
    width: 85%;
    padding: 8px;
    margin: 3px auto;
    color: #131a21;
    border-radius: 8px;
    border: none;
    outline: none;
    display: block;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;


    &:hover {
        background-color: ${props => props.color !== '#90caf9' ? props.color : '#2C99F2' } ;
        box-shadow: 0px 15px 20px rgba(44, 153, 242, 0.1);
        color: #fff;
        
    }
`

export { ButtonContainer }