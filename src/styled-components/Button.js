import styled, { css } from 'styled-components';
export const Button = styled.button`
  transition:1s;
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 1em;
  background: transparent;
  color: blueviolet;
  cursor:pointer;
  border: 2px solid blueviolet;
  
  &:hover{
    background: blueviolet;
    color: white;
    
  }

  ${props => props.animate && css`
  &:hover{
    transition: ease-out 1s;
    transform:scale(10);
    opacity:0;
    
  }
  transition: ease-out 1s;
  transform:scale(10);
  opacity:0;
  `}

${props => props.loaded===false && css`
transition:0.3s
position: fixed;
font-size:50px;
margin:0px;
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:hover{
    transition: ease-out 1s;
}
  
  `}
`;
