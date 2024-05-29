import { SquereContainer, SquereLink } from "./styles";

export default function Square (props){
    console.log(props.borderStyle)
    return(
   <SquereContainer borderStyle={props.borderStyle} colorStyle={props.colorStyle}>

    <SquereLink href="https://styled-components.com/" target="_blank">  {props.borderStyle ? props.borderStyle : "Adicione a prop no Square"} </SquereLink>
  
   </SquereContainer>
        
            
        
    )
}