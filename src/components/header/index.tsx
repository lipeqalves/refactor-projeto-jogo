
import { Button } from "../button";
import { HeaderStyled, TitleH1 } from "./style";

interface IProps {
    title: string,
    tituloBtn: string
    onClick: () => void
}

export const Header = ({title,tituloBtn, onClick}:IProps) => {
  return(
  <HeaderStyled>
    <TitleH1>{title}</TitleH1>
    <Button onClick={onClick} name={tituloBtn}/>
  </HeaderStyled>
  )
};
