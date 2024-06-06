import styled from "styled-components";
import { AccordionButton, AccordionContainer, AccordionImage, AccordionText } from "./style";
import { AngleUp} from "./src";
import { AngleDown } from "./src";

export default function Accordion() {
    return(
        <AccordionContainer>
            <AccordionText> Whats is an accordion component ? </AccordionText>
            <AccordionButton>
               <AccordionImage  src={AngleUp}/>
            </AccordionButton>
        </AccordionContainer>
      

    )
} 