import { useState } from "react"
import *  as S from  "./style"
import DropDownMenu from "../DropDownMenu"

export default function Navbar11(){
  const [open, setOpen] = useState(false)
  // Arrow function
  const handleMenu = () => {
    return setOpen(!open)
  }
   const listpages = [
    {
      Title : "Pages one",
    Description : "Lorem ipsum dolor, sit amet consectetur adipisicing."
    },
    {
      Title : "Pages two",
    Description : "Lorem ipsum dolor, sit amet consectetur adipisicing."
    },
    {
      Title : "Pages three",
    Description : "Lorem ipsum dolor, sit amet consectetur adipisicing."
    },
    {
      Title : "Pages four",
    Description : "Lorem ipsum dolor, sit amet consectetur adipisicing."
    },
        ]

   return(
        <S.Container>
            <S.Logo>LOGO</S.Logo>
            <S.Nav>
                <S.Link> Link 1</S.Link>
                <S.Link> Link 2</S.Link>
                <S.Link> Link 3</S.Link>
                <S.Link  onClick={handleMenu} > Link 4</S.Link>
                
                {
                    open && <DropDownMenu pages = {listpages}/>

                }
                <S.ContainerButton>
                   
                    <S.Button> Button </S.Button>
                    <S.Button bgColor="black" > Button </S.Button>
                </S.ContainerButton>
                
            </S.Nav>
        </S.Container>
    )
}