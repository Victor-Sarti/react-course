import Relume from "./src/svg/Relume.svg"
import * as S from "./style"
export default function DropDownMenu (props){
    
    
    return(
       <S.Container>
{
    props.pages && (props.pages > props.pages?.length == 0) ? 

    props.pages.map((pages, key) => {
        return(
            <S.Content key={key}>
                <S.Image src={Relume}/>
                <S.ContentText>
                        <S.Title>{pages.Title}</S.Title>
                        <S.Description>{pages.Description}</S.Description>  
                </S.ContentText>
            </S.Content>
        )
    })

    : <h1> Coloque um Array</h1>
}

            
       </S.Container>
    )
}