import { useNavigate} from "react-router-dom";
import { CardPrincipal } from "../../components/card_principal";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

import { Container } from "./styles";

export const Home = () => {
const navigate = useNavigate()

  const mudarPagina = () =>{
    navigate("/inicio")
  }
  return (
      <Container>
        <Header onClick={mudarPagina} title="Caixa de Pandora" tituloBtn={"Iniciar Jogo"}  />
        <CardPrincipal />
        <Footer text="Filipe Alves 2023"/>
      </Container>
  );
};
