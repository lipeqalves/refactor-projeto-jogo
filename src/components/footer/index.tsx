import { FooterStyled } from "./styles"
import { FaRegCopyright } from 'react-icons/fa';
interface IProps{
    text:string,
}

export const Footer = ({text}:IProps) =>{
    return(
    <FooterStyled>
       <FaRegCopyright/> <h4>{text}</h4>
    </FooterStyled>
    )
}