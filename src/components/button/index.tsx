import { ButtonStyled } from "./styles"

interface IProps{
    name: string
}

export const Button = ({name}:IProps) =>{
    return(
        <ButtonStyled>
            {name}
        </ButtonStyled>
    )
}