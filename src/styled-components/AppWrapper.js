import styled , {css}from 'styled-components';
export const AppWrapper = styled.section`
background: white;

  ${props => props.position ==='center' && css`
  margin:0px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition:1s;
  `}
`;

