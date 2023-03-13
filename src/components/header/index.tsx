
import { Button } from "../button";
import { HeaderStyled, TitleH1 } from "./style";

interface IProps {
    title: string,
    tituloBtn: string
    onClick: () => void
    isDisabled?: boolean
}

export const Header = ({title,tituloBtn, onClick, isDisabled}:IProps) => {
  return(
  <HeaderStyled>
    <TitleH1>{title}</TitleH1>
    <Button onClick={onClick} name={tituloBtn} isDisabled={isDisabled}/>
  </HeaderStyled>
  )
};
