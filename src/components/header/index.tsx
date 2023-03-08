
import { Button } from "../button";
import { HeaderStyled, TitleH1 } from "./style";

interface IProps {
    title: string,
}

export const Header = ({title}:IProps) => {
  return(
  <HeaderStyled>
    <TitleH1>{title}</TitleH1>


    <Button name="Iniciar Jogo"/>


  </HeaderStyled>
  )
};
