import styled from "styled-components";
import { AccordionButton, AccordionContainer, AccordionContent, AccordionImage, AccordionText, AccordionWrapper } from "./style";
import { AngleUp} from "./src";
import { AngleDown } from "./src";
import { useState } from "react";

export default function Accordion(props) {
    const [visible, setVisible] = useState(false)

    function HandleAccordion(){
        return setVisible(! visible)
    }
    return(
        <AccordionWrapper> 
            <AccordionContainer>
                 <AccordionText> {props.title}</AccordionText>
                 <AccordionButton onClick={HandleAccordion}>
                    <AccordionImage  src={ visible == false ? AngleDown : AngleUp}/>
                  </AccordionButton>
             </AccordionContainer>
      {visible &&(
            <AccordionContent>
            <AccordionText> {props.description}</AccordionText>
        </AccordionContent> 
       
       )} 
      
      </AccordionWrapper>

    )
} 