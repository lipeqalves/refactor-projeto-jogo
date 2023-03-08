import { CardPrincipal } from "../../components/card_principal";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Container } from "./styles";


export const Home = () => {
  return (
    <Container>
      <Header title="Caixa de Pandora" />
      <CardPrincipal />
      <Footer text="Filipe Alves 2023"/>
    </Container>
  );
};
