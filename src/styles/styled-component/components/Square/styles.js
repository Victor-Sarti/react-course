import styled from "styled-components";

export const SquereContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: 1px ${props => props.borderStyle ? props.borderStyle : "solid"} black;
width: 200px;
height: 200px;
background-color: ${props => props.colorStyle ? props.colorStyle : "grey"};
` 
  


export const SquereLink = styled.a`
text-decoration:none;
font-size: 18px;
color: darkblue;
` 
