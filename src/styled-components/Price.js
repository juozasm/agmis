
import styled from 'styled-components';
export const Price = styled.p`
color: #d64161;
padding:0.5em;
text-decoration: none;
display:inline-block;
&:after{
    content:'€'
}
&:before{
    content:'Kaina: '
}
`

