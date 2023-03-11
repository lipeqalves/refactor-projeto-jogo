import { ButtonStyled } from "./styles"

interface IProps{
    name: string
    onClick?: ()=> void
    type?: "button" | "submit" | "reset" | undefined
    isDisabled?: boolean
}

export const Button = ({name, onClick,type, isDisabled = false}:IProps) =>{
    return(
        <ButtonStyled isDisabled={isDisabled} onClick={onClick} type={type} disabled={isDisabled}>
            {name}
        </ButtonStyled>
    )
}
