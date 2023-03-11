
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Button } from "../../components/button";
import { CardPersonagem } from "../../components/card_personagem";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { GlobalContext } from "../../context/context";
import { Container, Conteudo,ContainerPincipal, DivImg } from "./styles";

export const StageOne = () => {
const navigate = useNavigate()

  const mudarPagina = () =>{
    navigate("/inicio")
  }
  const { isDisabled } = useContext(GlobalContext)
  return (
    <ContainerPincipal>
    <Header onClick={mudarPagina} title="ZEUS" tituloBtn={"Voltar"} />
    <Container>
      <DivImg >
      <CardPersonagem  nomePersonagem={"Zeus"} urlImg="https://uploads.spiritfanfiction.com/historias/capas/202011/o-raio-de-zeus-21101400-261120200857.jpg" variant={""}/>
      </DivImg>

      <Conteudo>
        <h1>Stege One</h1>
        <p>
        Zeus esta tentando se vingar de dois titans, por terem roubado a
        chama sagrada e entrgue aos humanos. Quem são esses titans?
        </p>
        <ul>
          <li> a) Cronos e Gaia</li>
          <li>b) Hades e Poseidon</li>
          <li>c) Epimeteu e Prometeu</li>
          <li>d) Pandora e Prometeu</li>
          <li>e) Epimeteu e Atenas</li>
        </ul>
        <Input  />
        <Button name={"Proximo"} onClick={() => {console.log("habilitado") } } isDisabled={isDisabled}  />
      </Conteudo>
    </Container>
    <Footer text="Filipe Alves 2023"/>
    </ContainerPincipal>

  );
};
