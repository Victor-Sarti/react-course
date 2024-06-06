import styled from "styled-components";
import { AccordionButton, AccordionContainer, AccordionContent, AccordionImage, AccordionText, AccordionWrapper } from "./style";
import { AngleUp} from "./src";
import { AngleDown } from "./src";
import { useState } from "react";

export default function Accordion() {
    const [visible, setVisible] = useState(false)

    function HandleAccordion(){
        return setVisible(! visible)
    }
    return(
        <AccordionWrapper> 
            <AccordionContainer>
                 <AccordionText> Whats is an accordion component ? </AccordionText>
                 <AccordionButton onClick={HandleAccordion}>
                    <AccordionImage  src={ visible == false ? AngleDown : AngleUp}/>
                  </AccordionButton>
             </AccordionContainer>
      {visible &&(
            <AccordionContent>
            <AccordionText> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati et commodi corporis, impedit, unde non nulla, repudiandae mollitia fugit blanditiis sequi labore consequatur fugiat quia distinctio qui nisi quasi! Sint ex ducimus nulla facilis. Ullam reprehenderit fugit nulla enim modi? Minima asperiores quibusdam dolorum labore ducimus debitis, eligendi sapiente atque? </AccordionText>
        </AccordionContent> 
       
       )} 
      
      </AccordionWrapper>

    )
} 